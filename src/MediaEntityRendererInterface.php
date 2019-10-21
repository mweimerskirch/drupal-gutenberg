<?php

namespace Drupal\gutenberg;

/**
 * Renders media entities.
 *
 * @package Drupal\gutenberg
 */
interface MediaEntityRendererInterface {

  /**
   * Render media entities.
   *
   * @param array $media_entity_ids
   *   Media entity IDs.
   *
   * @return mixed
   */
  public function render(array $media_entity_ids);

}
