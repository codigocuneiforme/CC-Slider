<?php

/*
 * Plugin Name: CC Slider
 * Plugin URI: 
 * Description: Un sencillo slider responsive.
 * Version: 1.0.0
 * Author: Jorge Martí
 * Author URI: 
 * Requires at least: 
 * Tested up to: 
 *
 * Text Domain: cc-slider
 * Domain Path: /languages/
 */

/** If this file is called directly, abort. */
if ( !defined( 'ABSPATH' ) ) {
	die;
}

$id_pages_with_cc_slider = array( 177,
								685,
							    );

function add_cc_slider_scripts() {
	global $post, $id_pages_with_cc_slider;
	$post_id = $post->ID;

	if ( in_array( $post_id, $id_pages_with_cc_slider ) ) {	
		/* Aquí añado los scripts y styles para el front-end */
		wp_enqueue_style( 'cc-slider-style', plugin_dir_url( __FILE__ ) . 'cc-slider.css');
		/* Defino url carpeta imágenes: */
		echo '<script>images_url="' . plugin_dir_url( __FILE__ ) . 'images/";</script>';
		wp_enqueue_script( 'cc-slider-script', plugin_dir_url( __FILE__ ) . 'cc-slider.js', array('jquery'));
	}

}
add_action("wp_enqueue_scripts", "add_cc_slider_scripts");


/* Añadir a la página para que funcione el slider:

<div class="cc-slider">
	<div class="cc-slider-wrap">
		<div class="cc-slider-container">
		</div>	
	</div>
</div>
*/
?>
