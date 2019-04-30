/**
 * @file
 * Edit node component.
 */

/* eslint func-names: ["error", "never"] */
(function(Drupal, wp, $) {
  const { editPost, element } = wp;
  const { Fragment } = element;

  class EditNode extends editPost {
    render() {
      return (
        <Fragment>
          <h1>Edit Node!</h1>
          <p>Lets see how this works.</p>
        </Fragment>
      );
    }
  }

  window.DrupalGutenberg = window.DrupalGutenberg || {};
  window.DrupalGutenberg.Components = window.DrupalGutenberg.Components || {}
  window.DrupalGutenberg.Components.EditNode = createClass;
})(Drupal, window.wp, jQuery);
