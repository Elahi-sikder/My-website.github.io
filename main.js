/*menu slider*/

$(document).ready(function (){
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

$("html, body").pagefade(1000, 1000); 
/*... */

  $('.icon').click(function (){
    $('.list').show('slow')
  });
  
  $('.closed').click(function (){
    $('.list').hide('slow')
  })
})

/*menu slider end*/



