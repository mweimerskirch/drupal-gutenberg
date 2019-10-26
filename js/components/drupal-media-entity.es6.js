/* eslint func-names: ["error", "never"] */
(function (wp, $, Drupal, DrupalGutenberg, drupalSettings) {
  const {element, blockEditor, components, data} = wp;
  const {Placeholder, Button, FormFileUpload, SelectControl, IconButton, PanelBody} = components;
  const {BlockIcon, MediaUpload, InspectorControls} = blockEditor;
  const {Component, Fragment} = element;
  const {DrupalIcon} = DrupalGutenberg.Components;
  const __ = Drupal.t;
  const {withSelect} = data;

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

    insertMedia(mediaEntityId) {
      this.props.setAttributes({
        mediaEntityIds: [mediaEntityId]
      });
    }

    changeViewMode(viewMode) {
      this.props.setAttributes({
        viewMode
      });
    }

    onUpload(event) {
      const {
        allowedTypes,
        mediaUpload,
        onError
      } = this.props;

      mediaUpload({
        allowedTypes,
        filesList: event.target.files,
        onError,
        onFileChange: fileData => {
          if (fileData && fileData[0] && fileData[0].media_entity && fileData[0].media_entity.id) {
            this.insertMedia(fileData[0].media_entity.id);
          }
        },
      });
    }

    render() {
      const {
        className,
        isMediaLibraryEnabled,
        mediaContent,
        mediaViewModes,
        attributes,
      } = this.props;
      const instructions = __('Upload a media file or pick one from your media library.');
      const placeholderClassName = [
        'block-editor-media-placeholder',
        'editor-media-placeholder',
        className,
      ].join(' ');

      if (Array.isArray(mediaViewModes) && mediaViewModes.length) {
        const inspectorControls = (
          <InspectorControls>
            <PanelBody title={__('Media entity settings')}>
              <SelectControl label={__('View mode')}
                             value={attributes.viewMode}
                             options={mediaViewModes}
                             onChange={this.changeViewMode}/>
            </PanelBody>
          </InspectorControls>
        );

        let html = mediaContent.default.processedHtml;
        if (mediaContent[attributes.viewMode]) {
          html = mediaContent[attributes.viewMode].processedHtml;
        }

        return (
          <Fragment>
            <div dangerouslySetInnerHTML={{__html: html}}/>
            {inspectorControls}
          </Fragment>
        );
      }

      const content = isMediaLibraryEnabled
        ? (
          <MediaUpload onSelect={this.insertMedia}
                       allowedTypes={['image', 'video', 'audio', 'application']}
                       multiple={false}
                       handlesMediaEntity={true}/>
        )
        : (
          <Fragment>
            <input type="text"
                   value={this.state.value}
                   onChange={e => this.setState({value: e.target.value})}/>
            <Button isLarge
                    isPrimary
                    title={__('Insert')}
                    onClick={() => this.insertMedia([this.state.value])}>
              {__('Insert')}
            </Button>
          </Fragment>
        );

      return (
        <Placeholder icon={<BlockIcon icon={DrupalIcon}/>}
                     label={__('Drupal Media Entity')}
                     instructions={instructions}
                     className={placeholderClassName}>
          <FormFileUpload onChange={this.onUpload}
                          accept={"image/*,video/*,audio/*,application/*"}
                          multiple={false}
                          render={({openFileDialog}) => {
                            return (
                              <Fragment>
                                <IconButton isLarge
                                            onClick={openFileDialog}
                                            className={[
                                              'block-editor-media-placeholder__button',
                                              'editor-media-placeholder__button',
                                              'block-editor-media-placeholder__upload-button',
                                            ].join(' ')}
                                            icon="upload">
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
    const {getSettings} = select('core/block-editor');
    const {getMediaEntity} = select('drupal');
    const {attributes} = props;
    const mediaEntityIds = attributes.mediaEntityIds || [];

    const defaultData = {
      mediaContent: {},
      mediaViewModes: [],
      mediaUpload: getSettings().__experimentalMediaUpload,
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
      for (let viewMode in mediaEntity) {
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
        const formElements = node.querySelectorAll('input, select, button, textarea, a');
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
      mediaUpload: getSettings().__experimentalMediaUpload,
    };
  })(DrupalMediaEntity);

  window.DrupalGutenberg = window.DrupalGutenberg || {};
  window.DrupalGutenberg.Components = window.DrupalGutenberg.Components || {};
  window.DrupalGutenberg.Components.DrupalMediaEntity = createClass;
})(wp, jQuery, Drupal, DrupalGutenberg, drupalSettings);
