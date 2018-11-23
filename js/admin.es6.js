/**
 * @file
 * Javascript behaviors for the Gutenberg module admin.
 */

/* eslint func-names: ["error", "never"] */
(function($, Drupal) {
  /**
   * Adds summaries to the book outline form.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches summary behavior to book outline forms.
   */
  Drupal.behaviors.gutenbergAdmin = {
    attach() {
      $('.view-reusable-blocks .views-row').click(e => {
        $(e.currentTarget)
          .find('input[type="checkbox"]')
          .click();
      });
    },
  };
})(jQuery, Drupal);
