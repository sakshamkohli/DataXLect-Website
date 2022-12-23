/*                                          dropdown test                                            */
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 1000) {
	    $("nav").css("background" , );
	  }

	  else{
		  $("nav").css("background" , "#100F0F");
      $("nav").css('opacity', '0.8');
	  }
  })
})
/*                                          dropdown test                                            */




/*                                    automatic slide show on home posterimage                                        */

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
