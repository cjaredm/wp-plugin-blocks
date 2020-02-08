/**
 * BLOCK: hero
 */
// match above BLOCK name to this variable;
const blockName = 'hero';
import env from '../../.env.js';
import Edit from './Edit';
import Save from './Save';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
import './editor.scss';
import './style.scss';

// Block Name MUST = 'name-space/blockName'
registerBlockType(`${env.NAME_SPACE}/${blockName}`, {
	title: __(blockName),
	icon: 'admin-settings',
	category: 'common',
	keywords: [ __('hero') ],
	attributes: {
		backgroundType: { type: 'string', default: 'img' },
		img: { type: 'object', default: null },
		backgroundColor: { type: 'string', default: 'secondary' },
		heroSize: { type: 'string', default: 'half' },
		isDefaultStyle: { type: 'boolean', default: true },
		heading: { type: 'string', default: null },
		subHeading: { type: 'string', default: null },
		textColor: { type: 'string', default: 'white' },
		buttons: { type: 'array', default: [] },
		isDefaultBtnStyle: { type: 'boolean', default: false },
		dividerColor: { type: 'string', default: 'secondary' },
	},

	edit: (props) => (
		<Edit
			{...props}
			id={`${blockName}__editor`}
			className={`${props.className} ${env.NAME_SPACE}-theme-styles-entry`}
		/>
	),
	save: (props) => (
		<Save
			{...props}
			id={`${blockName}__render`}
			className={`${props.className} ${env.NAME_SPACE}-theme-styles-entry`}
		/>
	),
});
