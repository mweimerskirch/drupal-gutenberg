(async (wp, Drupal) => {
  const { blockEditor, components, compose, hooks } = wp;
  const { addFilter } = hooks;
  const { createHigherOrderComponent } = compose;
  const { Card, CardBody, CardHeader, PanelBody, PanelRow } = components;
  const { InspectorAdvancedControls, InspectorControls } = blockEditor;
  const __ = Drupal.t;

  function hasMappingFields(attributes) {
    return Object.keys(attributes).includes('mappingFields');
  }

  const withInspectorControl = createHigherOrderComponent(BlockEdit => {
    return props => {
      const { isSelected, attributes } = props;
      const hasMapping = hasMappingFields(attributes);
      if (hasMapping && isSelected) {
        return [
          <BlockEdit {...props} />,
          <InspectorControls>
            {!attributes.lockViewMode && (
              <PanelBody title={__('Field mapping')} initialOpen={false}>
                {attributes.mappingFields.map(field => (
                  <Card>
                    {field.label && (
                      <CardHeader>
                        <strong>{__(field.label)}</strong>
                      </CardHeader>
                    )}
                    <CardBody>
                      {!field.attribute && (
                        <span>{__('The block content')} </span>
                      )}
                      {field.attribute && (
                        <span>{__('The block attribute')} <strong>{field.attribute}</strong> </span>
                      )}
                      <span>{__('is mapped to the field[property]')} </span>
                      <span><strong>{field.field}</strong></span>
                      {field.property && (
                        <span><strong>[{field.property}]</strong></span>
                      )}
                      {!field.property && (
                        <span><strong>[{__('value')}]</strong></span>
                      )}
                    </CardBody>
                  </Card>
                ))}
              </PanelBody>
            )}
          </InspectorControls>,
          <InspectorAdvancedControls>
            <h2>Mapping Fields!</h2>
          </InspectorAdvancedControls>,
        ];
      }

      return <BlockEdit {...props} />;
    };
  }, 'withInspectorControl');

  addFilter(
    'blocks.registerBlockType',
    'drupalgutenberg/mapping-fields-attributes',
    settings => {
      settings.attributes = Object.assign(settings.attributes, {
        mappingFields: {
          type: 'array',
        },
      });

      return settings;
    },
  );

  addFilter(
    'editor.BlockEdit',
    'core/editor/mapping-fields-attributes/with-inspector-control',
    withInspectorControl,
  );
})(wp, Drupal);
