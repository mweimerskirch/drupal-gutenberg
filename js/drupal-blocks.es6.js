// import { data } from '@frontkom/gutenberg-js';
// import DrupalBlock from './components/drupal-block';
// import DrupalIcon from './components/drupal-icon';

/* eslint func-names: ["error", "never"] */
(function(wp, $, Drupal, drupalSettings) {
  const { data } = wp;
  const { DrupalIcon, DrupalBlock } = window.DrupalGutenberg.Components;

  const providerIcons = {
    system: DrupalIcon, // 'admin-home',
    user: 'admin-users',
    views: 'media-document',
    core: DrupalIcon,
  };

  function registerDrupalBlocks(blocks, editor) {
    return new Promise(resolve => {
      const { BlockAlignmentToolbar, BlockControls } = editor;
      const { Fragment } = wp.element;

      $.ajax(`${drupalSettings.path.baseUrl}editor/blocks/load`).done(
        definitions => {
          const category = {
            slug: 'drupal',
            title: Drupal.t('Drupal Blocks'),
          };

          const categories = [
            category,
            ...data.select('core/blocks').getCategories(),
          ];

          data.dispatch('core/blocks').setCategories(categories);

          /* eslint no-restricted-syntax: ["error", "never"] */
          for (const id in definitions) {
            if ({}.hasOwnProperty.call(definitions, id)) {
              const definition = definitions[id];
              let blockId = `drupalblock/${id}`; // ${definition.id}
              blockId = blockId.replace(/_/g, '-');
              blockId = blockId.replace(/:/g, '-');

              blocks.registerBlockType(blockId, {
                title: `${definition.admin_label} [${definition.category}]`,
                icon: providerIcons[definition.provider] || DrupalIcon,
                category: 'drupal',
                supports: {
                  html: false,
                  reusable: false,
                },
                attributes: {
                  blockId: {
                    type: 'string',
                  },
                  align: {
                    type: 'string',
                  },
                },
                edit({ attributes, className, setAttributes }) {
                  const { align } = attributes;
                  setAttributes({ blockId: id });

                  return (
                    <Fragment>
                      <BlockControls>
                        <BlockAlignmentToolbar
                          value={align}
                          onChange={nextAlign => {
                            setAttributes( { align: nextAlign } );
                          }}
                          controls={[ 'left', 'right', 'center', 'wide', 'full' ]}
                        />
                      </BlockControls>
                      <DrupalBlock className={className} id={id} url={`${drupalSettings.path.baseUrl}editor/blocks/load/${id}`} />
                    </Fragment>
                  );
                },
                save() {
                  return null;
                },
              });
            }
          }
          resolve();
        },
      );
    });
  }

  window.DrupalGutenberg = window.DrupalGutenberg || {};
  window.DrupalGutenberg.registerDrupalBlocks = registerDrupalBlocks;
})(wp, jQuery, Drupal, drupalSettings);