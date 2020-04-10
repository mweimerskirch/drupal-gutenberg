<?php

namespace Drupal\gutenberg\Plugin\Filter;

use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\Core\Render\RendererInterface;
use Drupal\filter\FilterProcessResult;
use Drupal\filter\Plugin\FilterBase;
use Drupal\gutenberg\BlocksRendererHelper;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Class BlockFilter.
 *
 * @Filter(
 *   id = "filter_block",
 *   title = @Translation("Gutenberg Block filter"),
 *   description = @Translation("Embeds Drupal blocks."),
 *   settings = {
 *   },
 *   type = Drupal\filter\Plugin\FilterInterface::TYPE_MARKUP_LANGUAGE,
 * )
 */
class BlockFilter extends FilterBase implements ContainerFactoryPluginInterface {

  /**
   * Drupal\gutenberg\BlocksRendererHelper instance.
   *
   * @var \Drupal\gutenberg\BlocksRendererHelper
   */
  protected $blocksRenderer;

  /**
   * Drupal\Core\Render\RendererInterface instance.
   *
   * @var \Drupal\Core\Render\RendererInterface
   */
  protected $renderer;

  /**
   * {@inheritdoc}
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, BlocksRendererHelper $blocks_renderer, RendererInterface $renderer) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->blocksRenderer = $blocks_renderer;
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
      $container->get('gutenberg.blocks_renderer'),
      $container->get('renderer')
    );
  }

  /**
   * Process each URL.
   */
  public function process($text, $langcode) {

    $lines = explode("\n", $text);

    $lines = preg_replace_callback('#<!-- wp:drupalblock\/.*\s(\{.*\})\s\/-->#', [$this, 'renderBlock'], $lines);

    $text = implode("\n", $lines);

    return new FilterProcessResult($text);
  }

  /**
   * Callback function to process each URL.
   */
  private function renderBlock($match) {
    $comment = $match[0];
    $attributes = json_decode($match[1]);
    $plugin_id = $attributes->blockId;
    // You can hard code configuration or you load from settings.
    $config = [];
    $plugin_block = $this->blocksRenderer->getBlockFromPluginId($plugin_id, $config);

    $content = '';

    if (!empty($plugin_block)) {
      if ($this->blocksRenderer->isAccessForbidden($plugin_block)) {
        return [
          '#type' => 'html_tag',
          '#tag' => 'h2',
          '#value' => $this->t('Access required'),
        ];
      }

      $content = $this->blocksRenderer->getRenderFromBlockPlugin($plugin_block);
    }

    // Render the css class if available.
    if (!empty($attributes->className)) {
      $prefixed = [
        '#type' => 'html_tag',
        '#tag' => 'div',
        '#value' => $content,
        '#attributes' => [
          'class' => [$attributes->className],
        ],
      ];
      $content = $this->renderer->render($prefixed);
    }

    return $comment . $content;
  }

}
