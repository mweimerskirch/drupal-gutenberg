/* eslint func-names: ["error", "never"] */
(function(wp, $, Drupal, DrupalGutenberg, drupalSettings) {
  const { element, blockEditor, components, data } = wp;
  const {
    Placeholder,
    Button,
    FormFileUpload,
    SelectControl,
    IconButton,
    PanelBody,
    Toolbar,
    BaseControl,
  } = components;
  const {
    BlockIcon,
    MediaUpload,
    BlockControls,
    InspectorControls,
    URLInput,
  } = blockEditor;
  const { Component, Fragment } = element;
  const { DrupalIcon } = DrupalGutenberg.Components;
  const __ = Drupal.t;
  const { withSelect } = data;

  class DrupalMediaEntity extends Component {
    constructor() {
      super(...arguments);
      this.state = {
        value: '',
      };
      this.insertMedia = this.insertMedia.bind(this);
      this.onUpload = this.onUpload.bind(this);
      this.changeViewMode = this.changeViewMode.bind(this);
    }

    onUpload(event) {
      const { allowedTypes, mediaUpload, onError } = this.props;

      mediaUpload({
        allowedTypes,
        filesList: event.target.files,
        onError,
        onFileChange: fileData => {
          if (
            fileData &&
            fileData[0] &&
            fileData[0].media_entity &&
            fileData[0].media_entity.id
          ) {
            this.insertMedia(fileData[0].media_entity.id);
          }
        },
      });
    }

    changeViewMode(viewMode) {
      const { setAttributes } = this.props;
      setAttributes({
        viewMode,
      });
    }

    insertMedia(mediaEntityId) {
      const { setAttributes } = this.props;

      if (isNaN(mediaEntityId)) {
        const regex = /\((\d*)\)$/;
        const match = regex.exec(mediaEntityId);
        mediaEntityId = match[1];
      }

      setAttributes({
        mediaEntityIds: [mediaEntityId],
      });

      this.setState({ value: '' });
    }

    render() {
      const {
        className,
        isMediaLibraryEnabled,
        mediaContent,
        mediaViewModes,
        attributes,
        setAttributes,
        isSelected,
      } = this.props;

      const { value } = this.state;

      const instructions = __(
        'Upload a media file or pick one from your media library.',
      );
      const placeholderClassName = [
        'block-editor-media-placeholder',
        'editor-media-placeholder',
        className,
      ].join(' ');

      if (Array.isArray(mediaViewModes) && mediaViewModes.length) {
        const inspectorControls = (
          <InspectorControls>
            {!attributes.lockViewMode && (
              <PanelBody title={__('Media entity settings')}>
                <SelectControl
                  label={__('View mode')}
                  value={attributes.viewMode}
                  options={mediaViewModes}
                  onChange={this.changeViewMode}
                />
              </PanelBody>
            )}
          </InspectorControls>
        );

        let html = mediaContent.default.processedHtml;
        if (mediaContent[attributes.viewMode]) {
          html = mediaContent[attributes.viewMode].processedHtml;
        }

        return (
          <Fragment>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            {inspectorControls}
            <BlockControls>
              <Toolbar
                controls={[
                  {
                    icon: 'no',
                    title: __('Clear media'),
                    onClick: () => setAttributes({ mediaEntityIds: [] }),
                  },
                ]}
              />
            </BlockControls>
          </Fragment>
        );
      }

      const fetchMedia = search =>
        new Promise(resolve => {
          fetch(`${drupalSettings.path.baseUrl}editor/media/autocomplete?search=${search}`)
            .then(response => response.json())
            .then(json => {
              resolve(json);
            });
        });

      const processMediaResult = (url, post) => {
        this.setState({ value: url });
      };

      const linkId = 'search_media_0001';

      const content = isMediaLibraryEnabled ? (
        <MediaUpload
          onSelect={this.insertMedia}
          allowedTypes={attributes.allowedTypes}
          multiple={false}
          handlesMediaEntity={true}
        />
      ) : (
        <Fragment>
          <URLInput
            className="media-entity-search-input"
            value={ value }
            placeholder={__('Type media ID or text to search media')}
            /* eslint-disable jsx-a11y/no-autofocus */
            // Disable Reason: The rule is meant to prevent enabling auto-focus, not disabling it.
            autoFocus={ false }
            /* eslint-enable jsx-a11y/no-autofocus */
            onChange={processMediaResult}
            disableSuggestions={ ! isSelected }
            id={ linkId }
            hasBorder
            __experimentalFetchLinkSuggestions={fetchMedia}
          />
          {/* <input
            type="text"
            value={value}
            onChange={e => this.setState({ value: e.target.value })}
          /> */}
          <Button
            isLarge
            isPrimary
            title={__('Insert')}
            onClick={() => this.insertMedia(value)}
          >
            {__('Insert')}
          </Button>
        </Fragment>
      );

      return (
        <Placeholder
          icon={<BlockIcon icon="admin-media" />}
          label={__('Drupal Media Entity')}
          instructions={instructions}
          className={placeholderClassName}
        >
          <FormFileUpload
            onChange={this.onUpload}
            accept={'image/*,video/*,audio/*,application/*'}
            multiple={false}
            render={({ openFileDialog }) => {
              return (
                <Fragment>
                  <IconButton
                    isLarge
                    onClick={openFileDialog}
                    className={[
                      'block-editor-media-placeholder__button',
                      'editor-media-placeholder__button',
                      'block-editor-media-placeholder__upload-button',
                    ].join(' ')}
                    icon="upload"
                  >
                    {__('Upload')}
                  </IconButton>
                </Fragment>
              );
            }}
          />
          {content}
        </Placeholder>
      );
    }
  }

  const createClass = withSelect((select, props) => {
    const { getSettings } = select('core/block-editor');
    const { getMediaEntity } = select('drupal');
    const { attributes } = props;
    const mediaEntityIds = attributes.mediaEntityIds || [];

    const defaultData = {
      mediaContent: {},
      mediaViewModes: [],
      mediaUpload: getSettings().mediaUpload,
    };

    if (!mediaEntityIds.length) {
      return defaultData;
    }

    const mediaEntity = getMediaEntity(mediaEntityIds[0]);

    if (!mediaEntity) {
      return defaultData;
    }

    const mediaViewModes = [];

    if (Object.keys(mediaEntity).length) {
      // eslint-disable-next-line no-restricted-syntax
      for (const viewMode in mediaEntity) {
        if (!mediaEntity.hasOwnProperty(viewMode)) {
          continue;
        }

        mediaViewModes.push({
          value: mediaEntity[viewMode]['view_mode'],
          label: mediaEntity[viewMode]['view_mode_name'],
        });

        // Process media HTML.
        const node = document.createElement('div');
        node.innerHTML = mediaEntity[viewMode].html;
        const formElements = node.querySelectorAll(
          'input, select, button, textarea, a',
        );
        formElements.forEach(element => {
          element.setAttribute('readonly', true);
          element.setAttribute('required', false);

          if (element.tagName === 'A') {
            element.removeAttribute('href');
          }
        });
        mediaEntity[viewMode].processedHtml = node.innerHTML;
      }
    }

    return {
      mediaContent: mediaEntity,
      mediaViewModes,
      mediaUpload: getSettings().mediaUpload,
    };
  })(DrupalMediaEntity);

  window.DrupalGutenberg = window.DrupalGutenberg || {};
  window.DrupalGutenberg.Components = window.DrupalGutenberg.Components || {};
  window.DrupalGutenberg.Components.DrupalMediaEntity = createClass;
})(wp, jQuery, Drupal, DrupalGutenberg, drupalSettings);
