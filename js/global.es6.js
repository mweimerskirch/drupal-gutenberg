/* eslint func-names: ["error", "never"] */
(function(Drupal, drupalSettingsl, $) {
  const types = {
    page: {
      labels: {
        Document: Drupal.t('Node'),
        document: Drupal.t('Node'),
        posts: Drupal.t('Nodes'),
        extras: Drupal.t('Fields'), // extra tab label in sidebar
      },
      name: 'Page',
      rest_base: 'pages',
      slug: 'page',
      supports: {
        author: false,
        comments: false, // hide discussion-panel
        'custom-fields': true,
        document: false, // * hide document tab
        editor: true,
        mediaLibrary: true,
        'media-library': true, // * hide media library
        'page-attributes': false, // hide page-attributes panel
        posts: false, // * hide posts-panel
        revisions: false,
        'template-settings': false, // * hide template-settings panel
        thumbnail: false, // featured-image panel
        title: false, // show title on editor
        extras: false,
      },
      viewable: false,
      saveable: false,
      publishable: false,
      autosaveable: false,
    },
    block: {
      capabilities: {},
      name: 'Blocks',
      rest_base: 'blocks',
      slug: 'wp_block',
      description: '',
      hierarchical: false,
      supports: {
        title: true,
        editor: true,
      },
      viewable: false,
    },
  };

  const requestPaths = {
    'save-page': {
      method: 'PUT',
      regex: /\/wp\/v2\/page\/(\d*)/g,
      process(matches, data) {
        window.wp.node = {
          pathType: 'save-post',
          id: 1,
          type: 'page',
          title: {
            raw: document.title,
          },
          content: {
            raw: data,
          },
        };

        return new Promise(resolve => {
          resolve(window.wp.node);
        });
      },
    },
    'load-node': {
      method: 'GET',
      regex: /\/wp\/v2\/pages\/(\d*)/g,
      process() {
        return new Promise(resolve => {
          resolve(window.wp.node);
        });
      },
    },
    'media-options': {
      method: 'OPTIONS',
      regex: /\/wp\/v2\/media/g,
      process() {
        return new Promise(resolve => {
          resolve({
            headers: {
              get: value => {
                if (value === 'allow') {
                  return ['POST'];
                }
              },
            },
          });
        });
      },
    },
    'load-media': {
      method: 'GET',
      regex: /\/wp\/v2\/media\/(\d*)/g,
      process(matches) {
        return new Promise((resolve, reject) => {
          $.ajax({
            method: 'GET',
            url: `${drupalSettings.path.baseUrl}editor/media/load/${
              matches[1]
            }`,
            accepts: {
              json: 'application/json, text/javascript, */*; q=0.01',
            },
          })
            .done(result => {
              resolve(result);
            })
            .fail(() => {
              reject(Error);
            });
        });
      },
    },
    'save-media': {
      method: 'POST',
      regex: /\/wp\/v2\/media/g,
      process(matches, data, body) {
        return new Promise((resolve, reject) => {
          let file;
          const entries = body.entries();

          for (const pair of entries) {
            if (pair[0] === 'file') {
              /* eslint prefer-destructuring: ["error", {"array": false}] */
              file = pair[1];
            }
          }

          const formData = new FormData();
          formData.append('files[fid]', file);
          formData.append('fid[fids]', '');
          formData.append('attributes[alt]', 'Test');
          formData.append('_drupal_ajax', '1');
          formData.append('form_id', $('[name="form_id"]').val());
          formData.append('form_build_id', $('[name="form_build_id"]').val());
          formData.append('form_token', $('[name="form_token"]').val());

          $.ajax({
            method: 'POST',
            url: `${drupalSettings.path.baseUrl}editor/media/upload/gutenberg`,
            // url: drupalSettings.path.baseUrl + 'editor/dialog/image/gutenberg?ajax_form=0&element_parents=fid',
            data: formData,
            processData: false,
            contentType: false,
            accepts: {
              json: 'application/json, text/javascript, */*; q=0.01',
            },
          })
            .done(result => {
              resolve(result);
            })
            .fail(err => {
              reject(err);
            });
        });
      },
    },
    'load-medias': {
      method: 'GET',
      regex: /\/wp\/v2\/media/g,
      process() {
        return new Promise(resolve => {
          resolve([]);
        });
      },
    },
    categories: {
      method: 'GET',
      regex: /\/wp\/v2\/categories\?(.*)/g,
      process() {
        return new Promise(resolve => {
          resolve([]);
        });
      },
    },
    users: {
      method: 'GET',
      regex: /\/wp\/v2\/users\/\?(.*)/g,
      process() {
        return new Promise(resolve => {
          resolve([{ id: 1, name: 'internal' }]);
        });
      },
    },
    taxonomies: {
      method: 'GET',
      regex: /\/wp\/v2\/taxonomies/g,
      process() {
        return new Promise(resolve => {
          resolve([]);
        });
      },
    },
    embed: {
      method: 'GET',
      regex: /\/oembed\/1\.0\/proxy\?(.*)/g,
      process(matches) {
        return new Promise((resolve, reject) => {
          $.ajax({
            method: 'GET',
            /* eslint no-useless-concat: "error" */
            url: `${drupalSettings.path.baseUrl==='/'?'':drupalSettings.path.baseUrl}/editor/oembed?url=` + encodeURIComponent(`http://open.iframe.ly/api/oembed?${matches[1]}&origin=drupal`),
            // url: `/editor/oembed?${matches[1]}&origin=drupal`,
            processData: false,
            accepts: {
              json: 'application/json, text/javascript, */*; q=0.01'
            },
          })
            .done(result => {
              resolve(result);
            })
            .fail(err => {
              reject(err);
            });
        });
      },
    },
    root: {
      method: 'GET',
      regex: /(^\/$|^$)/g,
      process() {
        return new Promise(resolve =>
          resolve({
            theme_supports: {
              formats: [
                'standard',
                'aside',
                'image',
                'video',
                'quote',
                'link',
                'gallery',
                'audio',
              ],
              'post-thumbnails': true,
            },
          }),
        );
      },
    },
    themes: {
      method: 'GET',
      regex: /\/wp\/v2\/themes\?(.*)/g,
      process() {
        return new Promise(resolve =>
          resolve([
            {
              theme_supports: {
                formats: [
                  'standard',
                  'aside',
                  'image',
                  'video',
                  'quote',
                  'link',
                  'gallery',
                  'audio',
                ],
                'post-thumbnails': true,
              },
            },
          ]),
        );
      },
    },

    'load-type-page': {
      method: 'GET',
      regex: /\/wp\/v2\/types\/page/g,
      process() {
        return new Promise(resolve => resolve(types.page));
      },
    },
    'load-type-block': {
      method: 'GET',
      regex: /\/wp\/v2\/types\/wp_block/g,
      process() {
        return new Promise(resolve => resolve(types.block));
      },
    },
    'load-types': {
      method: 'GET',
      regex: /\/wp\/v2\/types($|\?(.*))/g,
      // regex: /\/wp\/v2\/types/g,
      process() {
        return new Promise(resolve => resolve(types));
      },
    },

    'update-block': {
      method: 'PUT',
      regex: /\/wp\/v2\/blocks\/(\d*)/g,
      process(matches, data) {
        return new Promise((resolve, reject) => {
          $.ajax({
            method: 'PUT',
            url: `${drupalSettings.path.baseUrl}editor/reusable-blocks/${
              data.id
            }`,
            data: JSON.stringify(data),
            processData: false,
            contentType: false,
            accepts: {
              json: 'application/json, text/javascript, */*; q=0.01',
            },
          })
            .done(result => {
              resolve(result);
            })
            .fail(err => {
              reject(err);
            });
        });
      },
    },

    'delete-block': {
      method: 'DELETE',
      regex: /\/wp\/v2\/blocks\/(\d*)/g,
      process(matches) {
        return new Promise((resolve, reject) => {
          $.ajax({
            method: 'DELETE',
            url: `${drupalSettings.path.baseUrl}editor/reusable-blocks/${
              matches[1]
            }`,
            processData: false,
            contentType: false,
            accepts: {
              json: 'application/json, text/javascript, */*; q=0.01',
            },
          })
            .done(result => {
              resolve(result);
            })
            .fail(err => {
              reject(err);
            });
        });
      },
    },

    'insert-block': {
      method: 'POST',
      regex: /\/wp\/v2\/blocks/g,
      process(matches, data) {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append('title', data.title);
          formData.append('content', data.content);

          $.ajax({
            method: 'POST',
            url: `${drupalSettings.path.baseUrl}editor/reusable-blocks`,
            data: formData,
            processData: false,
            contentType: false,
            accepts: {
              json: 'application/json, text/javascript, */*; q=0.01',
            },
          })
            .done(result => {
              resolve(result);
            })
            .fail(err => {
              reject(err);
            });
        });
      },
    },
    'load-block': {
      method: 'GET',
      regex: /\/wp\/v2\/blocks\/(\d*)/g,
      process(matches) {
        return new Promise((resolve, reject) => {
          $.ajax({
            method: 'GET',
            url: `${drupalSettings.path.baseUrl}editor/reusable-blocks/${
              matches[1]
            }`,
            accepts: {
              json: 'application/json, text/javascript, */*; q=0.01',
            },
          })
            .done(result => {
              resolve(result);
            })
            .fail(err => {
              reject(err);
            });
        });
      },
    },
    'load-blocks': {
      method: 'GET',
      regex: /\/wp\/v2\/blocks\?(.*)/g,
      process() {
        return new Promise((resolve, reject) => {
          $.ajax({
            method: 'GET',
            url: `${drupalSettings.path.baseUrl}editor/reusable-blocks`,
            accepts: {
              json: 'application/json, text/javascript, */*; q=0.01',
            },
          })
            .done(result => {
              resolve(result);
            })
            .fail(err => {
              reject(err);
            });
        });
      },
    },
  };

  function processPath(options) {
    // for-in is used to be able to do a simple short-circuit
    // whwn a match is found.
    /* eslint no-restricted-syntax: ["error", "never"] */
    for (const key in requestPaths) {
      if (requestPaths.hasOwnProperty(key)) {
        const requestPath = requestPaths[key];
        requestPath.regex.lastIndex = 0;
        const matches = requestPath.regex.exec(`${options.path}`);

        if (
          matches &&
          matches.length > 0 &&
          ((options.method && options.method === requestPath.method) ||
            requestPath.method === 'GET')
        ) {
          return requestPath.process(matches, options.data, options.body);
        }
      }
    }

    // None found, return type settings.
    return new Promise((resolve, reject) =>
      reject(new Error('API handler not found.')),
    );
  }

  function apiFetch(options) {
    return processPath(options);
  }

  function addQueryArgs(url, args) {
    if (url === 'post.php') {
      return '?save=1';
    }

    if (url === 'edit.php' && args.post_type && args.post_type === 'wp_block') {
      return `${Drupal.url('')}admin/content/reusable-blocks`;
    }

    if (url === '/oembed/1.0/proxy') {
      return `${url}?url=${args.url}`;
    }

    // return format({ ...parsedURL, query });
    // IF NO URL PROCESSING, RETURN THE ORIGINAL PATH/URL!
    return url;
  }

  window.wp = {
    apiFetch,
    url: { addQueryArgs },
  };
})(Drupal, drupalSettings, jQuery);
