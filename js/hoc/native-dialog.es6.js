((wp, $, drupalSettings) => {
  const withNativeDialog = Component => {
    const onDialogCreate = () => {
      drupalSettings.media_library = drupalSettings.media_library || {};
      drupalSettings.media_library.selection_remaining = drupalSettings.media_library.selection_remaining || 1;
    };

    async function onDialogInsert (element, props) {
      const { onSelect, omitFetchOnSelect } = props;
      const $form = $(element).find('.media-library-views-form');
      const serializeArray = $form.serializeArray();
      let entityIds = [];

      serializeArray.map(item => {
        if (item.name === 'media_library_select_form_selection' && item.value) {
          entityIds = item.value.split(',')
        }
      });

      if (omitFetchOnSelect) {
        onSelect(entityIds);
      } else {
        const response = await fetch(
          `${drupalSettings.path.baseUrl}editor/media/load-media/${entityIds}`,
        );
        onSelect(await response.json());
      }
    }

    const getDialog = ({ allowedTypes }) => {
      return new Promise((resolve, reject) => {
        wp.apiFetch({
            path: 'load-media-library-dialog',
            data: { allowedTypes }
          })
          .then(result => {
            resolve({
              component: props => (
                <div {...props} dangerouslySetInnerHTML={{__html: result.html}} />
              )
            });
          })
          .catch(reason => {
            reject(reason);
          })
      });
    };

    return props => (
      <Component {...props}
                 onDialogCreate={onDialogCreate}
                 onDialogInsert={onDialogInsert}
                 getDialog={getDialog}
      />
    );
  };

  window.DrupalGutenberg = window.DrupalGutenberg || {};
  window.DrupalGutenberg.Components = window.DrupalGutenberg.Components || {};
  window.DrupalGutenberg.Components.withNativeDialog = withNativeDialog;
})(wp, jQuery, drupalSettings);
