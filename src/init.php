<?php
// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

function react_blocks_assets()
{
	wp_register_style(
		'react-blocks-style-css',
		plugins_url('dist/blocks.style.build.css', dirname(__FILE__)),
		array(),
		null
	);

	wp_register_script(
		'react-blocks-js',
		plugins_url('dist/blocks.build.js', dirname(__FILE__)),
		array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'),
		null,
		true
	);

	wp_register_style(
		'react-blocks-editor-css',
		plugins_url('dist/blocks.editor.build.css', dirname(__FILE__)),
		array('wp-edit-blocks'),
		null
	);

	wp_localize_script(
		'react-blocks-js',
		'cgbGlobal',
		[
			'pluginDirPath' => plugin_dir_path(__DIR__),
			'pluginDirUrl'  => plugin_dir_url(__DIR__),
		]
	);

	register_block_type(
		'cjm/react-blocks',
		array(
			'style'         => 'react-blocks-style-css',
			'editor_script' => 'react-blocks-js',
			'editor_style'  => 'react-blocks-editor-css',
		)
	);
}

// Hook: Block assets.
add_action('init', 'react_blocks_assets');
