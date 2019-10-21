<?php

namespace Drupal\gutenberg\Service;

use Drupal\Core\Database\Connection;
use Drupal\Core\Entity\EntityTypeBundleInfoInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\Render\RendererInterface;
use Drupal\editor\Entity\Editor;
use Drupal\file\FileInterface;
use Drupal\gutenberg\DataProvider\EntityDataProviderManager;
use Drupal\gutenberg\MediaEntityRendererInterface;
use Drupal\gutenberg\MediaTypeGuesserInterface;
use Drupal\gutenberg\MediaUploaderInterface;
use Drupal\gutenberg\Persistence\MediaTypePersistenceManager;
use Drupal\media\MediaInterface;
use Drupal\media_library\MediaLibraryState;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;

class MediaService {

  /**
   * @var \Drupal\gutenberg\MediaTypeGuesserInterface
   */
  protected $mediaTypeGuesser;

  /**
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * @var \Drupal\gutenberg\Persistence\MediaTypePersistenceManager
   */
  protected $mediaTypePersisterManager;

  /**
   * @var \Drupal\gutenberg\DataProvider\EntityDataProviderManager
   */
  protected $entityDataProviderManager;

  /**
   * @var \Drupal\Core\Extension\ModuleHandlerInterface
   */
  protected $moduleHandler;

  /**
   * @var \Drupal\gutenberg\MediaUploaderInterface
   */
  protected $mediaUploader;

  /**
   * @var \Drupal\Core\Render\RendererInterface
   */
  protected $renderer;

  /**
   * @var \Drupal\Core\Entity\EntityTypeBundleInfoInterface
   */
  protected $entityTypeBundleInfo;

  /**
   * @var \Drupal\gutenberg\MediaEntityRendererInterface
   */
  protected $mediaEntityRenderer;

  /**
   * @var \Drupal\media_library\MediaLibraryUiBuilder|null
   */
  protected $builder;

  /**
   * @var \Drupal\Core\Database\Connection
   */
  protected $connection;

  /**
   * MediaController constructor.
   *
   * @param \Drupal\gutenberg\MediaTypeGuesserInterface $media_type_guesser
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   * @param \Drupal\gutenberg\Persistence\MediaTypePersistenceManager $media_type_persistence_manager
   * @param \Drupal\gutenberg\DataProvider\EntityDataProviderManager $entity_data_provider_manager
   * @param \Drupal\Core\Extension\ModuleHandlerInterface $module_handler
   * @param \Drupal\gutenberg\MediaUploaderInterface $media_uploader
   * @param \Drupal\Core\Render\RendererInterface $renderer
   * @param \Drupal\Core\Entity\EntityTypeBundleInfoInterface $entity_type_bundle_info
   * @param \Drupal\gutenberg\MediaEntityRendererInterface $media_entity_renderer
   * @param \Drupal\Core\Database\Connection $connection
   */
  public function __construct(
    MediaTypeGuesserInterface $media_type_guesser,
    EntityTypeManagerInterface $entity_type_manager,
    MediaTypePersistenceManager $media_type_persistence_manager,
    EntityDataProviderManager $entity_data_provider_manager,
    ModuleHandlerInterface $module_handler,
    MediaUploaderInterface $media_uploader,
    RendererInterface $renderer,
    EntityTypeBundleInfoInterface $entity_type_bundle_info,
    MediaEntityRendererInterface $media_entity_renderer,
    Connection $connection
  ) {
    $this->mediaTypeGuesser = $media_type_guesser;
    $this->entityTypeManager = $entity_type_manager;
    $this->mediaTypePersisterManager = $media_type_persistence_manager;
    $this->entityDataProviderManager = $entity_data_provider_manager;
    $this->moduleHandler = $module_handler;
    $this->mediaUploader = $media_uploader;
    $this->renderer = $renderer;
    $this->entityTypeBundleInfo = $entity_type_bundle_info;
    $this->mediaEntityRenderer = $media_entity_renderer;
    $this->connection = $connection;

    if ($this->moduleHandler->moduleExists('media_library')) {
      $this->builder = \Drupal::getContainer()->get('media_library.ui_builder');
    }
  }

  /**
   * Renders media library dialog for Gutenberg editor.
   *
   * @param array $media_types
   *   Array of media types.
   *
   * @return string
   * @throws \Drupal\gutenberg\Service\MediaTypeNotFoundException
   */
  public function renderDialog(array $media_types) {
    $allowed_media_type_ids = [];
    foreach ($media_types as $media_type) {
      $allowed_media_type_ids = array_merge($allowed_media_type_ids, $this->mediaTypeGuesser->guess($media_type));
    }

    if (!$allowed_media_type_ids) {
      throw new MediaTypeNotFoundException();
    }

    $builtUi = $this->builder->buildUi(
      MediaLibraryState::create('gutenberg.media_library.opener', array_unique($allowed_media_type_ids), reset($allowed_media_type_ids), 1)
    );

    return $this->renderer->render($builtUi);
  }

  /**
   * Render media entities.
   *
   * @param array $media_entity_ids
   *   Array of media entity IDs.
   *
   * @return mixed
   * @throws \Drupal\gutenberg\Service\MediaEntityNotFoundException
   */
  public function renderMediaEntities(array $media_entity_ids) {
    if (!$html = $this->mediaEntityRenderer->render($media_entity_ids)) {
      throw new MediaEntityNotFoundException();
    }

    return $html;
  }

  /**
   * Save uploaded file, create file and media entity if possible.
   *
   * @param \Symfony\Component\HttpFoundation\File\UploadedFile $uploaded_file
   *   Uploaded file instance.
   * @param \Drupal\editor\Entity\Editor $editor
   *   Editor entity instance.
   *
   * @return mixed
   * @throws \Drupal\gutenberg\Service\FileEntityNotSavedException
   * @throws \Drupal\gutenberg\Service\MediaEntityNotSavedException
   * @throws \Drupal\gutenberg\Service\MediaEntityNotMatchedException
   */
  public function processMediaEntityUpload(UploadedFile $uploaded_file, Editor $editor) {
    /** @var \Drupal\file\Entity\File $file_entity */
    if (!$file_entity = $this->mediaUploader->upload($uploaded_file, $editor)) {
      throw new FileEntityNotSavedException();
    }

    if (!$this->moduleHandler->moduleExists('media')) {
      return $this->entityDataProviderManager->getData('file', $file_entity);
    }

    $mime_type_pieces = explode('/', $uploaded_file->getClientMimeType());
    if (!$media_type = $this->mediaTypeGuesser->guess(reset($mime_type_pieces), MediaTypeGuesserInterface::RETURN_NEGOTIATED)) {
      throw new MediaEntityNotMatchedException();
    }

    if (!$media_entity = $this->mediaTypePersisterManager->save($media_type, $file_entity)) {
      throw new MediaEntityNotSavedException();
    }

    return $this->entityDataProviderManager->getData('media', $file_entity, [
      'media_id' => $media_entity->id(),
      'media_type' => $media_entity->bundle(),
    ]);
  }

  /**
   * Load file entity data.
   *
   * @param \Drupal\file\FileInterface $file
   *   File entity instance.
   *
   * @return mixed
   * @throws \Exception
   */
  public function loadFileData(FileInterface $file) {
    return $this->entityDataProviderManager->getData('file', $file);
  }

  /**
   * Load media entity data.
   *
   * @param \Drupal\media\MediaInterface $media
   *   Media entity instance.
   *
   * @return mixed
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  public function loadMediaData(MediaInterface $media) {
    $file_entity_id = $media->getSource()->getSourceFieldValue($media);
    $file_entity = $this->entityTypeManager->getStorage('file')->load($file_entity_id);
    return $this->entityDataProviderManager->getData('file', $file_entity);
  }

  /**
   * Search for file entities.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   Current request.
   * @param \Drupal\gutenberg\Service\string|NULL $type
   *   Mime type of searched files.
   * @param \Drupal\gutenberg\Service\string|NULL $search
   *   Specific filename to search for.
   *
   * @return array
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  public function search(Request $request, string $type = '', string $search = '') {
    $query = $this->entityTypeManager->getStorage('file')->getQuery('AND');
    $query->addTag('gutenberg_media_search');

    if ($search !== '*') {
      $query->condition('filename', $search, 'CONTAINS');
    }

    if ($type !== '*') {
      $group = $query->orConditionGroup();
      foreach (explode(' ', $type) as $key => $type_item) {
        $group->condition('filemime', $type_item, 'CONTAINS');
      }
      $query->condition($group);
    }
    $query->sort('created', 'DESC');

    $this->moduleHandler->invokeAll('gutenberg_media_search_query_alter', [$request, $type, $search, $query]);

    $files = $this->entityTypeManager->getStorage('file')->loadMultiple($query->execute());
    $result = [];

    foreach ($files as $key => $file) {
      $result[] = $this->entityDataProviderManager->getData('file', $file);
    }

    return $result;
  }

  /**
   * Update media data.
   *
   * @param string $fid
   *   File entity ID.
   *
   * @return void
   * @throws \Exception
   */
  public function updateMediaData(string $fid, array $data) {
    $this->connection->merge('file_managed_data')
      ->key(['fid' => $fid])
      ->fields([
        'data' => serialize($data),
      ])
      ->execute();
  }

}
