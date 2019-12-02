/* eslint func-names: ["error", "never"] */
(function(wp, $, Drupal, drupalSettings, DrupalGutenberg) {
  const { data, blocks, element, blockEditor } = wp;
  const { Fragment } = element;
  const { RichText } = blockEditor;
  const { DrupalIcon, DrupalMediaEntity } = DrupalGutenberg.Components;
  const { select } = data;
  const gutenberg = drupalSettings.gutenberg || {};
  const isMediaLibraryEnabled = gutenberg['media-library-enabled'] || false;
  const isMediaEnabled = gutenberg['media-enabled'] || false;
  const __ = Drupal.t;

  const registerBlock = () => {
    const blockId = 'drupalmedia/drupal-media-entity';

    blocks.registerBlockType(blockId, {
      title: Drupal.t('Drupal Media Entity'),
      icon: 'admin-media',
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
        caption: {
          type: 'string',
          default: '',
        },
        lockViewMode: {
          type: 'boolean',
          default: false,
        },
        allowedTypes: {
          type: 'array',
          default: ['image', 'video', 'audio', 'application'],
        },
      },
      edit({ attributes, className, setAttributes, isSelected, clientId }) {
        const { mediaEntityIds, caption } = attributes;

        return (
          <figure className={className}>
            <DrupalMediaEntity
              attributes={attributes}
              className={className}
              setAttributes={setAttributes}
              isSelected={isSelected}
              isMediaLibraryEnabled={isMediaLibraryEnabled}
              clientId={clientId}
            />
            {mediaEntityIds &&
              mediaEntityIds.length > 0 &&
              (!RichText.isEmpty(caption) || isSelected) && (
                <RichText
                  tagName="figcaption"
                  placeholder={__('Write caption…')}
                  value={caption}
                  onChange={value => setAttributes({ caption: value })}
                />
              )}
          </figure>
        );
      },
      save() {
        return null;
      },
    });
  };

  const registerDrupalMedia = () =>
    new Promise(resolve => {
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

  window.DrupalGutenberg = window.DrupalGutenberg || {};
  window.DrupalGutenberg.registerDrupalMedia = registerDrupalMedia;
})(wp, jQuery, Drupal, drupalSettings, DrupalGutenberg);
