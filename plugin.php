<?php

/**
 * Plugin Name: iNetz Blocks
 * Plugin URI: https://bitbucket.inetz.com/projects/DEV/repos/inetz-wp-blocks/browse
 * Description: Wordpress page building block suite created by iNetz in React.
 * Author: Jared Mortenson
 * Author URI: https://inetz.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path(__FILE__) . 'src/init.php';
