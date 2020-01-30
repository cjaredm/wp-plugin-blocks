/**
 * BLOCK: call-to-Action
 */
// match above BLOCK name to this variable;
const blockName = 'call-to-action';
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
    backgroundColor: {type: 'string', default: ''},
    texture: {type: 'string', default: ''},
    heading: {type: 'string', default: ''},
    subHeading: {type: 'string', default: ''},
    buttons: {type: 'array', default: []},
  },

  edit: props => (
    <Edit
      {...props}
      id={`${blockName}__editor`}
      className={`${props.className} ${env.NAME_SPACE}-theme-styles-entry`}
    />
  ),
  save: props => (
    <Save {...props} id={`${blockName}__render`} className={props.className} />
  ),
});
