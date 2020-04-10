<?php

/**
 * @file
 * Documentation for Gutenberg module APIs.
 */

/**
 * @addtogroup hooks
 * @{
 */

/**
 * Perform alterations to a gutenberg's media (file entity) search query.
 *
 * @param \Symfony\Component\HttpFoundation\Request $request
 *   The request.
 * @param string $type
 *   MIME type search string.
 * @param string $search
 *   Filename search string.
 * @param \Drupal\Core\Entity\Query\Sql\Query $query
 *   Entity query object.
 */
function hook_gutenberg_media_search_query_alter(Request $request, string $type = NULL, string $search = NULL, Query $query) {
  if ($type == 'image') {
    $query->condition('uri', 'public://avatars/%', 'NOT LIKE');
  }
}

/**
 * DEPRECATED.
 *
 * You can use Drupal libraries. Check gutenberg.libraries.yml for an example.
 * Modify the list of CSS and JS files for blocks.
 *
 * @param array $js_files_edit
 *   An array of all js files to be included on the editor.
 * @param array $css_files_edit
 *   An array of all css files to be included on the editor.
 * @param array $css_files_view
 *   An array of all css files to be included on the node view.
 */
function hook_gutenberg_blocks_alter(array &$js_files_edit, array &$css_files_edit, array &$css_files_view) {
  $js_files_edit[] = '/path/to/js/files';
  $css_files_edit[] = '/path/to/css/files';
  $css_files_view[] = '/path/to/css/files';
}

/**
 * Alter render array of Gutenberg Media Library dialog.
 *
 * @param array $build_ui
 *   Build array of media library dialog.
 *
 * @see \Drupal\gutenberg\GutenbergMediaLibraryUiBuilder
 */
function hook_gutenberg_media_library_view_alter(array &$build_ui) {
  // @todo: provide some example.
}
