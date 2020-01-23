/**
 * BLOCK: mini-hero-gallery
 */
const React = wp.element;
import {EditMiniHero} from './EditMiniHero';
import {SaveMiniHero} from './SaveMiniHero';
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
//  Import CSS.
import './editor.scss';
import './style.scss';

/**
 * Register: aa Gutenberg Block.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'jm-rblock/mini-hero-gallery', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('mini-hero-gallery'), // Block title.
	icon: 'admin-settings', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__('mini-hero-gallery'),
	],
	attributes: {
		header: {type: 'string', default: ''},
		images: {type: 'array', default: []},
	},

	/**
	 * @param {Object} props Props: {attributes: state, setAttributes: setState, className: wp-block-inetz-mini-hero-gallery}
	 * @returns {Mixed} JSX Component.
	 */
	edit: (props) => {
		return <EditMiniHero {...props} />;
	},

	/**
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: (props) => {
		return (
			<SaveMiniHero {...props} />
		);
	},
});
