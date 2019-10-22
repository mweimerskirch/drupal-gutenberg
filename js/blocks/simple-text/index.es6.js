const { blocks, data, element, editor } = wp;
const { registerBlockType } = blocks;
const { dispatch, select } = data;
const { Fragment } = element;
const { RichText } = editor;
const __ = Drupal.t;

const settings = {
  title: __('Simple text'),
  description: __('Simple text block.'),
  icon: 'editor-textcolor',
  attributes: {
    tag: {
      type: 'string',
      default: 'h1',
    },
    text: {
      type: 'string',
    },
  },

  edit({ className, attributes, setAttributes }) {
    const { text, tag } = attributes;
    return (
      <Fragment>
        <div className={className}>
          <RichText
            tagName={tag}
            value={text}
            placeholder={__('Insert text')}
            onChange={newValue => setAttributes({ text: newValue })}
          />
        </div>
      </Fragment>
    );
  },

  save({ className, attributes }) {
    const { text, tag } = attributes;
    const CustomTag = `${tag}`;

    return (
      <div className={className}>
        <CustomTag>{text}</CustomTag>
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

registerBlockType(`${category.slug}/simple-text`, { category: category.slug, ...settings });
