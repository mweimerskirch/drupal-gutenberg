/* eslint func-names: ["error", "never"] */
(function(wp, Drupal) {
  const { data } = wp;
  const { withSelect } = data;

  class DrupalBlock extends wp.element.Component {
    render() {
      if (this.props.blockContent) {
        return (
          <div className={this.props.className} dangerouslySetInnerHTML={{__html: this.props.blockContent.html}} />
        );
      }

      return(
        <div className="loading-drupal-block">{Drupal.t('Loading')}...</div>
      );
    }
  }

  const createClass = withSelect((select, props) => {
    const { getBlock } = select('drupal');
    const { id } = props;

    return {
      blockContent: getBlock(id), // `/editor/blocks/load/${blockId}`
    };
  })(DrupalBlock);

  window.DrupalGutenberg = window.DrupalGutenberg || {};
  window.DrupalGutenberg.Components = window.DrupalGutenberg.Components || {}
  window.DrupalGutenberg.Components.DrupalBlock = createClass;
})(wp, Drupal);
