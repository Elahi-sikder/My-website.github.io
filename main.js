$(document).ready(function (){
  //Preloader
preloaderFadeOutTime = 800;
function hidePreloader() {
var preloader = $('.spinner-wrapper');
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader(); 
    /*fade in*/
  (function($) {
$.fn.pagefade = function(fadein, fadeout) {
        this.css("display", "none");
        this.fadeIn(fadein);
  function redirectPage() {
window.location.disabled= linkLocation;
  }
  return this;
};
}(jQuery)); 

  $('#nav-icon2').click(function() {
    $(this).toggleClass('open');
  });


$("html, body").pagefade(500, 500); 
/*... */
  
});

