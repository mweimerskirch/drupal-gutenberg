<?php

/**
 * @file
 * Post update functions for Gutenberg.
 */

use Drupal\views\Entity\View;

/**
 * Add access restriction to reusable blocks view.
 */
function gutenberg_post_update_reusable_block_view_access() {
  if (\Drupal::moduleHandler()->moduleExists('views')) {
    if ($view = View::load('reusable_blocks')) {
      $display = &$view->getDisplay('default');
      if (!isset($display['display_options']['access']['type']) || $display['display_options']['access']['type'] === 'none') {
        $display['display_options']['access'] = [
          'type' => 'perm',
          'options' => ['perm' => 'gutenberg administer'],
        ];
        $view->save();
      }
    }
  }
}
