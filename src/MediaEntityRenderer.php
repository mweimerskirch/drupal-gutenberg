<?php

namespace Drupal\gutenberg;

use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Render\RendererInterface;

/**
 * Renders media entities to the HTML.
 *
 * @package Drupal\gutenberg
 */
class MediaEntityRenderer implements MediaEntityRendererInterface {

  /**
   * @var \Drupal\Core\Render\RendererInterface
   */
  protected $renderer;

  /**
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * MediaEntityRenderer constructor.
   *
   * @param \Drupal\Core\Render\RendererInterface $renderer
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   */
  public function __construct(RendererInterface $renderer, EntityTypeManagerInterface $entity_type_manager) {
    $this->renderer = $renderer;
    $this->entityTypeManager = $entity_type_manager;
  }

  /**
   * {@inheritDoc}
   */
  public function render(array $media_entity_ids) {
    try {
      $media_entities = $this->entityTypeManager
        ->getStorage('media')
        ->loadMultiple($media_entity_ids);
    }
    catch (\Throwable $exception) {
      return '';
    }

    if (!$media_entity = reset($media_entities)) {
      return '';
    }

    return $this->renderer->render(
      $this->entityTypeManager->getViewBuilder('media')->view($media_entity)
    );
  }

}
