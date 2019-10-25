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

  use AssertMediaTrait;

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
  public function render($media_entity, string $view_mode = 'full') {
    try {
      if (is_numeric($media_entity)) {
        $media_entity = $this->entityTypeManager->getStorage('media')->load($media_entity);
      }

      $this->assertIsMediaEntity($media_entity);
      $build = $this->entityTypeManager->getViewBuilder('media')->view($media_entity, $view_mode);
      return (string) $this->renderer->render($build);
    }
    catch (\Throwable $exception) {
      return '';
    }
  }

}
