/*Problem: Create a simple lightbox*/
/*Solution: when click to an image it reveals the image and darken the background -- light box*/
var $overlay = $('<div id="overlay"></div>');
var $img = $('<img>');
var $caption = $('<p></p>');

//add image to overlay
$overlay.append($img);
$overlay.append($caption);
$('body').append($overlay);
//when the picture link is clicked update the img with the src image & caption 
$('a').click(function(event){
  event.preventDefault();
  var src = $(this).attr('href');
  $img.attr('src',src);
  $overlay.show();
  var caption = $(this).children('img').attr('alt')
  $caption.text(caption);
})

$overlay.click(function(){
  $(this).hide();
})

