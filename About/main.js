$(document).ready(function() {

  $('.icon').click(function() {
    $('.list').show('slow')
  });

  $('.closed').click(function() {
    $('.list').hide('slow')
  });
 
 /*animation counter - - - - experience */
 $('.exp').animationCounter({
   txt:"+",
   delay:350, 
   end:5
});

$('.projects').animationCounter({
   txt:"+",
   delay:50, 
   end:64
});

$('.happy').animationCounter({
   txt:"+",
   delay:50, 
   end:55
});
$('.trains').animationCounter({
   txt:"+",
   delay:400, 
   end:4
});

 /*animation counter - - - - Skills*/

$('.html').animationCounter({
   txt:"%",
   delay:40, 
   end:99
});

$('.javascript').animationCounter({
   txt:"%",
   delay:50, 
   end:80
});

$('.css').animationCounter({
   txt:"%",
   delay:40, 
   end:95
});

$('.bootstrap').animationCounter({
  txt: "%",
  delay: 50,
  end: 90
});
$('.jquery').animationCounter({
  txt: "%",
  delay: 50,
  end: 85
});
$('.angular').animationCounter({
  txt: "%",
  delay: 50,
  end: 70
});
$('.wordpress').animationCounter({
  txt: "%",
  delay: 50,
  end: 65
});
$('.git').animationCounter({
  txt: "%",
  delay: 50,
  end: 75
});


})

