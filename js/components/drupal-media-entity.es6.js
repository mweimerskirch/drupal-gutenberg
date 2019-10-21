(function (wp, $, Drupal, DrupalGutenberg, drupalSettings) {
  const {element, blockEditor, components, data} = wp;
  const {Placeholder, Button, FormFileUpload} = components;
  const {BlockIcon, MediaUpload} = blockEditor;
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
      this.onFileChange = this.onFileChange.bind(this);
    }

    onFileChange(fileData) {
      if (fileData && fileData[0] && fileData[0].id) {
        this.insertMedia([fileData[0].id]);
      }
    }

    insertMedia(mediaEntityIds) {
      if (!mediaEntityIds.length) {
        return;
      }

      this.props.setAttributes({mediaEntityIds});
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
        onFileChange: (fileData) => {
          if (fileData && fileData[0] && fileData[0].id) {
            this.insertMedia([fileData[0].id]);
          }
        },
      });
    }

    render() {
      const {className, isMediaLibraryEnabled, mediaContent} = this.props;
      const instructions = __('Upload a media file or pick one from your media library.');
      const placeholderClassName = [
        'block-editor-media-placeholder',
        'editor-media-placeholder',
        className,
      ].join(' ');

      if (mediaContent && mediaContent.html) {
        return (
          <div dangerouslySetInnerHTML={{__html: mediaContent.html}}></div>
        );
      }

      const content = isMediaLibraryEnabled
        ? (
          <MediaUpload onSelect={this.insertMedia}
                       allowedTypes={['image', 'video', 'audio', 'application']}
                       multiple={false}
                       omitFetchOnSelect={true}/>
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
    const {getMediaEntities} = select('drupal');
    const {attributes} = props;
    const mediaEntityIds = attributes.mediaEntityIds || [];

    if (!mediaEntityIds.length) {
      return {
        mediaContent: {html: '',},
        mediaUpload: getSettings().__experimentalMediaUpload,
      };
    }

    const media = getMediaEntities(mediaEntityIds);
    const node = document.createElement('div');

    if (media && media.html) {
      node.innerHTML = media.html;
      const formElements = node.querySelectorAll('input, select, button, textarea, a');
      formElements.forEach(element => {
        element.setAttribute('readonly', true);
        element.setAttribute('required', false);

        if (element.tagName === 'A') {
          element.removeAttribute('href');
        }
      });
    }

    return {
      mediaContent: {html: node.innerHTML},
      mediaUpload: getSettings().__experimentalMediaUpload,
    };
  })(DrupalMediaEntity);

  window.DrupalGutenberg = window.DrupalGutenberg || {};
  window.DrupalGutenberg.Components = window.DrupalGutenberg.Components || {};
  window.DrupalGutenberg.Components.DrupalMediaEntity = createClass;
})(wp, jQuery, Drupal, DrupalGutenberg, drupalSettings);
