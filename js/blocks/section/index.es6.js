const { blocks, blockEditor } = wp;
const { registerBlockType } = blocks;
const { InnerBlocks } = blockEditor;
const __ = Drupal.t;

const settings = {
  title: __('Section'),
  description: __('Section block for template use.'),
  icon: 'media-document',
  attributes: {},
  supports: {
    inserter: false,
  },

  edit() {
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

registerBlockType(`drupal/section`, { category: 'common', ...settings });
