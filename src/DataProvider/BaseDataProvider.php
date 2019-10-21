<?php

namespace Drupal\gutenberg\DataProvider;

use Drupal\Core\Database\Connection;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Image\ImageFactory;

/**
 * Provides base abstraction for entity data providers.
 *
 * @package Drupal\gutenberg\DataProvider
 */
abstract class BaseDataProvider implements DataProviderInterface {

  /**
   * Entity type manager instance.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * Database connection.
   *
   * @var \Drupal\Core\Database\Connection
   */
  protected $connection;

  /**
   * Image factory instance.
   *
   * @var \Drupal\Core\Image\ImageFactory
   */
  protected $imageFactory;

  /**
   * BaseDataProvider constructor.
   *
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   */
  public function __construct(EntityTypeManagerInterface $entity_type_manager, Connection $connection, ImageFactory $image_factory) {
    $this->entityTypeManager = $entity_type_manager;
    $this->connection = $connection;
    $this->imageFactory = $image_factory;
  }

  /**
   * Get file managed data of the provided file.
   *
   * @param string $fid
   *   File entity ID.
   *
   * @return array
   */
  protected function getFileData(string $fid) {
    $query = $this->connection->select('file_managed_data', 'data', []);
    $query->condition('data.fid', $fid);
    $query->fields('data', ['fid', 'data']);
    $result = $query->execute()->fetchAll();
    return isset($result[0]->data) ? unserialize($result[0]->data) : [];
  }

  /**
   * Get sizes of image styles for the source.
   *
   * @param \Drupal\gutenberg\DataProvider\string $source_url
   * @param \Drupal\gutenberg\DataProvider\string $uri
   *
   * @return array
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  protected function getSizes(string $source_url, string $uri) {
    $styles = $this->entityTypeManager->getStorage('image_style')->loadMultiple();
    $sizes = [
      'full' => [
        'source_url' => $source_url,
      ],
    ];

    foreach ($styles as $style) {
      /** @var \Drupal\image\Entity\ImageStyle $style */
      $sizes[$style->getName()] = [
        'source_url' => file_url_transform_relative($style->buildUrl($uri)),
      ];
    }

    return $sizes;
  }

}
