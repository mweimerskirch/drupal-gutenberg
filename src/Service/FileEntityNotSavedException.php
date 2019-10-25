<?php

namespace Drupal\gutenberg\Service;

/**
 * Thrown if file and file entity couldn't be saved.
 *
 * @package Drupal\gutenberg\Service
 */
class FileEntityNotSavedException extends \Exception {

  /**
   * {@inheritDoc}
   */
  protected $message = 'File entity could not be saved.';

}
