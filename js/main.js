'use strict';

$(function ()
{      

    // $('#program_course-modal').modal('show');
    $('.course_lesson-btn a').on('click', function(e){
        e.preventDefault();
        $('#program_course-modal').modal('show');
    });

    // $('#header-modal').modal('show');


    // $('.course_lesson-btn a').on('click', function(e){
    //     e.preventDefault();
    //     $('#program_course-modal').modal('show');
    // });

    $('.about_author-sertificat').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image'
	  // other options
	});

	$('.course_lesson-mather_mob .owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    dots: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});

	$('.course_lesson-baby_mob .owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    dots: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});
	$('.about_author-sertificat_mob .owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    dots: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});

    

});
