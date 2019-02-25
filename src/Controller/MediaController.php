<?php

namespace Drupal\gutenberg\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Drupal\editor\Entity\Editor;
use Drupal\file\Entity\File;
use Drupal\image\Entity\ImageStyle;
/**
 * Returns responses for our image routes.
 */
class MediaController extends ControllerBase {
  private function _getImageStyles() {
    $styles = ImageStyle::loadMultiple();
    return $styles;
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
    $media_src = file_create_url($uri);
    $image = \Drupal::service('image.factory')->get($uri);

    $styles = $this->_getImageStyles();
    $sizes = [
      'full' => [
        'source_url' => $media_src,
      ],
    ];

    foreach ($styles as $key => $style) {
      $url = ImageStyle::load($style->getName())->buildUrl($uri);
      $sizes[$style->getName()] = [
        'source_url' => $url,
      ];
    }

    $result = [
      'id' => (Integer) $file->id(),
      'source_url' => $media_src,
      'url' => $media_src,
      'media_type' => explode('/', $file->getMimeType())[0],
      'mime_type' => $file->getMimeType(),
      'author' => 1,
      'status' => 'inherit',
      'type' => 'attachment',
      'date_gmt' => date('c', $file->getCreatedTime()),
      'date' => date('c', $file->getCreatedTime()),
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
        'file' => $file->getFilename(),
        'width' => $image->getWidth(),
        'height' => $image->getHeight(),
        'filesize' => $file->getSize(),
        'image_meta' => [],
        // See issue: https://www.drupal.org/project/gutenberg/issues/3035313
        // 'sizes' => $sizes,
      ],
    ];

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
    if (file_prepare_directory($directory, FILE_CREATE_DIRECTORY)) {
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

      $result[] = $this->_parse($file);
    }

    return new JsonResponse($result);
  }
}
