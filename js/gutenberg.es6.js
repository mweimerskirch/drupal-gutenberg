/**
 * @file
 * Gutenberg implementation of {@link Drupal.editors} API.
 */

/* eslint func-names: ["error", "never"] */
(function(Drupal, DrupalGutenberg, drupalSettings, wp, $) {
  /**
   * @namespace
   */
  Drupal.editors.gutenberg = {
    /**
     * Editor attach callback.
     *
     * @param {HTMLElement} element
     *   The element to attach the editor to.
     * @param {string} format
     *   The text format for the editor.
     *
     * @return {bool}
     *   Whether the call to `CKEDITOR.replace()` created an editor or not.
     */
    async attach(element, format) {
      const { data, blocks, editor } = wp;
      const { registerDrupalStore, registerDrupalBlocks } = DrupalGutenberg;

      // Register plugins.
      // Not needed now. Leaving it here for reference.
      // const { AdditionalFieldsPluginSidebar } = DrupalGutenberg.Plugins;
      // plugins.registerPlugin('drupal', {
      //   icon: 'forms',
      //   render: AdditionalFieldsPluginSidebar,
      // });

      await registerDrupalStore(data);
      await registerDrupalBlocks(blocks, editor);

      this._initGutenberg(element);

      // On page load always select sidebar's document tab.
      data.dispatch('core/edit-post').openGeneralSidebar('edit-post/document');

      // Disable tips.
      data.dispatch('core/nux').disableTips();

      blocks.registerBlockStyle('core/image', {
        name: 'colorbox',
        label: 'Colorbox image',
      });

      // Disable inline image block.
      // data.dispatch('core/editor').unregisterToken('core/image');

      setTimeout(() => {
        $('.edit-post-header__settings').append(
          $('.gutenberg-header-settings'),
        );
        $('.gutenberg-full-editor').addClass('ready');
        $('#gutenberg-loading').addClass('hide');
      }, 0);

      $('#edit-submit, #edit-preview, #edit-delete').on('click', e => {
        $(e.currentTarget).attr('active', true);
      });

      // Gutenberg is full of buttons which cause the form
      // to submit (no default prevent).
      $(document.forms[0]).on('submit', e => {
        // Update editor textarea with gutenberg content.
        $(element).val(data.select('core/editor').getEditedPostContent());

        // We need to update the 'editor-value-is-changed' flag otherwise
        // the content won't be updated.
        $(element).data({ 'editor-value-is-changed': true });
        $(element).attr('data-editor-value-is-changed', true);

        data
          .dispatch('core/edit-post')
          .openGeneralSidebar('edit-post/document');
        // Clear content "dirty" state.
        data.dispatch('core/editor').savePost();

        // Get the original button clicked.
        const $source = $('input[active="true"]');
        $source.removeAttr('active');

        // Only these buttons are allowed to submit.
        if (
          $source.attr('id') === 'edit-submit' ||
          $source.attr('id') === 'edit-preview' ||
          $source.attr('id') === 'edit-delete'
        ) {
          return true;
        }

        // Just stop everything.
        e.preventDefault();
        e.stopPropagation();
        return false;
      });

      return true;
    },

    /**
     * Editor detach callback.
     *
     * @param {HTMLElement} element
     *   The element to detach the editor from.
     * @param {string} format
     *   The text format used for the editor.
     * @param {string} trigger
     *   The event trigger for the detach.
     *
     * @return {bool}
     *   Whether the call to `CKEDITOR.dom.element.get(element).getEditor()`
     *   found an editor or not.
     */
    detach(element, format, trigger) {
      return true;
    },

    /**
     * Reacts on a change in the editor element.
     *
     * @param {HTMLElement} element
     *   The element where the change occured.
     * @param {function} callback
     *   Callback called with the value of the editor.
     *
     * @return {bool}
     *   Whether the call to `CKEDITOR.dom.element.get(element).getEditor()`
     *   found an editor or not.
     */
    onChange(element, callback) {
      return true;
    },

    /**
     * Initializes the editor on a given element.
     *
     * @param {HTMLElement} element
     *   The element where the editor will be initialized.
     */
    _initGutenberg(element) {
      const { editPost } = wp;
      const $textArea = $(element);
      const target = `editor-${$textArea.data('drupal-selector')}`; // 'editor-' + $textArea.data('drupal-selector');
      const $editor = $(`<div id="${target}" class="gutenberg__editor"></div>`); // $('<div id="' + target + '" class="gutenberg__editor"></div>');
      $editor.insertAfter($textArea);
      $textArea.hide();

      wp.node = {
        categories: [],
        content: { raw: $(element).val(), rendered: '' },
        featured_media: 0,
        id: 1,
        parent: 0,
        permalink_template: '',
        revisions: { count: 0, last_id: 0 },
        status: 'draft',
        theme_style: true,
        type: 'page',
      };

      const editorSettings = {
        alignWide: true,
        availableTemplates: [],
        allowedBlockTypes: true,
        disableCustomColors: false,
        disablePostFormats: false,
        mediaLibrary: false,
        titlePlaceholder: Drupal.t('Add title'),
        bodyPlaceholder: Drupal.t('Add text or type / to add content'),
        isRTL: false,
        autosaveInterval: 0,
        canAutosave: false, // to disable Editor Autosave featured (default: true)
        canPublish: false, // to disable Editor Publish featured (default: true)
        canSave: false, // to disable Editor Save featured (default: true)    };
      };

      const colors =
        drupalSettings.gutenberg && drupalSettings.gutenberg['theme-support']
          ? { ...drupalSettings.gutenberg['theme-support'].colors }
          : null;
      const fontSizes =
        drupalSettings.gutenberg && drupalSettings.gutenberg['theme-support']
          ? { ...drupalSettings.gutenberg['theme-support'].fontSizes }
          : null;

      if (colors) {
        editorSettings.colors = colors;
      }

      if (fontSizes) {
        editorSettings.fontSizes = fontSizes;
      }

      window.customGutenberg = {
        events: {
          OPEN_GENERAL_SIDEBAR: action => {
            let tab = action.name.replace(/edit-post\//g, '');
            tab = tab.replace(/drupal\//g, '');

            // Make sure node's "tabs" are in the original placeholder.
            const $tabG = $('.edit-post-sidebar .components-panel .tab');
            $('.gutenberg-sidebar').append($tabG);

            // Should move tab only when sidebar is fully generated.
            setTimeout(() => {
              const $tabD = $(`.gutenberg-sidebar .tab.${tab}`);
              $('.edit-post-sidebar .components-panel').append($tabD);
            }, 0);

            $(document.body).addClass('gutenberg-sidedar-open');
          },
          CLOSE_GENERAL_SIDEBAR: () => {
            $(document.body).removeClass('gutenberg-sidedar-open');
            // Move tab before sidebar is "destroyed".
            $('.gutenberg-sidebar').append(
              $('.edit-post-sidebar .components-panel .tab')
            );
          },
        },
      };

      return editPost.initializeEditor(target, 'page', 1, editorSettings, {});
    },
  };
})(Drupal, DrupalGutenberg, drupalSettings, window.wp, jQuery);
