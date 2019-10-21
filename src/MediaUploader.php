<?php

namespace Drupal\gutenberg;

use Drupal\Core\File\FileSystemInterface;
use Drupal\editor\Entity\Editor;
use Symfony\Component\HttpFoundation\File\UploadedFile;

/**
 * Upload files from Gutenberg editor upload method
 *
 * @package Drupal\gutenberg
 */
class MediaUploader implements MediaUploaderInterface
{
  /**
   * @var \Drupal\Core\File\FileSystemInterface
   */
  protected $fileSystem;

  /**
   * MediaUploader constructor.
   *
   * @param \Drupal\Core\File\FileSystemInterface $file_system
   */
  public function __construct(FileSystemInterface $file_system) {
    $this->fileSystem = $file_system;
  }

  /**
   * {@inheritDoc}
   */
  public function upload(UploadedFile $uploaded_file, Editor $editor) {
    $image_settings = $editor->getImageUploadSettings();
    $directory = "{$image_settings['scheme']}://{$image_settings['directory']}";

    if (!$this->fileSystem->prepareDirectory($directory, FileSystemInterface::CREATE_DIRECTORY)) {
      return NULL;
    }

    // @todo: find better solution for saving file itself.
    $filename = $uploaded_file->getClientOriginalName();
    $data = file_get_contents($uploaded_file->getPathname());
    $file = file_save_data($data, "{$directory}/{$filename}", FileSystemInterface::EXISTS_RENAME);
    $file->setTemporary();

    try {
      $file->save();
    } catch (\Throwable $exception) {
      return NULL;
    }

    return $file;
  }

}
