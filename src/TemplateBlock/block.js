/**
 * BLOCK: block-name-placeholder
 */
// match above BLOCK name to this variable;
const blockName = 'block-name-placeholder';
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
    thing: {type: 'string', default: ''},
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
