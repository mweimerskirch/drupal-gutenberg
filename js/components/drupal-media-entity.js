/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (wp, $, Drupal, DrupalGutenberg, drupalSettings) {
  var element = wp.element,
      blockEditor = wp.blockEditor,
      components = wp.components,
      data = wp.data;
  var Placeholder = components.Placeholder,
      Button = components.Button,
      FormFileUpload = components.FormFileUpload;
  var BlockIcon = blockEditor.BlockIcon,
      MediaUpload = blockEditor.MediaUpload;
  var Component = element.Component,
      Fragment = element.Fragment;
  var DrupalIcon = DrupalGutenberg.Components.DrupalIcon;

  var __ = Drupal.t;
  var withSelect = data.withSelect;

  var DrupalMediaEntity = function (_Component) {
    _inherits(DrupalMediaEntity, _Component);

    function DrupalMediaEntity() {
      _classCallCheck(this, DrupalMediaEntity);

      var _this = _possibleConstructorReturn(this, (DrupalMediaEntity.__proto__ || Object.getPrototypeOf(DrupalMediaEntity)).apply(this, arguments));

      _this.state = {
        value: ''
      };
      _this.insertMedia = _this.insertMedia.bind(_this);
      _this.onUpload = _this.onUpload.bind(_this);
      _this.onFileChange = _this.onFileChange.bind(_this);
      return _this;
    }

    _createClass(DrupalMediaEntity, [{
      key: 'onFileChange',
      value: function onFileChange(fileData) {
        if (fileData && fileData[0] && fileData[0].id) {
          this.insertMedia([fileData[0].id]);
        }
      }
    }, {
      key: 'insertMedia',
      value: function insertMedia(mediaEntityIds) {
        if (!mediaEntityIds.length) {
          return;
        }

        this.props.setAttributes({ mediaEntityIds: mediaEntityIds });
      }
    }, {
      key: 'onUpload',
      value: function onUpload(event) {
        var _this2 = this;

        var _props = this.props,
            allowedTypes = _props.allowedTypes,
            mediaUpload = _props.mediaUpload,
            onError = _props.onError;


        mediaUpload({
          allowedTypes: allowedTypes,
          filesList: event.target.files,
          onError: onError,
          onFileChange: function onFileChange(fileData) {
            if (fileData && fileData[0] && fileData[0].id) {
              _this2.insertMedia([fileData[0].id]);
            }
          }
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var _props2 = this.props,
            className = _props2.className,
            isMediaLibraryEnabled = _props2.isMediaLibraryEnabled,
            mediaContent = _props2.mediaContent;

        var instructions = __('Upload a media file or pick one from your media library.');
        var placeholderClassName = ['block-editor-media-placeholder', 'editor-media-placeholder', className].join(' ');

        if (mediaContent && mediaContent.html) {
          return React.createElement('div', { dangerouslySetInnerHTML: { __html: mediaContent.html } });
        }

        var content = isMediaLibraryEnabled ? React.createElement(MediaUpload, { onSelect: this.insertMedia,
          allowedTypes: ['image', 'video', 'audio', 'application'],
          multiple: false,
          omitFetchOnSelect: true }) : React.createElement(
          Fragment,
          null,
          React.createElement('input', { type: 'text',
            value: this.state.value,
            onChange: function onChange(e) {
              return _this3.setState({ value: e.target.value });
            } }),
          React.createElement(
            Button,
            { isLarge: true,
              isPrimary: true,
              title: __('Insert'),
              onClick: function onClick() {
                return _this3.insertMedia([_this3.state.value]);
              } },
            __('Insert')
          )
        );

        return React.createElement(
          Placeholder,
          { icon: React.createElement(BlockIcon, { icon: DrupalIcon }),
            label: __('Drupal Media Entity'),
            instructions: instructions,
            className: placeholderClassName },
          React.createElement(FormFileUpload, { onChange: this.onUpload,
            accept: "image/*,video/*,audio/*,application/*",
            multiple: false,
            render: function render(_ref) {
              var openFileDialog = _ref.openFileDialog;

              return React.createElement(
                Fragment,
                null,
                React.createElement(
                  IconButton,
                  { isLarge: true,
                    onClick: openFileDialog,
                    className: ['block-editor-media-placeholder__button', 'editor-media-placeholder__button', 'block-editor-media-placeholder__upload-button'].join(' '),
                    icon: 'upload' },
                  __('Upload')
                )
              );
            }
          }),
          content
        );
      }
    }]);

    return DrupalMediaEntity;
  }(Component);

  var createClass = withSelect(function (select, props) {
    var _select = select('core/block-editor'),
        getSettings = _select.getSettings;

    var _select2 = select('drupal'),
        getMediaEntities = _select2.getMediaEntities;

    var attributes = props.attributes;

    var mediaEntityIds = attributes.mediaEntityIds || [];

    if (!mediaEntityIds.length) {
      return {
        mediaContent: { html: '' },
        mediaUpload: getSettings().__experimentalMediaUpload
      };
    }

    var media = getMediaEntities(mediaEntityIds);
    var node = document.createElement('div');

    if (media && media.html) {
      node.innerHTML = media.html;
      var formElements = node.querySelectorAll('input, select, button, textarea, a');
      formElements.forEach(function (element) {
        element.setAttribute('readonly', true);
        element.setAttribute('required', false);

        if (element.tagName === 'A') {
          element.removeAttribute('href');
        }
      });
    }

    return {
      mediaContent: { html: node.innerHTML },
      mediaUpload: getSettings().__experimentalMediaUpload
    };
  })(DrupalMediaEntity);

  window.DrupalGutenberg = window.DrupalGutenberg || {};
  window.DrupalGutenberg.Components = window.DrupalGutenberg.Components || {};
  window.DrupalGutenberg.Components.DrupalMediaEntity = createClass;
})(wp, jQuery, Drupal, DrupalGutenberg, drupalSettings);