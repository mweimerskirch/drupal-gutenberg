const { blocks, data, element, editor } = wp;
const { registerBlockType } = blocks;
const { dispatch, select } = data;
const { Fragment } = element;
const { InnerBlocks } = editor;
const __ = Drupal.t;

const settings = {
  title: __('Section'),
  description: __('Section block for template use.'),
  icon: 'media-document',
  attributes: {},

  edit({ className }) {
    return (
      <Fragment>
        <div className={className}>
          <InnerBlocks templateLock={false} />
        </div>
      </Fragment>
    );
  },

  save({ className }) {
    return (
      <div className={className}>
        <InnerBlocks.Content />
      </div>
    );
  },
};

const category = {
  slug: 'drupal',
  title: __('Drupal'),
};

const currentCategories = select('core/blocks').getCategories().filter(item => item.slug !== category.slug);
dispatch('core/blocks').setCategories([ category, ...currentCategories ]);

registerBlockType(`${category.slug}/section`, { category: category.slug, ...settings });
