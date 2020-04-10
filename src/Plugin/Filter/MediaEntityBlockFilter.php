<?php

namespace Drupal\gutenberg\Plugin\Filter;

use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\filter\FilterProcessResult;
use Drupal\filter\Plugin\FilterBase;
use Drupal\gutenberg\MediaEntityRendererInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Class MediaEntityBlockFilter.
 *
 * @Filter(
 *   id = "filter_media_entity_block",
 *   title = @Translation("Gutenberg Media Entity Block filter"),
 *   description = @Translation("Embeds Drupal Media Entity blocks."),
 *   settings = {
 *   },
 *   type = Drupal\filter\Plugin\FilterInterface::TYPE_MARKUP_LANGUAGE,
 * )
 */
class MediaEntityBlockFilter extends FilterBase implements ContainerFactoryPluginInterface {

  /**
   * The media entity renderer.
   *
   * @var \Drupal\gutenberg\MediaEntityRendererInterface
   */
  protected $mediaEntityRenderer;

  /**
   * {@inheritDoc}
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, MediaEntityRendererInterface $media_entity_renderer_interface) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->mediaEntityRenderer = $media_entity_renderer_interface;
  }

  /**
   * {@inheritDoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('gutenberg.media_entity.renderer')
    );
  }

  /**
   * {@inheritDoc}
   */
  public function process($text, $langcode) {
    $content = preg_replace_callback('#(<!-- wp:drupalmedia\/drupal-media-entity (\{.*\}) \/-->)#', [$this, 'render'], $text);
    return new FilterProcessResult($content);
  }

  /**
   * The render function.
   *
   * Callbacks to preg replace from ::process method and returns rendered media
   * entity.
   *
   * @param array $match
   *   Array of preg matched items.
   *
   * @return string
   *   The rendered media entity.
   */
  protected function render(array $match) {
    if (!isset($match[2])) {
      return '';
    }

    $full_block_comment = str_replace('/-->', '-->', $match[1]);
    $block_config = json_decode($match[2], TRUE);

    if (json_last_error() !== JSON_ERROR_NONE || empty($block_config['mediaEntityIds'])) {
      return '';
    }

    $media_ouput = $this->mediaEntityRenderer->render(reset($block_config['mediaEntityIds']), $block_config['viewMode'] ?? 'default');
    $output = $media_ouput;

    if (isset($block_config['caption'])) {
      $output = '<figure class="wp-block-drupalmedia-drupal-media-entity">' . $media_ouput . '<figcaption>' . $block_config['caption'] . '</figcaption></figure>';
    }

    return $full_block_comment . "\n" . $output . "\n<!-- /wp:drupalmedia/drupal-media-entity -->\n";
  }

}
