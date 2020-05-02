 /****************************************HEADER_MENU_START************************************/
  
	$(window).scroll(function(){
		if ($(window).scrollTop() >= 130) {
		$('header').addClass('fixed');
		}
		else {
		$('header').removeClass('fixed');
		}
	});
 
/****************************************HEADER_MENU_END************************************/



/************************************************HEADER_ACTIVE_CLASS_START***************************/
$(document).ready(function() {
             $('.navbar  ul li a').click(function() {
                 if ($(this).hasClass('active12')) {
                     $(this).removeClass('active12');
                 } else {
                     $('li a.active12').removeClass('active12');
                     $(this).addClass('active12');
                 }
             });
         
         });
		 
/************************************************HEADER_ACTIVE_CLASS_END***************************/
  
/*****************************************************champions_box_slider_start****************************/
 $(document).ready(function(){
   $('.champions_box_slider').slick({
    infinite: true,
    autoplay: true,
    adaptiveHeight: true,
    speed: 300,

    slidesToShow:6,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
       
      }
    },
    {
      breakpoint: 600,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1
      }
    }

    ]
    });

      });


/*****************************************************champions_box_slider_End****************************/
 

/******************************************WOW_START****************************************/
 wow = new WOW(
      {
        animateClass: 'animated',
        offset:       5,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
      wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    }; 
/******************************************WOW_END*************************************/


/*****************************CONTACT_US_DROPDOWN_START*********************************************/
 
 

/*****************************CONTACT_US_DROPDOWN_END*********************************************/