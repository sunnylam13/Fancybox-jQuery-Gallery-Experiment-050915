jQuery(document).ready(function($) {

//////////////////////////////////////////////////
// GLOBAL VARIABLES


//////////////////////////////////////////////////
// FUNCTIONS

function previewGalleryThumb4 () {
	$('.preview a').on('click', function(event) {
		event.preventDefault();
		$('.preview a').on('click',function(e){
			var src = $(this).attr('data-full');
		   	console.log('The clicked link to use is %s',src);
			$('img.previewFull').attr('src',src);
			console.log('The thumbnail was clicked and the large image should change.');
		});
	});
}

function enableFancyBox1 () {
	$(".fancybox").fancybox();
	console.log('Fancybox initialized in JS.');
}

function enableFancyBox2 () {
	$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.png'],a[href$='.gif']").attr('rel', 'gallery').fancybox();
	console.log('Fancybox initialized in JS.');
}

function clickTest1 () {
	$('.preview a').click(function(event) {
		console.log('Clicked and working.');
	});
}


//////////////////////////////////////////////////
// EXECUTION CODE

previewGalleryThumb4();
enableFancyBox1();
// enableFancyBox2();
// clickTest1();

//////////////////////////////////////////////////

});  //end doc.onready function
