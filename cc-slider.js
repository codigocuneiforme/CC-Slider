
jQuery(document).ready(function( $ ) {

	// si existe un cc-slider-slider en la página
	if(jQuery(".cc-slider").length > 0) {
/*		
		var cc_slider_images = ['uno.png', 
								'dos.jpg', 					
								'tres.gif'
								];
		
*/
		var cc_slider_images = ['diseno-web_no-margin.jpg', 
								'diseno-grafico_no-margin.jpg', 				
								'fotografia_no-margin.jpg'
								];

		var cc_slider_titles = ['Desarrollo web', 
								'Diseño gráfico', 
								'Fotografía'
								];	

		var cc_read_more_text = 'Leer más';

		var cc_read_more_target = ['#', 
								'#', 
								'#'
								];		

		
		/* by_width:
		1.different-widths
		2.equal-widths
		3.specific-size
		*/
		var by_width = 'equal-widths';

		var specific_width = 800;
		var specific_height = 250;

		var begin = 5000;
		var interval = 3000;

		var _maxWidth = 0 ;
		var _maxHeight = 0;
		var totalDiapos = cc_slider_images.length;


		jQuery.each( cc_slider_images, function( index, value ){
			var each_diapo_img_id = '#cc-slider-diapo-img' + index ;
			var _source = images_url + value ;
			var each_diapo_img = jQuery('<img/>', {
			    'class' : 'cc-slider-diapo-img',
			    'id' : each_diapo_img_id,
			    'src' : _source,					    
			});
//cambios

			var each_diapo = jQuery( '<div>' , {
				'class' : 'cc-slider-diapo',
				'data-index' : index - 1
			});

			jQuery(each_diapo).append(each_diapo_img);

			var each_cc_title = jQuery( '<h2>' );
			jQuery(each_cc_title).text(cc_slider_titles[index]);

			var each_cc_button = jQuery( '<a>', { 'class' : 'cc-slider-read-more' } );


			var cc_button_span = jQuery('<span>');
			jQuery(cc_button_span).text(cc_read_more_text);
			jQuery(each_cc_button).append(cc_button_span);			

			jQuery(each_diapo).append(each_cc_title, each_cc_button);

			jQuery('.cc-slider-container').append(each_diapo);		

			document.getElementById(each_diapo_img_id).onload = function(){

				if (by_width=='different-widths' ) {
					if ( this.width > _maxWidth )
						_maxWidth = this.width;
					if ( this.height > _maxHeight )
						_maxHeight = this.height;

					if ( index == totalDiapos - 1 ){
						jQuery('.cc-slider-container').css({ 'width' : _maxWidth,
															 'height' : _maxHeight
						})
						for (var i = 0; i < totalDiapos; i++) {
							jQuery('.cc-slider-diapo').eq(i).css({ 'left':_maxWidth * (i-1), 
															'width' : _maxWidth,
															'height' : _maxHeight
							});
						}	
					}
				}

				if ( (by_width == 'equal-widths' || by_width == 'specific-size' ) ) {
					
					if( index == 0 ) {

						if (by_width == 'equal-widths') {
							_maxWidth = this.width;	
							_maxHeight = this.height;
							jQuery('.cc-slider-container').css({ 'width' : _maxWidth,
																 'height' : _maxHeight
							});							
						}

						if ( by_width == 'specific-size') {
							_maxWidth = specific_width;
							_maxHeight = specific_height;
						}


						jQuery('.cc-slider-diapo').css({ 
														'width' : _maxWidth,
														'height' : _maxHeight,
						});
					}
					jQuery('.cc-slider-diapo').eq(index).css({ 'left' : _maxWidth * (index-1) });					
				}	

				if ( index == totalDiapos-1 )
					jQuery('.cc-slider-container').css({ 
						'width' : _maxWidth,
						'height' : _maxHeight,
						'visibility' : 'visible' 	
					});														
			}

		});				

		window.setTimeout(function(){
			run_one_image();
			window.setTimeout(function(){
				window.setInterval(run_one_image, interval);
			}, interval);			
		}, begin );

	}

 	function run_one_image(){

 		jQuery.each(jQuery('.cc-slider-diapo'), function() {
 			var dataIndex = parseInt( jQuery(this).attr('data-index') ); 

	 		dataIndex++;

	 		if ( dataIndex == -1 )
	 			if ( jQuery( $(this).hasClass('last-diapo') ) )
	 				jQuery( this ).removeClass('last-diapo');
	 		
	 		if ( dataIndex == totalDiapos - 1 ) {
	 			jQuery(this).addClass('last-diapo');
	 			jQuery(this).attr('data-index', -1); 
	 		}
	 		else {
	 			jQuery(this).removeClass('last-diapo');
	 			jQuery(this).attr('data-index', dataIndex); 	
	 		}

	 		jQuery(this).css( 'left', _maxWidth*dataIndex );

	 		jQuery('.cc-slider-diapo[data-index=-1]').attr('data-index', -1).css('left',-_maxWidth);

	 	}); 	

	}
	 			

});