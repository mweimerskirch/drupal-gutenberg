((wp, Drupal, DrupalGutenberg, drupalSettings) => {
  const { components, element } = wp;
  const { Component, Fragment } = element;
  const { MediaBrowserDetails } = DrupalGutenberg.Components;
  const { Button, FormFileUpload } = components;

  const __ = Drupal.t;

  function MediaBrowserThumbnail(props) {
    const { mediaType, filename, url } = props;

    return (
      <Fragment>
        {mediaType === 'image' && (
          <div className="center">
            <img alt={filename} src={url} />
          </div>
        )}

        {mediaType !== 'image' && <div className="filename">{filename}</div>}
      </Fragment>
    );
  }

  class MediaBrowser extends Component {
    constructor() {
      super(...arguments);
      this.state = {
        data: [],
        selected: {},
        active: null,
        search: '',
      };
      this.selectMedia = this.selectMedia.bind(this);
      this.canToggle = this.canToggle.bind(this);
      this.toggleMedia = this.toggleMedia.bind(this);
    }

    componentWillMount() {
      const { allowedTypes } = this.props;

      fetch(`
        ${drupalSettings.path.baseUrl}editor/media/search/${allowedTypes.join(
        '+',
      )}/*`)
        .then(response => response.json())
        .then(json => {
          this.setState({ data: json });
        });
    }

    componentDidMount() {
      const { multiple, value } = this.props;
      const selected =
        {} &&
        (multiple && value
          ? {
              ...value.reduce((result, item) => {
                result[item] = true;
                return result;
              }, {}),
            }
          : { [value]: true });

      console.log(selected, Object.keys(selected)[0]);
      this.setState({
        selected,
        active: Object.keys(selected)[0],
      });
    }

    onFilesUpload(files) {
      const { multiple } = this.props;
      // console.log(files);
    }

    selectMedia() {
      const { selected, data } = this.state;
      const { onSelect } = this.props;
      const medias = data.filter(item => selected[item.id]);

      onSelect(medias);
    }

    canToggle(ev, id) {
      const { multiple } = this.props;
      const { selected } = this.state;

      this.setState({ active: id });

      console.log(multiple, selected[id], this);
      if (multiple && selected[id]) {
        // Stop bubbling down the tree (checkbox).
        console.log('prevented');
        ev.preventDefault();
      }

      return true;
    }

    toggleMedia(ev, id) {
      const { selected } = this.state;
      const { multiple } = this.props;
      this.setState({ active: id });

      if (multiple) {
        this.setState({
          selected: { ...selected, [id]: ev.target.checked },
        });
      } else {
        this.setState({
          selected: { [id]: ev.target.checked },
        });
      }
    }

    render() {
      const { data, selected, active, search } = this.state;
      const { multiple } = this.props;

      const getMedia = id => data.filter(item => item.id === id)[0];
      const activeMedia = getMedia(active);

      return (
        <div className="media-browser">
          <div className="content">
            <div className="toolbar">
              <div className="form-item">
                <input
                  name="media-browser-search"
                  className="text-full"
                  placeHolder={__('Search')}
                  type="text"
                  onChange={value => {
                    this.setState({ search: value.target.value.toLowerCase() });
                  }}
                />
              </div>
            </div>
            <ul className="list">
              {data
                .filter(item => item.filename.toLowerCase().includes(search))
                .map(media => (
                  <li
                    className={`item ${active === media.id ? 'selected' : ''}`}
                  >
                    <label for={`media-browser-selector-${media.id}`} className={`thumbnail ${media.media_type}`} onClick={ev => this.canToggle(ev, media.id)}>
                      <MediaBrowserThumbnail
                        mediaType={media.media_type}
                        url={media.url}
                        filename={media.filename}
                      />
                    </label>
                    <input
                      id={`media-browser-selector-${media.id}`}
                      name={`media-browser-selector[${media.id}]`}
                      // name="media-browser-selector"
                      onClick={ev => this.toggleMedia(ev, media.id)}
                      type={multiple ? 'checkbox' : 'radio'}
                      checked={selected[media.id]}
                    />
                  </li>
                ))}
            </ul>
            <div className="details">
              {activeMedia && (
                <Fragment>
                  <h2>{__('Media details')}</h2>
                  <MediaBrowserDetails media={activeMedia} />
                </Fragment>
              )}
            </div>
          </div>
          <div className="form-actions">
            {multiple && (
              <div className="selected-summary">
                {__('Total selected')}:
                {Object.values(selected).filter(item => item).length}
              </div>
            )}
            <div className="buttons">
              <FormFileUpload
                isLarge
                className="editor-media-placeholder__button"
                // onChange={ this.onUpload }
                accept="image" // { accept }
                multiple={multiple}
              >
                {__('Upload')}
              </FormFileUpload>

              <Button isLarge isPrimary onClick={this.selectMedia}>
                {__('Select')}
              </Button>
            </div>
          </div>
        </div>
      );
    }
  }

  window.DrupalGutenberg = window.DrupalGutenberg || {};
  window.DrupalGutenberg.Components = window.DrupalGutenberg.Components || {};
  window.DrupalGutenberg.Components.MediaBrowser = MediaBrowser;
})(wp, Drupal, DrupalGutenberg, drupalSettings);
