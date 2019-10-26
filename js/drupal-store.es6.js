/* eslint func-names: ["error", "never"] */
(function() {
  function registerDrupalStore(data) {
    const { registerStore, dispatch } = data;

    const DEFAULT_STATE = {
      blocks: {},
      mediaEntities: {},
    };

    return registerStore('drupal', {
      reducer(state = DEFAULT_STATE, action) {
        switch (action.type) {
          case 'SET_BLOCK':
            return {
              ...state,
              blocks: {
                ...state.blocks,
                [action.item]: action.block,
              },
            };
          case 'SET_MEDIA_ENTITY':
            return {
              ...state,
              mediaEntities: {
                ...state.mediaEntities,
                [action.id]: action.mediaEntity,
              }
            };
          default:
            return state;
        }
      },

      actions: {
        setBlock(item, block) {
          return {
            type: 'SET_BLOCK',
            item,
            block,
          };
        },
        setMediaEntity(id, mediaEntity) {
          return {
            type: 'SET_MEDIA_ENTITY',
            id,
            mediaEntity,
          };
        }
      },

      selectors: {
        getBlock(state, item) {
          const { blocks } = state;
          return blocks[item];
        },
        getMediaEntity(state, id) {
          const { mediaEntities } = state;
          return mediaEntities[id];
        }
      },

      resolvers: {
        async getBlock(item) {
          const response = await fetch(`
            ${drupalSettings.path.baseUrl}editor/blocks/load/${item}
          `);
          const block = await response.json();
          dispatch('drupal').setBlock(item, block);
          return {
            type: 'GET_BLOCK',
            item,
            block,
          };
        },
        async getMediaEntity(entityId) {
          const response = await fetch(`
            ${drupalSettings.path.baseUrl}editor/media/render/${entityId}
          `);

          if (response.ok) {
            const data = await response.json();

            if (data && data.view_modes) {
              dispatch('drupal').setMediaEntity(entityId, data.view_modes);
              return data.view_modes;
            }
          }

          if (response.status === 404) {
            Drupal.notifyError("Media entity couldn't be found.");
            return null;
          }

          if (!response.ok) {
            Drupal.notifyError("An error occurred while fetching data.");
            return null;
          }
        }
      },
    });
  }

  window.DrupalGutenberg = window.DrupalGutenberg || {};
  window.DrupalGutenberg.registerDrupalStore = registerDrupalStore;
})();
