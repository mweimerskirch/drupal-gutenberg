((drupalSettings, wp) => {
  window.wp = wp || {};

  // User settings
  window.userSettings = window.userSettings || {
    secure: drupalSettings.user.permissionsHash,
    time: 1234567,
    uid: drupalSettings.user.uid,
  };

  // API settings
  window.wpApiSettings = window.wpApiSettings || {};
  window.wpApiSettingsroot = window.wpApiSettings.root || window.location.origin;
  window.wpApiSettingsnonce = window.wpApiSettings.nonce || '123456789';
  window.wpApiSettingsversionString = window.wpApiSettings.versionString || 'wp/v2/';

  // postboxes
  window.postboxes = window.postboxes || {
    add_postbox_toggles: (page, args) => {
      // console.log('page', page);
      // console.log('args', args);
    },
  };

  // editorL10n
  window.wpEditorL10n = window.wpEditorL10n || {
    tinymce: {
      baseUrl: 'vendor/tinymce',
      settings: {
        external_plugins: [],
        plugins: 'charmap,colorpicker,hr,lists,media,paste,tabfocus,textcolor,fullscreen', // ,wordpress,wpautoresize,wpeditimage,wpemoji,wpgallery,wplink,wpdialogs,wptextpattern,wpview',
        toolbar1: 'formatselect,bold,italic,bullist,numlist,blockquote,alignleft,aligncenter,alignright,link,unlink,wp_more,spellchecker,kitchensink',
        toolbar2: 'strikethrough,hr,forecolor,pastetext,removeformat,charmap,outdent,indent,undo,redo,wp_help',
        toolbar3: '',
        toolbar4: '',
      },
      suffix: '.min',
    },
  };

  drupalSettings.gutenberg._listeners = {
    init: [],
  };

  drupalSettings.gutenberg.addListener = (type, callback) => {
    // if (!drupalSettings.gutenberg._listeners) {
    //   drupalSettings.gutenberg._listeners = {
    //     init: [],
    //   };
    // }

    if (!drupalSettings.gutenberg._listeners[type]) {
      throw new Error(
        `Type ${type} not defined as an event listener type for Drupal Gutenberg.`,
      );
    }

    drupalSettings.gutenberg._listeners[type].push(callback);
  };
})(drupalSettings, window.wp);
