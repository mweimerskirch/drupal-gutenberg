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
  // Just to avoid being shown at blocks list (inserter)
  parent: ['core/paragraph'],

  edit({ className }) {
    return <InnerBlocks templateLock={false} />;
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
  title: __('Drupal Blocks'),
};

const currentCategories = select('core/blocks').getCategories().filter(item => item.slug !== category.slug);
dispatch('core/blocks').setCategories([ category, ...currentCategories ]);

registerBlockType(`${category.slug}/section`, { category: category.slug, ...settings });
