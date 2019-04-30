/* eslint func-names: ["error", "never"] */
(function(wp, Drupal) {
  const { data, editor, element } = wp;
  const { AutosaveMonitor } = editor;
  const { Component, Fragment } = element;

  console.log(AutosaveMonitor);

  // class OverrideAutosaveMonitor extends Component {
  //   render() {
  //     return null;
  //   }
  // }

  // Object.defineProperty(wp.editor, 'AutosaveMonitor', {
  //   set(value) {
  //     this.AutosaveMonitor = value;
  //   },
  // });
  delete wp.editor.AutosaveMonitor;
  wp.editor.AutosaveMonitor = () => null;
  wp.editor.PostPreviewButton = () => null;
  wp.editor.PostPublishButton = () => null;
  wp.editor.PostPublishPanel = () => null;
  wp.editor.PostSavedState = () => null;
  // window.DrupalGutenberg = window.DrupalGutenberg || {};
  // window.DrupalGutenberg.Components = window.DrupalGutenberg.Components || {}
  // window.DrupalGutenberg.Components.DrupalBlock = createClass;
})(wp, Drupal);
