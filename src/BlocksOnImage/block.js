/**
 * BLOCK: blocks-on-image
 */
// match above BLOCK name to this variable;
const blockName = 'blocks-on-image';
import env from '../../.env.js';
import Edit from './Edit';
import Save from './Save';
const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
import './editor.scss';
import './style.scss';

// Block Name MUST = 'name-space/blockName'
registerBlockType(`${env.NAME_SPACE}/${blockName}`, {
  title: __(blockName),
  icon: 'admin-settings',
  category: 'common',
  keywords: [__('thing')],
  attributes: {
    backgroundType: {type: 'string', default: 'img'},
    img: {type: 'object', default: null},
    backgroundColor: {type: 'string', default: 'secondary'},
    size: {type: 'string', default: 'half'},
    opacity: {type: 'number', default: 5},
  },

  edit: props => (
    <Edit
      {...props}
      id={`${blockName}__editor`}
      className={`${props.className} ${env.NAME_SPACE}-theme-styles-entry`}
    />
  ),
  save: props => (
    <Save
      render
      {...props}
      id={`${blockName}__render`}
      className={props.className}
    />
  ),
});
