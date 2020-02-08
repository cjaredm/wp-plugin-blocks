<?php

/**
 * Plugin Name: CJM Blocks
 * Plugin URI: https://github.com/cjaredm/wp-plugin-blocks
 * Description: Wordpress page building block suite created by CJM in React.
 * Author: Jared Mortenson
 * Author URI: https://cjaredm.com/
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
