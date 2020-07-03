<?php

namespace Drupal\gutenberg\Controller;

use Drupal\Core\Block\BlockManagerInterface;
use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Controller\ControllerBase;
use Drupal\gutenberg\BlocksRendererHelper;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * Returns responses for our blocks routes.
 */
class BlocksController extends ControllerBase {

  /**
   * Drupal\Core\Block\BlockManagerInterface instance.
   *
   * @var \Drupal\Core\Block\BlockManagerInterface
   */
  protected $blockManager;

  /**
   * Drupal\Core\Config\ConfigFactoryInterface instance.
   *
   * @var \Drupal\Core\Config\ConfigFactoryInterface
   */
  protected $configFactory;

  /**
   * Drupal\gutenberg\BlocksRendererHelper instance.
   *
   * @var \Drupal\gutenberg\BlocksRendererHelper
   */
  protected $blocksRenderer;

  /**
   * BlocksController constructor.
   *
   * @param \Drupal\Core\Block\BlockManagerInterface $block_manager
   *   Block manager service.
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   *   Config factory service.
   * @param \Drupal\gutenberg\BlocksRendererHelper $blocks_renderer
   *   Blocks renderer helper service.
   */
  public function __construct(
    BlockManagerInterface $block_manager,
    ConfigFactoryInterface $config_factory,
    BlocksRendererHelper $blocks_renderer) {
    $this->blockManager = $block_manager;
    $this->configFactory = $config_factory;
    $this->blocksRenderer = $blocks_renderer;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('plugin.manager.block'),
      $container->get('config.factory'),
      $container->get('gutenberg.blocks_renderer')
    );
  }

  /**
   * Returns JSON representing the loaded blocks.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request.
   * @param string $content_type
   *   The content type to fetch settings from.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   *   The JSON response.
   */
  public function loadByType(Request $request, $content_type, $node_id) {
    $blockManager = \Drupal::service('plugin.manager.block');
    $contextRepository = \Drupal::service('context.repository');
    $config = \Drupal::service('config.factory')->getEditable('gutenberg.settings');
    $allowed_drupal_blocks = $config->get($content_type . '_allowed_drupal_blocks');

    \Drupal::moduleHandler()->alter('allowed_drupal_blocks', $allowed_drupal_blocks, $content_type, $node_id);

    // Get blocks definition.
    $definitions = $blockManager->getDefinitionsForContexts($contextRepository->getAvailableContexts());
    $definitions = $blockManager->getSortedDefinitions($definitions);

    $return = [];
    foreach ($allowed_drupal_blocks as $key => $value) {
      if ($value) {
        $return[$key] = $definitions[$key];
      }
    }

    return new JsonResponse($return);
  }

  /**
   * Returns JSON representing the loaded blocks.
   *
   * @param string $plugin_id
   *   Plugin ID.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   *   The JSON response.
   */
  public function loadById($plugin_id) {
    /* TODO: We can get a specific instance/derivative of block and load it's config */
    $config = [];
    $plugin_block = $this->blocksRenderer->getBlockFromPluginId($plugin_id, $config);

    $content = '';

    if (!empty($plugin_block)) {
      if ($this->blocksRenderer->isAccessForbidden($plugin_block)) {
        // You might need to add some cache tags/contexts.
        return new JsonResponse(['html' => $this->t('No access.')]);
      }

      $content = $this->blocksRenderer->getRenderFromBlockPlugin($plugin_block);
    }

    // If the block is a view with contexts defined, it may
    // not render on the editor because of, for example, the
    // node path. Let's just write some warning if no content.
    if ($content === '') {
      $content = $this->t('Not able to render the content on editor possibly due to path restrictions.');
    }

    return new JsonResponse(['html' => $content]);
  }

}
