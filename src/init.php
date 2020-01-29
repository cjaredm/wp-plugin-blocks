<?php

/**
 * Blocks Initializer
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

function mini_hero_gallery_assets()
{
	wp_register_style(
		'mini_hero_gallery-style-css',
		plugins_url('dist/blocks.style.build.css', dirname(__FILE__)),
		array('wp-editor'),
		null
	);

	wp_register_script(
		'mini_hero_gallery-js',
		plugins_url('/dist/blocks.build.js', dirname(__FILE__)),
		array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'),
		null,
		true
	);

	wp_register_style(
		'mini_hero_gallery-editor-css',
		plugins_url('dist/blocks.editor.build.css', dirname(__FILE__)),
		array('wp-edit-blocks'),
		null
	);

	wp_localize_script(
		'mini_hero_gallery-js',
		'cgbGlobal',
		[
			'pluginDirPath' => plugin_dir_path(__DIR__),
			'pluginDirUrl'  => plugin_dir_url(__DIR__),

		]
	);

	register_block_type(
		'jm-rblock/mini-hero-gallery',
		array(
			'style'         => 'mini_hero_gallery-style-css',
			'editor_script' => 'mini_hero_gallery-js',
			'editor_style'  => 'mini_hero_gallery-editor-css',
		)
	);
}

// Hook: Block assets.
add_action('init', 'mini_hero_gallery_assets');
