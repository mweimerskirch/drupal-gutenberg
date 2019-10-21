<?php

namespace Drupal\gutenberg;

use Drupal\editor\Entity\Editor;
use Symfony\Component\HttpFoundation\File\UploadedFile;

/**
 * Provides media upload for Gutenberg editor.
 *
 * @package Drupal\gutenberg
 */
interface MediaUploaderInterface {

  /**
   * Upload media to the filesystem.
   *
   * @param \Symfony\Component\HttpFoundation\File\UploadedFile $uploaded_file
   *   Uploaded file instance.
   * @param \Drupal\editor\Entity\Editor $editor
   *   Editor entity.
   *
   * @return \Drupal\file\Entity\File|null
   *   File entity or null on failure.
   */
  public function upload(UploadedFile $uploaded_file, Editor $editor);

}
