<?php

namespace Drupal\gutenberg\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Drupal\node\Entity\Node;

/**
 * Returns responses for our image routes.
 */
class SearchController extends ControllerBase {

  /**
   * Search content.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   *   The JSON response.
   */
  public function search(Request $request) {
    $search = $request->query->get('search');
    $currentLanguage = \Drupal::languageManager()->getCurrentLanguage()->getId();
    // [{"id":1,"title":"Hello world!","url":"http:\/\/localhost\/wordpress\/2019\/03\/04\/hello-world\/","type":"post","subtype":"post","_links":{"self":[{"embeddable":true,"href":"http:\/\/localhost\/wordpress\/wp-json\/wp\/v2\/posts\/1"}],"about":[{"href":"http:\/\/localhost\/wordpress\/wp-json\/wp\/v2\/types\/post"}],"collection":[{"href":"http:\/\/localhost\/wordpress\/wp-json\/wp\/v2\/search"}]}},{"id":2,"title":"Sample Page","url":"http:\/\/localhost\/wordpress\/sample-page\/","type":"post","subtype":"page","_links":{"self":[{"embeddable":true,"href":"http:\/\/localhost\/wordpress\/wp-json\/wp\/v2\/pages\/2"}],"about":[{"href":"http:\/\/localhost\/wordpress\/wp-json\/wp\/v2\/types\/page"}],"collection":[{"href":"http:\/\/localhost\/wordpress\/wp-json\/wp\/v2\/search"}]}}]
    $query = \Drupal::entityQuery('node');
    $query->condition('title', $search, 'CONTAINS');
    $query->condition('status', 1);
    $query->condition('langcode', $currentLanguage);
    $query->sort('created', 'DESC');

    $node_ids = $query->execute();
    $nodes = Node::loadMultiple($node_ids);
    $result = [];
    foreach ($nodes as $node) {
      // Check for translation
      if ($node->hasTranslation($currentLanguage)) {
        $node = $node->getTranslation($currentLanguage);
      }
      $result[] = [
        'id' => $node->id(),
        'title' => $node->getTitle(),
        'url' => $node->toUrl('canonical', ['absolute' => FALSE])->toString(),
      ];
    }

    return new JsonResponse($result);
  }

}
