/* eslint func-names: ["error", "never"] */
(function(wp, $, Drupal, drupalSettings, DrupalGutenberg) {
  const { data, blocks, element } = wp;
  const { Fragment } = element;
  const { DrupalIcon, DrupalMediaEntity } = DrupalGutenberg.Components;

  const gutenberg = drupalSettings.gutenberg || {};
  const isMediaLibraryEnabled = gutenberg['media-library-enabled'] || false;
  const isMediaEnabled = gutenberg['media-enabled'] || false;

  const registerDrupalMedia = () => {
    return new Promise(resolve => {
      const category = {
        slug: 'drupal_media',
        title: Drupal.t('Drupal Media'),
      };

      const categories = [
        ...data.select('core/blocks').getCategories(),
        category,
      ];

      if (isMediaEnabled) {
        data.dispatch('core/blocks').setCategories(categories);
        registerBlock();
      }

      resolve();
    });
  };

  const registerBlock = () => {
    const blockId = 'drupalmedia/drupal-media-entity';

    blocks.registerBlockType(blockId, {
      title: Drupal.t('Drupal Media Entity'),
      icon: DrupalIcon,
      category: 'drupal_media',
      supports: {
        align: false,
        html: false,
        reusable: false,
      },
      attributes: {
        mediaEntityIds: {
          type: 'array',
        },
        viewMode: {
          type: 'string',
          default: 'default',
        },
      },
      edit({ attributes, className, setAttributes }) {
        return (
          <Fragment>
            <DrupalMediaEntity attributes={attributes}
                               className={className}
                               setAttributes={setAttributes}
                               isMediaLibraryEnabled={isMediaLibraryEnabled}/>
          </Fragment>
        );
      },
      save() {
        return null;
      },
    });
  };

  window.DrupalGutenberg = window.DrupalGutenberg || {};
  window.DrupalGutenberg.registerDrupalMedia = registerDrupalMedia;
})(wp, jQuery, Drupal, drupalSettings, DrupalGutenberg);
