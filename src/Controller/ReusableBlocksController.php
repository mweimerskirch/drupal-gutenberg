<?php

namespace Drupal\gutenberg\Controller;

use Drupal\block_content\Entity\BlockContent;
use Drupal\Core\Access\AccessResult;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Session\AccountInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * Returns responses for our blocks routes.
 */
class ReusableBlocksController extends ControllerBase {

  /**
   * Returns JSON representing the loaded blocks.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request.
   * @param string $block_id
   *   The reusable block id.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   *   The JSON response.
   */
  public function load(Request $request, $block_id = NULL) {
    $headers = [
      'Allow' => 'GET, POST, PUT, PATCH, DELETE',
      'Access-Control-Allow-Methods' => 'OPTIONS, GET, POST, PUT, PATCH, DELETE',
      'Access-Control-Allow-Credentials' => 'true',
      'Access-Control-Allow-Headers' => 'Authorization, Content-Type',
    ];

    if ($block_id && $block_id > 0) {
      $block = BlockContent::load($block_id);

      return new JsonResponse([
        'id' => (int) $block->id(),
        'title' => ['raw' => $block->info->value],
        'content' => ['protected' => FALSE, 'raw' => $block->body->value],
        'type' => 'wp_block',
        'status' => 'publish',
        'slug' => 'reusable_block_' . $block->id(),
      // Kind of a hack but accepted by Gutenberg ;)
        'headers' => $headers,
      ], 200, $headers);
    }

    $ids = \Drupal::entityQuery('block_content')
      ->condition('type', 'reusable_block')
      ->execute();

    $blocks = BlockContent::loadMultiple($ids);
    $result = [];

    foreach ($blocks as $key => $block) {
      $result[] = [
        'id' => (int) $block->id(),
        'title' => ['raw' => $block->info->value],
        'content' => ['protected' => FALSE, 'raw' => $block->body->value],
        'type' => 'wp_block',
        'status' => 'publish',
        'slug' => 'reusable_block_' . $block->id(),
      ];
    }

    return new JsonResponse($result, 200, $headers);
  }

  /**
   * Saves reusable block.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request.
   * @param string $block_id
   *   The reusable block id.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   *   The JSON response.
   */
  public function save(Request $request, $block_id = NULL) {

    if ($block_id && $block_id > 0) {
      $data = json_decode($request->getContent(), TRUE);
      $block = BlockContent::load($block_id);
      $block->body->value = $data['content'];
      $block->info->value = $data['title'];
    }
    else {
      $params = $request->request->all();
      $block = BlockContent::create([
        'info' => $params['title'],
        'type' => 'reusable_block',
        'body' => [
          'value' => $params['content'],
          'format' => 'full_html',
        ],
      ]);
    }

    $block->save();

    $headers = [
      'Allow' => 'GET, POST',
      'Access-Control-Allow-Methods' => 'OPTIONS, GET, POST, PUT, PATCH, DELETE',
    ];

    return new JsonResponse([
      'id' => (int) $block->id(),
      'title' => ['raw' => $block->info->value],
      'content' => [
        'block_version' => 1,
        'protected' => FALSE,
        'raw' => $block->body->value,
      ],
      'slug' => 'reusable_block_' . $block->id(),
      'type' => 'wp_block',
      'status' => 'publish',
    ], ($block_id && $block_id > 0 ? 200 : 201), $headers);
  }

  /**
   * Delete reusable block.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request.
   * @param string $block_id
   *   The reusable block id.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   *   The JSON response.
   */
  public function delete(Request $request, $block_id = NULL) {
    $block = BlockContent::load($block_id);
    $block->delete();

    return new JsonResponse([
      'id' => (int) $block_id,
    ]);
  }

  /**
   * Controller routes access callback.
   *
   * @param \Drupal\Core\Session\AccountInterface $account
   *   Current user.
   * @param string $block_id
   *   Block id from route parameter.
   *
   * @return \Drupal\Core\Access\AccessResult
   *   Allowed access result if all conditions are met.
   */
  public function access(AccountInterface $account, $block_id) {
    return AccessResult::allowedIf(
      $account->hasPermission('gutenberg administer')
      && $this->isBundleOfReusableBlock($block_id)
    );
  }

  /**
   * Creates block from given id and check its bundle.
   *
   * @param string $block_id
   *   Block ID.
   *
   * @return bool
   *   TRUE if the block is bundle of reusable_block, FALSE otherwise.
   */
  protected function isBundleOfReusableBlock($block_id) {
    $block = BlockContent::load($block_id);

    return $block->bundle() === 'reusable_block';
  }

}
