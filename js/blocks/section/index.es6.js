const { blocks, blockEditor, data } = wp;
const { compose } = wp.compose;
const { withSelect } = data;
const { registerBlockType } = blocks;
const { InnerBlocks } = blockEditor;
const __ = Drupal.t;

const SECTION_TEMPLATE = [['core/paragraph', { placeholder: 'Summary' }]];

function SectionEdit({ hasInnerBlocks }) {
  return (
    <main>
      <InnerBlocks
        templateLock={false}
        renderAppender={
          hasInnerBlocks
            ? undefined
            : () => (
                <InnerBlocks.ButtonBlockAppender />
              )
        }
      />
    </main>
  );
}

const settings = {
  title: __('Section'),
  description: __('Section block for template use.'),
  icon: 'media-document',
  attributes: {},
  supports: {
    inserter: false,
  },

  edit: compose([
    withSelect((select, { clientId }) => {
      const { getBlock } = select('core/block-editor');

      const block = getBlock(clientId);

      return {
        hasInnerBlocks: !!(block && block.innerBlocks.length),
      };
    }),
  ])(SectionEdit),

  save({ className }) {
    return (
      <main className={className}>
        <InnerBlocks.Content />
      </main>
    );
  },
};

registerBlockType(`drupal/section`, { category: 'common', ...settings });
