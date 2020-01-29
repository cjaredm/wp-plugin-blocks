/**
 * BLOCK: hero-slider
 */
// match above BLOCK name to this variable;
const blockName = 'hero-slider';
import {Edit} from './Edit';
import {Save} from './Save';
const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
import './editor.scss';
import './style.scss';

// Block Name MUST = 'name-space/blockName'
registerBlockType(`inetz/${blockName}`, {
  title: __(blockName),
  icon: 'admin-settings',
  category: 'common',
  keywords: [__('hero'), __('slider')],
  attributes: {
    heroSize: {type: 'string', default: 'full'},
    backgroundColor: {type: 'string', default: 'secondary'},
    slideSpeed: {type: 'string', default: '6.75'},
    slides: {type: 'array', default: []},
  },

  edit: props => {
    // DO NOT REMOVE THE inetz-theme-styles-entry, its how we allow some frontend styles into the admin without breaking everything
    return (
      <Edit
        {...props}
        className={`${props.className} inetz-theme-styles-entry ${blockName}__editor`}
      />
    );
  },

  save: props => {
    return (
      <Save {...props} className={`${props.className} ${blockName}__render`} />
    );
  },
});
