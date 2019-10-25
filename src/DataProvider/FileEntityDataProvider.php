<?php

namespace Drupal\gutenberg\DataProvider;

use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\gutenberg\AssertMediaTrait;

/**
 * Provides data for file entity type for Gutenberg editor.
 *
 * @package Drupal\gutenberg\DataProvider
 */
class FileEntityDataProvider extends BaseDataProvider {

  use AssertMediaTrait;

  /**
   * {@inheritDoc}
   */
  public function getData(ContentEntityInterface $entity, array $data = []) {
    $this->assertIsFileEntity($entity);

    /** @var \Drupal\file\FileInterface $entity */
    $uri = $entity->getFileUri();
    $source_url = file_url_transform_relative(file_create_url($uri));
    $image = $this->imageFactory->get($uri);
    $file_data = $this->getFileData($entity->id());

    $result = [
      'id' => (int) $entity->id(),
      'link' => $source_url,
      'source_url' => $source_url,
      'url' => $source_url,
      'media_type' => explode('/', $entity->getMimeType())[0],
      'mime_type' => $entity->getMimeType(),
      'author' => 1,
      'status' => 'inherit',
      'type' => 'attachment',
      'date_gmt' => date('c', $entity->getCreatedTime()),
      'date' => date('c', $entity->getCreatedTime()),
      'title' => [
        'raw' => $file_data['title'] ?? '',
        'rendered' => $file_data['title'] ?? '',
      ],
      'alt' => $file_data['alt_text'] ?? '', // prop used on inline-image
      'alt_text' => $file_data['alt_text'] ?? '',
      'width' => $image->getWidth(), // prop used on inline-image
      'data' => [
        'entity_type' => 'file',
        'entity_uuid' => $entity->uuid(),
        'image_style' => 'original',
      ],
      'media_data' => $file_data,
      'media_details' => [
        'file' => $entity->getFilename(),
        'width' => $image->getWidth(),
        'height' => $image->getHeight(),
        'filesize' => $entity->getSize(),
        'image_meta' => [],
        // See issue: https://www.drupal.org/project/gutenberg/issues/3035313
        'sizes' => $this->getSizes($source_url, $uri),
      ],
      'caption' => [
        'raw' => $file_data['caption'] ?? '',
        'rendered' => $file_data['caption'] ?? '',
      ],
    ];

    return $result;
  }

}
