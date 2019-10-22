<?php

namespace Drupal\gutenberg\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\file\Entity\File;
use Drupal\gutenberg\Service\FileEntityNotFoundException;
use Drupal\gutenberg\Service\MediaEntityNotFoundException;
use Drupal\gutenberg\Service\MediaService;
use Drupal\gutenberg\Service\MediaTypeNotFoundException;
use Drupal\media\Entity\Media;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Drupal\editor\Entity\Editor;

/**
 * Returns responses for our image routes.
 */
class MediaController extends ControllerBase {

  /**
   * @var \Drupal\gutenberg\Service\MediaService
   */
  protected $mediaService;

  /**
   * MediaController constructor.
   *
   * @param \Drupal\gutenberg\Service\MediaService $media_service
   */
  public function __construct(MediaService $media_service) {
    $this->mediaService = $media_service;
  }

  /**
   * {@inheritDoc}
   */
  public static function create(ContainerInterface $container) {
    return new static($container->get('gutenberg.media_service'));
  }

  /**
   * Render Drupal's media library dialog
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   Current request.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   * @throws \Exception
   */
  public function dialog(Request $request) {
    try {
      return new JsonResponse([
        'html' => $this->mediaService->renderDialog(explode(',', $request->get('types', []))),
      ]);
    }
    catch (MediaTypeNotFoundException $exception) {
      return new JsonResponse(['error' => $this->t($exception->getMessage())], 404);
    }
  }

  /**
   * Render provided media entities.
   *
   * @param string $media_entity_ids
   *   Comma-separated media entity IDs.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   */
  public function render(string $media_entity_ids) {
    try {
      return new JsonResponse([
        'html' => $this->mediaService->renderMediaEntities(explode(',', $media_entity_ids))
      ]);
    }
    catch (MediaEntityNotFoundException $exception) {
      return new JsonResponse(['error' => $this->t($exception->getMessage())], 404);
    }
  }

  /**
   * Upload files, save as file and media entity if possible.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   Current request.
   * @param \Drupal\editor\Entity\Editor|null $editor
   *   Editor entity instance.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   * @throws \Exception
   */
  public function upload(Request $request, ?Editor $editor) {
    $files = $request->files->get('files', []);
    $uploaded_file = $files['fid'] ?? NULL;

    if (!$uploaded_file instanceof UploadedFile) {
      return new JsonResponse(['error' => $this->t('Invalid file has been uploaded.')], 422);
    }

    try {
      return new JsonResponse($this->mediaService->processMediaEntityUpload($uploaded_file, $editor));
    }
    catch (\Exception $exception) {
      return new JsonResponse(['error' => $this->t($exception->getMessage())], 500);
    }
  }

  /**
   * Get data of the media entity required for Gutenberg editor.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   Current request.
   * @param \Drupal\file\Entity\File|null $file
   *   Loaded found file entity instance.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   * @throws \Exception
   */
  public function load(Request $request, ?File $file) {
    if (!$file) {
      return new JsonResponse(['error' => $this->t('File entity not found.')], 404);
    }

    try {
      return new JsonResponse($this->mediaService->loadFileData($file));
    }
    catch (FileEntityNotFoundException $exception) {
      return new JsonResponse($this->t($exception->getMessage()), 404);
    }
  }

  /**
   * Load media data.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   Current request.
   * @param \Drupal\media\Entity\Media|null $media
   *   Loaded media entity instance.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  public function loadMedia(Request $request, ?Media $media) {
    if (!$media) {
      return new JsonResponse(['error' => $this->t('Media entity not found.')], 404);
    }

    try {
      return new JsonResponse($this->mediaService->loadMediaData($media));
    }
    catch (MediaEntityNotFoundException $exception) {
      return new JsonResponse($this->t($exception->getMessage()), 404);
    }
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
    return new JsonResponse(
      $this->mediaService->search($request, $type, $search)
    );
  }

  /**
   * Updates file data.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   Current request.
   * @param string|int $fid
   *   File id.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   *   The JSON response.
   * @throws \Exception
   */
  public function updateData(Request $request, $fid) {
    $data = json_decode($request->getContent(), true);

    if (json_last_error() !== JSON_ERROR_NONE) {
      throw new \Exception("Request data couldn't be parsed.");
    }

    try {
      $this->mediaService->updateMediaData($fid, $data);
    }
    catch (\Throwable $exception) {
      return new JsonResponse(['error' => $this->t("Data couldn't be updated")], 500);
    }

    return new JsonResponse(['status' => 'ok']);
  }

}
