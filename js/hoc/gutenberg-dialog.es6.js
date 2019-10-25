((DrupalGutenberg, $) => {
  const {MediaBrowser} = DrupalGutenberg.Components;

  const withGutenbergDialog = Component => {
    const onDialogCreate = element => {
      const $buttons = $(element).find('.form-actions');
      const $dialogButtons = $buttons
        .closest('.ui-dialog')
        .find('.ui-dialog-buttonpane');

      $dialogButtons.empty();
      $dialogButtons.append($buttons);
    };

    const getDialog = ({ allowedTypes, onSelect }) => {
      return new Promise(resolve => {
        resolve({
          component: props => (
            <MediaBrowser {...props}
                          multiple={false}
                          allowedTypes={allowedTypes}
                          value={[]}
                          onSelect={media => {
                            media && media[0] && props.onSelect(media[0]);
                            onSelect();
                          }} />
          )
        });
      });
    };

    return props => (
      <Component {...props}
                 onDialogCreate={onDialogCreate}
                 getDialog={getDialog}
      />
    );
  };

  window.DrupalGutenberg = window.DrupalGutenberg || {};
  window.DrupalGutenberg.Components = window.DrupalGutenberg.Components || {};
  window.DrupalGutenberg.Components.withGutenbergDialog = withGutenbergDialog;
})(DrupalGutenberg, jQuery);
