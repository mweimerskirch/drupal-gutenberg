<?php

namespace Drupal\gutenberg;

/**
 * Guesses all possible file extensions by mime type.
 *
 * @package Drupal\gutenberg
 */
interface FileExtensionGuesserInterface {

  /**
   * Guesses all possible file extensions by general mime type (image, video, audio, ...).
   *
   * @param string $general_mime_type
   *   General mime type (image, video, audio, ...).
   *
   * @return array
   */
  public function guessByGeneralMimeType(string $general_mime_type);

}
