/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _wp = wp,
    blocks = _wp.blocks,
    data = _wp.data,
    editor = _wp.editor;
var registerBlockType = blocks.registerBlockType;
var dispatch = data.dispatch,
    select = data.select;
var InnerBlocks = editor.InnerBlocks;

var __ = Drupal.t;

var settings = {
  title: __('Section'),
  description: __('Section block for template use.'),
  icon: 'media-document',
  attributes: {},

  parent: ['core/paragraph'],

  edit: function edit(_ref) {
    var className = _ref.className;

    return React.createElement(InnerBlocks, { templateLock: false });
  },
  save: function save(_ref2) {
    var className = _ref2.className;

    return React.createElement(
      'main',
      { className: className },
      React.createElement(InnerBlocks.Content, null)
    );
  }
};

var category = {
  slug: 'drupal',
  title: __('Drupal Blocks')
};

var currentCategories = select('core/blocks').getCategories().filter(function (item) {
  return item.slug !== category.slug;
});
dispatch('core/blocks').setCategories([category].concat(_toConsumableArray(currentCategories)));

registerBlockType(category.slug + '/section', _extends({ category: category.slug }, settings));