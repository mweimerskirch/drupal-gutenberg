/**
 * @file
 * Gutenberg implementation of {@link Drupal.editors} API.
 */

/* eslint func-names: ["error", "never"] */
(function(Drupal, DrupalGutenberg, drupalSettings, wp, $) {

  /**
   * Check if Drupal's media module is enabled.
   *
   * @returns {*|boolean}
   */
  Drupal.isMediaEnabled = () => (drupalSettings.gutenberg || false) && drupalSettings.gutenberg['media-enabled'];

  /**
   * Check if Drupal's media_library module is enabled.
   *
   * @returns {*|boolean}
   */
  Drupal.isMediaLibraryEnabled = () => (drupalSettings.gutenberg || false) && drupalSettings.gutenberg['media-library-enabled'];

  /**
   * Toggles Gutenberg loader.
   *
   * @param state
   */
  Drupal.toggleGutenbergLoader = (state) => {
    const $gutenbergLoader = $('#gutenberg-loading');
    switch (state) {
      case 'show':
        $gutenbergLoader.removeClass('hide');
        break;
      case 'hide':
        $gutenbergLoader.addClass('hide');
        break;
    }
  };

  /**
   * Display error message.
   *
   * @return void
   */
  Drupal.notifyError = message => wp.data.dispatch('core/notices').createErrorNotice(message, {
    isDismissible: true,
  });

  /**
   * Display success message.
   *
   * @return void
   */
  Drupal.notifySuccess = message => wp.data.dispatch('core/notices').createSuccessNotice(message, {
    isDismissible: true,
  });

  /**
   * Add new command for reloading a block.
   */
  Drupal.AjaxCommands.prototype.reloadBlock = function() {
    // Place content in current-msg div.
    // $('#current-msg h2').html(response.subject);
    // $('#current-msg p').html(response.content);
    // // Remove from unread list.
    // $('#msg-' + response.mid).remove();
    // // Add message to read list.
    // $('#read-msgs').append('<li>' + response.subject + '</li>');
    // console.log('reloadBlock', ajax, response, status);
    const { select, dispatch } = wp.data;
    const selectedBlock = select('core/block-editor').getSelectedBlock();
    const { clientId } = selectedBlock;
    const { mediaEntityIds } = selectedBlock.attributes;

    (async () => {
      await dispatch('core/block-editor').updateBlock(clientId, {
        attributes: { mediaEntityIds: [] },
      });

      setTimeout(() => {
        dispatch('core/block-editor').updateBlock(clientId, {
          attributes: { mediaEntityIds },
        });
      }, 100);
      // await dispatch('core/block-editor').updateBlock(clientId, {
      //   attributes: { mediaEntityIds },
      // });
      // console.log('yo 2!', clientId, mediaEntityIds);
    })();
  };

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
      // A bit of a hack. This avoids Gutenberg to be reinit'd on AJAX calls.
      // TODO: could be done in another way?
      if (drupalSettings.gutenbergLoaded) {
        return false;
      }
      drupalSettings.gutenbergLoaded = true;

      const { contentType, allowedBlocks, blackList } = format.editorSettings;
      const { data, blocks, hooks, plugins } = wp;
      const { dispatch } = data;
      const { addFilter } = hooks;
      const { unregisterPlugin } = plugins;
      const { unregisterBlockType, registerBlockType, getBlockType } = blocks;
      const {
        registerDrupalStore,
        registerDrupalBlocks,
        registerDrupalMedia,
      } = DrupalGutenberg;

      // Register plugins.
      // Not needed now. Leaving it here for reference.
      // const { AdditionalFieldsPluginSidebar } = DrupalGutenberg.Plugins;
      // plugins.registerPlugin('drupal', {
      //   icon: 'forms',
      //   render: AdditionalFieldsPluginSidebar,
      // });

      // Add 'mapping field' and 'mapping attribute' attributes to all blocks.
      // @deprecated in gutenberg:8.x-1.11
      await addFilter(
        'blocks.registerBlockType',
        'drupalgutenberg/custom-attributes',
        (settings, name) => {
          settings.attributes = Object.assign(settings.attributes, {
            mappingField: {
              type: 'string',
              default: '',
            },
            mappingAttribute: {
              type: 'string',
              default: '',
            },
          });

          if (name === 'core/block') {
            settings.attributes.ref = {
              type: 'number',
            };
          }

          return settings;
        },
      );

      await registerDrupalStore(data);

      await registerDrupalBlocks(contentType);
      await registerDrupalMedia();

      await this._initGutenberg(element);

      if (drupalSettings.gutenberg._listeners.init) {
        drupalSettings.gutenberg._listeners.init.forEach(callback => {
          callback();
        });
      }

      if (drupalSettings.gutenberg.messages) {
        Object.keys(drupalSettings.gutenberg.messages).forEach(key => {
          drupalSettings.gutenberg.messages[key].forEach(message => {
            switch (key) {
              case 'error':
                dispatch('core/notices').createErrorNotice(message);
                break;
              case 'warning':
                dispatch('core/notices').createWarningNotice(message);
                break;
              case 'success':
                dispatch('core/notices').createSuccessNotice(message);
                break;
              default:
                dispatch('core/notices').createWarningNotice(message);
                break;
            }
          });
        });
      }

      // Handle late messages, i.e. processed after node edit form hook.
      // Example: System update messages are coming after node edit form.
      // TODO: There must be a better way to do this on server side.
      $('div.messages--error').each((index, el) => {
        dispatch('core/notices').createErrorNotice($(el).html(), {
          __unstableHTML: $(el).html(),
        });
        $(el).remove();
      });

      $('div.messages--warning').each((index, el) => {
        dispatch('core/notices').createWarningNotice($(el).html(), {
          __unstableHTML: $(el).html(),
        });
        $(el).remove();
      });

      $('div.messages--success').each((index, el) => {
        dispatch('core/notices').createSuccessNotice($(el).html(), {
          __unstableHTML: $(el).html(),
        });
        $(el).remove();
      });

      // Process blacklist.
      blackList
        .filter(value => !value.includes('drupalblock/'))
        .forEach(value => {
          unregisterBlockType(value);
        });

      // Add `ref` attribute to core/block.
      // const coreBlock = getBlockType('core/block');
      // unregisterBlockType('core/block');
      // coreBlock.attributes = {
      //   ref: {
      //     type: 'number',
      //   },
      // };
      // registerBlockType('core/block', coreBlock);

      // Process allowed blocks.
      /* eslint no-restricted-syntax: ["error", "never"] */
      for (const key in allowedBlocks) {
        if (allowedBlocks.hasOwnProperty(key)) {
          const value = allowedBlocks[key];
          if (!value && !key.includes('/all') && !blackList.includes(key)) {
            unregisterBlockType(key);
          }
        }
      }

      // Remove unused blocks.
      const categories = data
        .select('core/blocks')
        .getCategories()
        .filter(item => {
          if (item.slug === 'widgets') {
            return false;
          }
          return true;
        });

      // edit-post-block-patterns
      unregisterPlugin('edit-post-block-patterns');

      data.dispatch('core/blocks').setCategories(categories);

      // On page load always select sidebar's document tab.
      data.dispatch('core/edit-post').openGeneralSidebar('edit-post/document');

      data.dispatch('core/edit-post').setAvailableMetaBoxesPerLocation({
        advanced: ['drupalSettings'],
      });

      // Disable status panel from sidebar
      data.dispatch('core/edit-post').removeEditorPanel('post-status');

      // Disable Welcome Guide
      const isWelcomeGuide = data
        .select('core/edit-post')
        .isFeatureActive('welcomeGuide');

      if (isWelcomeGuide) {
        data.dispatch('core/edit-post').toggleFeature('welcomeGuide');
      }

      setTimeout(() => {
        let $metaBoxContainer = $('.edit-post-meta-boxes-area__container');
        drupalSettings.gutenberg.metaboxes.forEach(id => {
          let $metabox = $(`#${id}`);
          let metabox = $metabox.get(0);

          // Re-initialize the original editors used within the metabox elements
          // which can break after they've been moved.
          Drupal.behaviors.editor.detach(metabox, drupalSettings);
          $metabox.appendTo($metaBoxContainer);
          Drupal.behaviors.editor.attach(metabox, drupalSettings);
        });
      }, 0);

      // Create fake form for metabox.
      // On post save, REQUEST_META_BOX_UPDATES action is called and
      // it relies on metaboxes forms.
      // The only way to bypass an exception is to create the "advanced" metabox form.
      // It has no other practical use.
      const metaboxesContainer = $(document.createElement('div'));
      metaboxesContainer.attr('id', 'metaboxes');
      $('body').append(metaboxesContainer);
      const metaboxForm = $(document.createElement('form'));
      metaboxForm.addClass('metabox-location-advanced');
      metaboxesContainer.append(metaboxForm);

      // Disable inline image block.
      // data.dispatch('core/editor').unregisterToken('core/image');

      // Disable form validation
      // We need some ninja hacks because every button in Gutenberg will
      // cause the form to submit.
      $(document.forms[0]).attr('novalidate', true);

      setTimeout(() => {
        $('.edit-post-header__settings').append(
          $('.gutenberg-header-settings'),
        );
        $('.gutenberg-full-editor').addClass('ready');
        Drupal.toggleGutenbergLoader('hide');
      }, 0);

      let isFormValid = false;

      $('#edit-submit, #edit-preview').on('click', e => {
        $(e.currentTarget).attr('active', true);

        // TODO: check if document tab and More Settings field set
        // are already open to avoid sidebar visual flicker.
        data
          .dispatch('core/edit-post')
          .openGeneralSidebar('edit-post/document');

        // Expand "More Settings" set.
        $('#edit-additional-fields').attr('open', '');

        // For these buttons enable form validation.
        $(element.form).removeAttr('novalidate');

        // Wait for the next tick, React/Gutenberg is
        // doing its DOM stuff.
        setTimeout(() => {
          // This will not work on IE (<10?). But it's ok because
          // we have the server side validation fallback.
          isFormValid = element.form.reportValidity();

          if (isFormValid) {
            // We need to submit the form via button click.
            // Drupal's form submit handler needs it.
            // TODO: Could we submit and passing the button reference to formState?
            $(e.currentTarget).click();
          } else {
            // Not active anymore.
            $(e.currentTarget).removeAttr('active');
          }

          // Then disable form validation again :(
          $(element.form).attr('novalidate', true);
        });

        // No need to proceed to form validation,
        // it'll just throw a "not focusable" console
        // error.
        if (!isFormValid) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      });

      let formSubmitted = false;
      // Gutenberg is full of buttons which cause the form
      // to submit (no default prevent).
      $(element.form).on('submit', e => {
        // Get the original button clicked...
        const $source = $('input[active="true"]');
        // ...and reset its active state.
        $source.removeAttr('active');

        // If none of those buttons were clicked...
        if (
          $source.attr('id') !== 'edit-submit' &&
          $source.attr('id') !== 'edit-preview' &&
          $source.attr('id') !== 'edit-delete'
        ) {
          // Just stop everything.
          e.preventDefault();
          e.stopPropagation();
          return false;
        }

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
        if (!formSubmitted) {
          (async () => {
            await data.dispatch('core/editor').savePost();

            formSubmitted = true;
            // Submit again to save content on Drupal.
            // We need to submit the form via button click.
            // Drupal's form submit handler needs it.
            // TODO: Could we submit and passing the button reference to formState?
            $source.click();
          })();

          // savePost() is async so we must cancel form submission
          // to avoid to "changes not saved" alert.
          e.preventDefault();
          e.stopPropagation();
        }
      });

      return true;
    },

    /**
     * Attaches an inline editor to a DOM element.
     *
     * @param {HTMLElement} element
     *   The element to attach the editor to.
     * @param {object} format
     *   The text format used in the editor.
     * @param {string} [mainToolbarId]
     *   The id attribute for the main editor toolbar, if any.
     * @param {string} [floatedToolbarId]
     *   The id attribute for the floated editor toolbar, if any.
     *
     * @return {bool}
     *   Whether the call to `CKEDITOR.replace()` created an editor or not.
     */
    attachInlineEditor(element, format, mainToolbarId, floatedToolbarId) {
      // We define this function so that quickedit doesn't throw an error.
      return false;
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
    async _initGutenberg(element) {
      const { editPost, data } = wp;
      const $textArea = $(element);
      const target = `editor-${$textArea.data('drupal-selector')}`; // 'editor-' + $textArea.data('drupal-selector');
      const $editor = $(`<div id="${target}" class="gutenberg__editor"></div>`); // $('<div id="' + target + '" class="gutenberg__editor"></div>');
      $editor.insertAfter($textArea);
      $textArea.hide();

      wp.node = {
        categories: [],
        content: {
          block_version: 0,
          protected: false,
          raw: $(element).val(),
          rendered: '',
        },
        featured_media: 0,
        id: 1,
        parent: 0,
        permalink_template: '',
        revisions: { count: 0, last_id: 1 },
        status: 'auto-draft',
        theme_style: true,
        type: 'page',
        slug: '',
      };

      const defaultThemeSupport = {
        disableCustomColors: false,
        disableCustomFontSizes: false,
        alignWide: true,
      };

      const editorSettings = {
        ...defaultThemeSupport,
        ...drupalSettings.gutenberg['theme-support'],
        availableTemplates: [],
        allowedBlockTypes: true,
        disablePostFormats: false,
        mediaLibrary: true,
        // See issue: https://www.drupal.org/project/gutenberg/issues/3035313
        imageSizes: drupalSettings.gutenberg['image-sizes'],
        titlePlaceholder: Drupal.t('Add title'),
        bodyPlaceholder: Drupal.t('Add text or type / to add content'),
        isRTL: false,
        localAutosaveInterval: 0,
        autosaveInterval: 0, // Must set > 0 for undo and redo to work.
        // Following properties were from G-JS.
        // canAutosave: false, // to disable Editor Autosave featured (default: true)
        // canPublish: false, // to disable Editor Publish featured (default: true)
        // canSave: false, // to disable Editor Save featured (default: true)    };
        template: drupalSettings.gutenberg.template || '',
        templateLock:
          drupalSettings.gutenberg['template-lock'] === 'none'
            ? false : drupalSettings.gutenberg['template-lock'] || false,
      };

      data.subscribe(() => {
        const isOpen = data.select('core/edit-post').isEditorSidebarOpened();
        const sidebar = data
          .select('core/edit-post')
          .getActiveGeneralSidebarName();

        // We need to deal with the top left logo when in fullscreen mode.
        const isFullscreenMode = data
          .select('core/edit-post')
          .isFeatureActive('fullscreenMode');

        setTimeout(() => {
          const fullscreenLink = $(
            '.edit-post-header a.edit-post-fullscreen-mode-close:not(.drupal)',
          );

          const drupalFullscreenLink = $(
            '.edit-post-header a.edit-post-fullscreen-mode-close.drupal',
          );

          if (
            isFullscreenMode &&
            fullscreenLink.length > 0 &&
            drupalFullscreenLink.length === 0
          ) {
            // Define back URL
            const params = new URLSearchParams(window.location.search);
            let backUrl = `${drupalSettings.path.baseUrl}admin/content`;

            if (
              RegExp(/node\/\d+\/edit/g).test(drupalSettings.path.currentPath)
            ) {
              backUrl =
                drupalSettings.path.baseUrl +
                drupalSettings.path.currentPath.replace('/edit', '');
            }

            backUrl = params.get('destination') || backUrl;

            // Add container for the new button
            const domContainer = $('<div style="display: contents"></div>');
            fullscreenLink.after(domContainer);

            const icon = (
              <svg version="1.1" role="img" aria-hidden="true" focusable="false" id="Layer_1" x="0px" y="0px" viewBox="0 0 2160 2880" enable-background="new 0 0 2160 2880" className="dashicon">
                <path d="M1842.9,677.1C1638.9,473.1,1368,360,1080,360C485.1,360,0,845.1,0,1440s485.1,1080,1080,1080  s1080-485.1,1080-1080C2160,1152,2046.9,881.1,1842.9,677.1z M1080,2141.1c-325.7,0-591.4-265.7-591.4-591.4  c0-276,185.1-461.1,348-624c108-108,212.6-212.6,243.4-329.1c30.9,116.6,133.7,221.1,243.4,329.1c162.9,162.9,348,348,348,624  C1671.4,1875.4,1405.7,2141.1,1080,2141.1z" />
              </svg>
            );

            const { render } = wp.element;
            const { Button } = wp.components;
            const drupalButton = (
              <Button
                className="edit-post-fullscreen-mode-close drupal"
                icon={icon}
                iconSize={36}
                href={backUrl}
                label={Drupal.t('Back')}
              />
            );

            render(drupalButton, domContainer[0]);
          }
        });

        // Clear template validation.
        // Force template validity to true.
        if (!data.select('core/block-editor').isValidTemplate()) {
          // see https://github.com/WordPress/gutenberg/issues/11681
          data.dispatch('core/block-editor').setTemplateValidity(true);
        }
      });

      // To avoid restore backup notices from local autosave.
      sessionStorage.removeItem('wp-autosave-block-editor-post-1');
      localStorage.removeItem('wp-autosave-block-editor-post-1');

      await editPost.initializeEditor(target, 'page', 1, editorSettings);
    },
  };

  /**
   * Gutenberg media library behavior.
   *
   * @type {{attach(): (undefined)}}
   */
  Drupal.behaviors.gutenbergMediaLibrary = {
    attach() {
      const $form = $('#media-entity-browser-modal .media-library-add-form');

      if (!$form.length) {
        return;
      }

      $form.find('[data-drupal-selector="edit-save-insert"]').css('display', 'none');
    }
  };

})(Drupal, DrupalGutenberg, drupalSettings, window.wp, jQuery);
