<?php

namespace Drupal\gutenberg;

use Drupal\Component\Plugin\Exception\PluginException;
use Drupal\Core\Block\BlockManagerInterface;
use Drupal\Core\Block\BlockPluginInterface;
use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Render\Element;
use Drupal\Core\Render\RendererInterface;
use Drupal\Core\Session\AccountProxyInterface;

/**
 * Class BlocksRendererHelper.
 */
class BlocksRendererHelper {

  /**
   * Drupal\Core\Render\RendererInterface instance.
   *
   * @var \Drupal\Core\Render\RendererInterface
   */
  protected $renderer;

  /**
   * Drupal\Core\Block\BlockManagerInterface instance.
   *
   * @var \Drupal\Core\Block\BlockManagerInterface
   */
  protected $blockManager;

  /**
   * Drupal\Core\Session\AccountProxyInterface instance.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * BlocksRendererHelper constructor.
   *
   * @param \Drupal\Core\Render\RendererInterface $renderer
   *   Renderer service.
   * @param \Drupal\Core\Block\BlockManagerInterface $block_manager
   *   Block manager service.
   * @param \Drupal\Core\Session\AccountProxyInterface $current_user
   *   Current user service.
   */
  public function __construct(
    RendererInterface $renderer,
    BlockManagerInterface $block_manager,
    AccountProxyInterface $current_user) {
    $this->renderer = $renderer;
    $this->blockManager = $block_manager;
    $this->currentUser = $current_user;
  }

  /**
   * Create instance of block plugin from given ID and config.
   *
   * @param string $id
   *   Block Plugin ID.
   * @param array $config
   *   Block configuration.
   *
   * @return object|null
   *   Block Plugin instance or null.
   */
  public function getBlockFromPluginId($id, array $config = []) {
    try {
      return $this->blockManager->createInstance($id, $config);
    }
    catch (PluginException $e) {
      return NULL;
    }
  }

  /**
   * Return render array for given block plugin.
   *
   * @param \Drupal\Core\Block\BlockPluginInterface $plugin_block
   *   Block Plugin instance.
   *
   * @return array|\Drupal\Component\Render\MarkupInterface
   *   Array containing render array, or empty.
   */
  public function getRenderFromBlockPlugin(BlockPluginInterface $plugin_block) {
    $render = [
      '#theme' => 'block',
      '#attributes' => [],
      '#contextual_links' => [],
      '#configuration' => $plugin_block->getConfiguration(),
      '#plugin_id' => $plugin_block->getPluginId(),
      '#base_plugin_id' => $plugin_block->getBaseId(),
      '#derivative_plugin_id' => $plugin_block->getDerivativeId(),
    ];

    // Build the block.
    $content = $plugin_block->build();

    $this->addPropertiesToRender($render, $content);
    $this->addCacheTagsToRender($render, $content);

    $render['content'] = $content;

    try {
      return $this->renderer->render($render);
    }
    catch (\Exception $e) {
      return [];
    }
  }

  /**
   * Check if the access for current user is forbidden.
   *
   * @param \Drupal\Core\Block\BlockPluginInterface $plugin_block
   *   Block Plugin instance.
   *
   * @return bool
   *   True if access if forbidden, false otherwise.
   */
  public function isAccessForbidden(BlockPluginInterface $plugin_block) {
    $access_result = $plugin_block->access($this->currentUser);
    // $access_result can be boolean or an AccessResult class.
    return (is_object($access_result) && $access_result->isForbidden() || is_bool($access_result) && !$access_result);
  }

  /**
   * Add attributes and contextual links to render array.
   *
   * @param array $render
   *   Render array.
   * @param array $content
   *   Block build content.
   */
  protected function addPropertiesToRender(array &$render, array &$content) {
    // Bubble block attributes up if possible.
    // This allows modules like Quickedit to function.
    // See \Drupal\block\BlockViewBuilder::preRender() for reference.
    if ($content !== NULL && !Element::isEmpty($content)) {
      foreach (['#attributes', '#contextual_links'] as $property) {
        if (isset($content[$property])) {
          $render[$property] += $content[$property];
          unset($content[$property]);
        }
      }
    }
  }

  /**
   * Add default cache tags for empty block.
   *
   * @param array $render
   *   Render array.
   * @param array $content
   *   Block build content.
   */
  protected function addCacheTagsToRender(array &$render, array $content) {
    // If the block is empty, instead of trying to render the block
    // correctly return just #cache, so that the render system knows the
    // reasons (cache contexts & tags) why this block is empty.
    if (Element::isEmpty($content)) {
      $cacheableMetadata = CacheableMetadata::createFromObject($render);
      $cacheableMetadata->applyTo($render);
      if (isset($content['#cache'])) {
        $render['#cache'] += $content['#cache'];
      }
    }
  }

}
