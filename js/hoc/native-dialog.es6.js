((wp, $, drupalSettings, Drupal) => {
  const withNativeDialog = Component => {
    const onDialogCreate = () => {
      drupalSettings.media_library = drupalSettings.media_library || {};
      drupalSettings.media_library.selection_remaining = drupalSettings.media_library.selection_remaining || 1;

      // @todo: it's temporary bugfix for the issue with initial loading (cannot upload a file in media library dialog).
      setTimeout(() => {
        $('#media-library-wrapper li:first-child a').click();
      }, 0);
    };

    const getDefaultMediaSelections = () => {
      return Drupal.MediaLibrary.currentSelection || [];
    };

    const getSpecialMediaSelections = () => {
      return [...Drupal.SpecialMediaSelection.currentSelection || []].map(selection => {
        return JSON.stringify({
          [selection.processor]: selection.data,
        });
      });
    };

    async function onDialogInsert (element, props) {
      const { onSelect, handlesMediaEntity } = props;

      let selections = [...getDefaultMediaSelections(), ...getSpecialMediaSelections()];

      // @todo: handle multiple selections.
      selections = encodeURIComponent(selections[0]);

      if (handlesMediaEntity) {
        const response = await fetch(
          `${drupalSettings.path.baseUrl}editor/media/render/${selections}`,
        );
        const data = await response.json();
        data && data.media_entity && data.media_entity.id && onSelect(data.media_entity.id);
      } else {
        const response = await fetch(
          `${drupalSettings.path.baseUrl}editor/media/load-media/${selections}`,
        );
        onSelect(await response.json());
      }
    }

    const onDialogClose = () => {
      const modal = document.getElementById('media-entity-browser-modal');
      if (modal) {
        modal.remove();
      }

      const nodes = document.querySelectorAll('[aria-describedby="media-entity-browser-modal"]');
      nodes.forEach(node => node.remove());
    };

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
                 onDialogClose={onDialogClose}
                 getDialog={getDialog} />
    );
  };

  window.DrupalGutenberg = window.DrupalGutenberg || {};
  window.DrupalGutenberg.Components = window.DrupalGutenberg.Components || {};
  window.DrupalGutenberg.Components.withNativeDialog = withNativeDialog;
})(wp, jQuery, drupalSettings, Drupal);
