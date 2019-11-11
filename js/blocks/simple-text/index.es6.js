/* eslint func-names: ["error", "never"] */
(function(Drupal, wp) {
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
      mappingField: {
        type: 'string',
      },
      mappingAttribute: {
        type: 'string',
      },
      placeholder: {
        type: 'string',
        default: 'Insert text',
      },
    },

    edit({ className, attributes, setAttributes }) {
      const { text, tag, placeholder } = attributes;
      return (
        <Fragment>
          <div className={className}>
            <RichText
              tagName={tag}
              value={text}
              placeholder={placeholder}
              onChange={newValue => setAttributes({ text: newValue })}
            />
          </div>
        </Fragment>
      );
    },

    save({ className, attributes }) {
      const { text, tag } = attributes;
      // const CustomTag = `${tag}`;

      return text;
    },
  };

  const category = {
    slug: 'drupal',
    title: __('Drupal'),
  };

  const currentCategories = select('core/blocks').getCategories().filter(item => item.slug !== category.slug);
  dispatch('core/blocks').setCategories([ category, ...currentCategories ]);

  registerBlockType(`${category.slug}/simple-text`, { category: category.slug, ...settings });
})(Drupal, wp);
