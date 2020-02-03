import $ from 'jquery';

export default function () {

    // console.log("imageHover");

    $('figure.card-figure').each(function() {
    	if ( $(this).find('img.card-image').length >= 2 ) {
        $(this).addClass('multiple-images');
    	}
    });



    $('figure.listItem-figure').each(function() {
    	if ( $(this).find('img.listItem-image').length >= 2 ) {
        $(this).addClass('multiple-images');
    	}
    });
}
