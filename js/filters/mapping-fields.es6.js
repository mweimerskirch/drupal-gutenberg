(async (wp) => {
  const { hooks } = wp;
  const { addFilter } = hooks;

  await addFilter(
    'blocks.registerBlockType',
    'drupalgutenberg/mapping-fields-attributes',
    (settings) => {
      settings.attributes = Object.assign(settings.attributes, {
        mappingFields: {
          type: 'array',
        },
      });
  
      return settings;
    },
  );
})(wp);
