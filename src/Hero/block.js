/**
 * BLOCK: hero
 */
// match above BLOCK name to this variable;
const blockName = 'hero';
import Edit from './Edit';
import Save from './Save';
const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
import './editor.scss';
import './style.scss';

// Block Name MUST = 'name-space/blockName'
registerBlockType(`inetz/${blockName}`, {
  title: __(blockName),
  icon: 'admin-settings',
  category: 'common',
  keywords: [__('hero')],
  attributes: {
    heroSize: {type: 'string', default: 'full'},
    backgroundColor: {type: 'string', default: 'secondary'},
    img: {type: 'object', default: null},
    heading: {type: 'string', default: null},
    subHeading: {type: 'string', default: null},
    btnLink: {type: 'string', default: null},
    btnText: {type: 'string', default: null},
    btnColor: {type: 'string', default: 'tertiary'},
  },

  edit: props => (
    <Edit
      {...props}
      id={`${blockName}__editor`}
      className={`${props.className} inetz-theme-styles-entry`}
    />
  ),
  save: props => (
    <Save
      {...props}
      id={`${blockName}__render`}
      className={`${props.className} inetz-theme-styles-entry`}
    />
  ),
});
