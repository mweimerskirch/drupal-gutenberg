const { blocks, data, editor } = wp;
const { registerBlockType } = blocks;
const { dispatch, select } = data;
const { InnerBlocks } = editor;
const __ = Drupal.t;

const settings = {
  title: __('Section'),
  description: __('Section block for template use.'),
  icon: 'media-document',
  attributes: {},

  edit({ className }) {
    return (
      <div className={className}>
        <InnerBlocks templateLock={false} />
      </div>
    );
  },

  save({ className }) {
    return (
      <main className={className}>
        <InnerBlocks.Content />
      </main>
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
