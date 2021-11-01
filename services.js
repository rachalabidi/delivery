$('.menu-toggle').click(function(){
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
 });
//  ***************************************
// JavaScript Document
// navigation code for horizontal gallery of related content in more details view

// JavaScript Document
// navigation code for horizontal gallery of related content in more details view

let showcase=document.getElementById("showcase"),
	left=document.getElementById("rc-left"),
	right=document.getElementById("rc-right"),
	liNum=showcase.getElementsByTagName("li").length,
	showcaseInner = document.querySelector("#showcase ul"),
	speed=1000,
	containerWidth=window.innerWidth,
	itemWidth=262,//image width plus the margin
	removeLettersRegEx=/[a-z]|[A-Z]/g,
	currentPos=showcaseInner.style.left;
	

var windowResize=function(){
	containerWidth=window.innerWidth-(46+20)*2-20;
	showcase.style.cssText="overflow:hidden; width:"+containerWidth+"px;";
	
	//somewhere in here there needs to be a check for if the window gets resized
	//beyond the edge of the displayed LIs....
};

windowResize();
window.addEventListener('resize', windowResize);

left.addEventListener("click",function(){
	//check if it's all the way right
	currentPos=showcaseInner.style.left;
	currentPos=currentPos.replace(removeLettersRegEx, "");
	if(currentPos<0){
		showcaseInner.style.left= Number(currentPos)+Number(itemWidth)+"px";
	}
});

right.addEventListener("click",function(){
	//check if it's all the way left
	currentPos=showcaseInner.style.left;
	currentPos=currentPos.replace(removeLettersRegEx, "");
	if((currentPos-containerWidth)>-(liNum*itemWidth)){
		showcaseInner.style.left = Number(currentPos)-Number(itemWidth)+"px";
	}
});

$(document).ready(function() {

	// Define flickity carousel
	var $gallery = $('.gallery').flickity({
	  imagesLoaded: true,
	  percentPosition: false,
	  wrapAround: true,
	  pageDots: false
	});
  
	var flkty = $gallery.data('flickity');
  
	$gallery.on('staticClick', function(event, pointer, cellElement, cellIndex) {
	  // Do nothing if cell was not clicked
	  if (!cellElement) {
		return;
	  }
	  // Find image url and use it to tell Fancybox what to target
	  var $zoomurl = $(cellElement).find('img').attr('src');
	  $.fancybox($zoomurl);
	});
  
  });

