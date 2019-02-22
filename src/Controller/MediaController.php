<?php

namespace Drupal\gutenberg\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Drupal\editor\Entity\Editor;
use Drupal\file\Entity\File;

/**
 * Returns responses for our image routes.
 */
class MediaController extends ControllerBase {

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
    if (file_prepare_directory($directory, FILE_CREATE_DIRECTORY)) {
      $file = file_save_data($data, "{$directory}/{$filename}", FILE_EXISTS_RENAME);
      $file->setTemporary();
      $file->save();
    }
    else {
      return new JsonResponse(NULL, 500);
    }

    $media_src = file_create_url($file->getFileUri());
    return new JsonResponse([
      'id' => (int) $file->id(),
      'url' => $media_src,
      'source_url' => $media_src,
      'link' => $media_src,
      'media_type' => explode('/', $file->getMimeType())[0],
      'title' => [
        'raw' => ''
      ],
      'alt_text' => '',
      'data' => [
        'entity_type' => 'file',
        'entity_uuid' => $file->uuid(),
      ],
    ]);
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
    $media_src = file_create_url($file->getFileUri());

    return new JsonResponse([
      'id' => $file->id(),
      'source_url' => $media_src,
      'url' => $media_src,
      'link' => $media_src,
      'media_type' => explode('/', $file->getMimeType())[0],
      'mime_type' => $file->getMimeType(),
      'title' => [
        'raw' => '',
        'rendered' => '',
      ],
      'caption' => [
        'raw' => '',
        'rendered' => '',
      ],
      'alt_text' => '',
      'data' => [
        'entity_type' => 'file',
        'entity_uuid' => $file->uuid(),
        'image_style' => NULL,
      ],
      'media_details' => [
        'file' => '',
        'width' => 0,
        'height' => 0,
        'image_meta' => [],
        'sizes' => [],
      ],
  
    ]);
  }

  /**
   * Searches for files.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request.
   * @param String $search
   *   Search string.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   *   The JSON response.
   */
  public function search(Request $request, String $type = '', String $search = '') {
    $query = \Drupal::entityQuery('file');

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

    $file_ids = $query->execute();
    $files = File::loadMultiple($file_ids);
    $result = [];

    foreach ($files as $key => $file) {
      $media_src = file_create_url($file->getFileUri());
      $image = \Drupal::service('image.factory')->get($file->getFileUri());

      $result[] = [
        'id' => $file->id(),
        'filename' => $file->getFilename(),
        'source_url' => $media_src,
        'url' => $media_src,
        'link' => $media_src,
        'media_type' => explode('/', $file->getMimeType())[0],
        'mime_type' => $file->getMimeType(),
        'author' => 1,
        'status' => 'inherit',
        'type' => 'attachment',
        // 'title' => [
        //   'raw' => '',
        //   'rendered' => '',
        // ],
        // 'caption' => [
        //   'raw' => '',
        //   'rendered' => '',
        // ],
        'alt_text' => '',
        'data' => [
          'entity_type' => 'file',
          'entity_uuid' => $file->uuid(),
          'image_style' => NULL,
        ],
        'media_details' => [
          'filename' => $file->getFilename(),
          'width' => $image->getWidth(),
          'height' => $image->getHeight(),
          'filesize' => $file->getSize(),
          'image_meta' => [],
          'sizes' => [],
        ],  
      ];
    }

    return new JsonResponse($result);
  }
}
