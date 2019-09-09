<?php

namespace Drupal\gutenberg\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Drupal\editor\Entity\Editor;
use Drupal\file\Entity\File;
use Drupal\image\Entity\ImageStyle;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\File\FileSystemInterface;
use Drupal\Core\Image\ImageFactory;

/**
 * Returns responses for our image routes.
 */
class MediaController extends ControllerBase {

  /**
   * The file system.
   *
   * @var \Drupal\Core\File\FileSystemInterface
   */
  protected $fileSystem;

  /**
   * The image factory.
   *
   * @var \Drupal\Core\Image\ImageFactory
   */
  protected $imageFactory;

  /**
   * The module handler service.
   *
   * @var \Drupal\Core\Extension\ModuleHandlerInterface
   */
  protected $moduleHandler;

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('file_system'),
      $container->get('image.factory'),
      $container->get('module_handler')
    );
  }

  /**
   * Constructs a MediaController object.
   *
   * @param \Drupal\Core\File\FileSystemInterface $file_system
   *   The file system.
   * @param \Drupal\Core\Image\ImageFactory $image_factory
   *   The image factory.
   * @param \Drupal\Core\Extension\ModuleHandlerInterface $module_handler
   *   The module handler service.
   */
  public function __construct(FileSystemInterface $file_system, ImageFactory $image_factory, ModuleHandlerInterface $module_handler) {
    $this->fileSystem = $file_system;
    $this->imageFactory = $image_factory;
    $this->moduleHandler = $module_handler;
  }

  private function _getImageStyles() {
    $styles = ImageStyle::loadMultiple();
    return $styles;
  }

  /**
   * Returns the serialized file data.
   *
   * @param Integer $fid
   *   The file ID
   *
   * @return Array
   *   The parsed array.
   */
  private function _getFileData($fid) {
    $connection = \Drupal::database();
    $query = $connection->select('file_managed_data', 'data', []);
    $query->condition('data.fid', $fid);
    $query->fields('data', ['fid', 'data']);
    $result = $query->execute();
    foreach ($result as $record) {
      return unserialize($record->data);
    }
  }

  /**
   * Returns a parsed array from File object.
   *
   * @param \Drupal\file\Entity\File $file
   *   The editor.
   *
   * @return Array
   *   The parsed array.
   */
  private function _parse(File $file) {
    $uri = $file->getFileUri();
    $media_src = file_url_transform_relative(file_create_url($uri));
    $image = $this->imageFactory->get($uri);

    $styles = $this->_getImageStyles();
    $sizes = [
      'full' => [
        'source_url' => $media_src,
      ],
    ];

    foreach ($styles as $key => $style) {
      $url = ImageStyle::load($style->getName())->buildUrl($uri);
      $sizes[$style->getName()] = [
        'source_url' => file_url_transform_relative($url),
      ];
    }

    $data = $this->_getFileData($file->id());

    if (!isset($data['title']['raw'])) {
      $data['title'] = [
        'raw' => is_null($data['title']) ? '' : $data['title'],
        'rendered' => is_null($data['title']) ? '' : $data['title'],
      ];
    }

    if (!isset($data['caption']['raw'])) {
      $data['caption'] = [
        'raw' => is_null($data['caption']) ? '' : $data['caption'],
        'rendered' => is_null($data['caption']) ? '' : $data['caption'],
      ];
    }

    $result = [
      'id' => (Integer) $file->id(),
      'link' => $media_src,
      'source_url' => $media_src,
      'url' => $media_src,
      'media_type' => explode('/', $file->getMimeType())[0],
      'mime_type' => $file->getMimeType(),
      'author' => 1,
      'status' => 'inherit',
      'type' => 'attachment',
      'date_gmt' => date('c', $file->getCreatedTime()),
      'date' => date('c', $file->getCreatedTime()),
      'title' => $data['title'],
      'caption' => $data['caption'],
      'alt' => $data['alt_text'], // prop used on inline-image
      'alt_text' => $data['alt_text'],
      'width' => $image->getWidth(), // prop used on inline-image
      'data' => [
        'entity_type' => 'file',
        'entity_uuid' => $file->uuid(),
        'image_style' => 'original',
      ],
      'media_data' => $data,
      'media_details' => [
        'file' => $file->getFilename(),
        'width' => $image->getWidth(),
        'height' => $image->getHeight(),
        'filesize' => $file->getSize(),
        'image_meta' => [],
        // See issue: https://www.drupal.org/project/gutenberg/issues/3035313
        'sizes' => $sizes,
      ],
    ];

    if (!isset($data['caption'])) {
      unset($result['caption']);
    }

    // if (isset($data['caption'])) {
    //   $result['caption'] = [
    //     'raw' => $data['caption'],
    //     'rendered' => $data['caption'],
    //   ];
    // }

    return $result;
  }
  /**
   * Returns JSON representing the new file upload, or validation errors.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request.
   * @param \Drupal\editor\Entity\Editor $editor
   *   The editor.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   *   The JSON response.
   */
  public function upload(Request $request, Editor $editor = NULL) {
    $imageSettings = $editor->getImageUploadSettings();

    $filename = $_FILES['files']['name']['fid'];
    $directory = "{$imageSettings['scheme']}://{$imageSettings['directory']}";
    $data = file_get_contents($_FILES['files']['tmp_name']['fid']);

    // TODO: File size and image dimensions validations.
    //      Better error handling?
    if ($this->fileSystem->prepareDirectory($directory, FileSystemInterface::CREATE_DIRECTORY)) {
      $file = file_save_data($data, "{$directory}/{$filename}", FILE_EXISTS_RENAME);
      $file->setTemporary();
      $file->save();
    }
    else {
      return new JsonResponse(NULL, 500);
    }

    return new JsonResponse($this->_parse($file));
  }

  /**
   * Returns JSON representing the loaded file.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request.
   * @param \Drupal\editor\Entity\Editor $editor
   *   The editor.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   *   The JSON response.
   */
  public function load(Request $request, File $file = NULL) {
    return new JsonResponse($this->_parse($file));
  }

  /**
   * Searches for files.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request.
   * @param string $type
   *   The MIME type search string.
   * @param string $search
   *   The filename search string.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   *   The JSON response.
   */
  public function search(Request $request, string $type = NULL, string $search = NULL) {
    $query = \Drupal::entityQuery('file');

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

    $file_ids = $query->execute();
    $files = File::loadMultiple($file_ids);
    $result = [];

    foreach ($files as $key => $file) {
      $media_src = file_create_url($file->getFileUri());
      $image = $this->imageFactory->get($file->getFileUri());

      $result[] = $this->_parse($file);
    }

    return new JsonResponse($result);
  }

  /**
   * Updates file data.
   *
   * @param String $fid
   *   File id.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   *   The JSON response.
   */
  public function updateData($fid) {
    $request = \Drupal::request();
    $data = json_decode($request->getContent(), true);

    $connection = \Drupal::database();
    $connection->merge('file_managed_data')
    ->key(['fid' => $fid])
    ->fields([
        'data' => serialize($data),
    ])
    ->execute();

    return new JsonResponse(['status' => 'ok']);
  }
}
