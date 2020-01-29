<?php

namespace Drupal\gutenberg\Plugin\Filter;

use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\Core\Render\RendererInterface;
use Drupal\filter\FilterProcessResult;
use Drupal\filter\Plugin\FilterBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Form\FormStateInterface;

/**
 * @Filter(
 *   id = "filter_mapping_fields",
 *   title = @Translation("Gutenberg mapping fields filter"),
 *   description = @Translation("Filter/remove content from blocks with mapping fields attribute set."),
 *   settings = {
 *   },
 *   type = Drupal\filter\Plugin\FilterInterface::TYPE_MARKUP_LANGUAGE,
 * )
 */
class MappingFieldsFilter extends FilterBase implements ContainerFactoryPluginInterface {

  /**
   * Drupal\Core\Render\RendererInterface instance.
   *
   * @var \Drupal\Core\Render\RendererInterface
   */
  protected $renderer;

  /**
   * {@inheritdoc}
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, RendererInterface $renderer) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->renderer = $renderer;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('renderer')
    );
  }

  /**
   * Process all content.
   */
  public function process($text, $langcode) {

    $text = preg_replace_callback('#((<!-- .*\{.*"mappingFields".*} -->)([\s\S]*?)(<!-- \/[\s\S]*?-->)|(<!-- .*\{.*"mappingFields".*} \/-->))#', [$this, 'renderWithoutMappingFields'], $text);

    return new FilterProcessResult($text);
  }

  /**
   * Callback function to process each URL.
   */
  private function renderWithoutMappingFields($match) {
    $comment_begin = $match[1];
    $comment_end = $match[3];

    return '';
  }
}
