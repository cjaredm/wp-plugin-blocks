/**
 * BLOCK: mini-hero-gallery
 */
const blockName = 'mini-hero-gallery';
import Edit from './Edit';
import Save from './Save';
const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
import './editor.scss';
import './style.scss';

// Block Name MUST = 'name-space/blockName'
registerBlockType(`${process.env.NAME_SPACE}/${blockName}`, {
  title: __(blockName),
  icon: 'admin-settings',
  category: 'common',
  keywords: [__(blockName), __('hero'), __('gallery')],
  attributes: {
    header: {type: 'string', default: ''},
    images: {type: 'array', default: []},
  },

  edit: props => (
    <Edit
      {...props}
      id={`${blockName}__editor`}
      className={`${props.className} ${process.env.NAME_SPACE}-theme-styles-entry`}
    />
  ),
  save: props => (
    <Save
      {...props}
      id={`${blockName}__render`}
      className={`${props.className} ${process.env.NAME_SPACE}-theme-styles-entry`}
    />
  ),
});
