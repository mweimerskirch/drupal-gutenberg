<?php

namespace Drupal\gutenberg\Controller;

use Symfony\Component\Yaml\Yaml;
use Drupal\Core\Discovery\YamlDiscovery;
use Drupal\Core\Controller\ControllerBase;
use Drupal\node\Entity\Node;

/**
 * Utility controller.
 *
 * @package Drupal\gutenberg\Controller
 */
class UtilsController extends ControllerBase {

  /**
   * Get blocks settings.
   */
  public static function getBlocksSettings() {
    $settings = &drupal_static(__FUNCTION__);

    if (!isset($settings)) {
      $module_handler = \Drupal::service('module_handler');
      $path = $module_handler->getModule('gutenberg')->getPath();

      $file_path = DRUPAL_ROOT . '/' . $path . '/' . 'gutenberg.blocks.yml';
      if (file_exists($file_path)) {
        $file_contents = file_get_contents($file_path);
        $settings = Yaml::parse($file_contents);
      }
    }

    return $settings;
  }

  /**
   * Gets default theme settings.
   */
  public static function getDefaultThemeSettings() {
    $settings = &drupal_static(__FUNCTION__);

    if (!isset($settings)) {
      $theme_name = \Drupal::config('system.theme')->get('default');
      $theme_path = drupal_get_path('theme', $theme_name);

      $file_path = DRUPAL_ROOT . '/' . $theme_path . '/' . $theme_name . '.gutenberg.yml';
      if (file_exists($file_path)) {
        $file_contents = file_get_contents($file_path);
        $settings = Yaml::parse($file_contents);
      }
      else {
        $settings = [];
      }
    }

    return $settings;
  }

  /**
   * Gets allowed blocks.
   */
  public static function getAllowedBlocks() {
    $settings = &drupal_static(__FUNCTION__);

    if (!isset($settings)) {
      $module_handler = \Drupal::service('module_handler');
      $path = $module_handler->getModule('gutenberg')->getPath();

      $file_path = DRUPAL_ROOT . '/' . $path . '/' . 'gutenberg.blocks.yml';
      if (file_exists($file_path)) {
        $file_contents = file_get_contents($file_path);
        $settings = Yaml::parse($file_contents);
      }
    }

    return $settings;
  }

  /**
   * Gets settings from all modules.
   */
  public static function getAllModulesSettings() {
    $settings = &drupal_static(__FUNCTION__);

    if (!isset($settings)) {
      $directories = \Drupal::service('module_handler')->getModuleDirectories();
      $discovery = new YamlDiscovery('gutenberg', $directories);
      $settings = $discovery->findAll();
    }

    return $settings;
  }

  /**
   * Get node's text fields.
   * @param $node Node
   */
  public static function getNodeTextFields(Node $node) {
    $text_fields = [];

    // Iterate over all node fields and apply gutenberg text format
    // on first text field found.
    $field_names = self::getNodeFieldNames($node);
  
    foreach ($field_names as $value) {
      $field_properties = array_keys($node
        ->getFieldDefinition($value)
        ->getFieldStorageDefinition()
        ->getPropertyDefinitions());
  
      // It is long text field if it has format property.
      if (in_array('format', $field_properties)) {
        $text_fields[] = $value;
      }
    }
  
    return $text_fields;
  }

  /**
   * Get node's field names.
   * @param $node Node
   */
  public static function getNodeFieldNames(Node $node) {
    return array_keys($node->getFields());
  }

}
