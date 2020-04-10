<?php

namespace Drupal\gutenberg\Plugin\Filter;

use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\Core\Render\RendererInterface;
use Drupal\filter\FilterProcessResult;
use Drupal\filter\Plugin\FilterBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class FieldMappingFilter.
 *
 * @Filter(
 *   id = "filter_field_mapping",
 *   title = @Translation("Gutenberg field mapping filter"),
 *   description = @Translation("Filter blocks with mapping field attributes set."),
 *   settings = {
 *   },
 *   type = Drupal\filter\Plugin\FilterInterface::TYPE_MARKUP_LANGUAGE,
 * )
 */
class FieldMappingFilter extends FilterBase implements ContainerFactoryPluginInterface {

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
   * Process each URL.
   */
  public function process($text, $langcode) {

    // $lines = explode("\n", $text);
    $text = preg_replace_callback('#((<!-- .*\{.*"mappingField".*} -->)([\s\S]*?)(<!-- \/[\s\S]*?-->)|(<!-- .*\{.*"mappingField".*} \/-->))#', [$this, 'renderWithoutMappingFields'], $text);

    // $text = implode("\n", $lines);
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

  /**
   * Define settings for filter.
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    $form['enable_filter'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Enabled'),
      '#default_value' => $this->settings['enable_filter'],
    ];
    return $form;
  }

}
