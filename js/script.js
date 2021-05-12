

//map


function initMap() {

var options={
center: {lat:41.8797, lng:-87.6237},
zoom: 15
}


 var map = new google.maps.Map(document.getElementById('map'), options)
var marker1 = new google.maps.Marker({
position:{lat:41.8806, lng:-87.6247},
map:map,
icon:"image/place1.png"
});

var marker2 = new google.maps.Marker({
position:{lat:41.8835, lng:-87.6257},
map:map,
icon:"image/place2.png"
});

var marker3 = new google.maps.Marker({
position:{lat:41.8827, lng:-87.6234},
map:map,
icon:"image/place3.png"
});


const detailwindow3= new google.maps.InfoWindow ({
	Content: '<h3>Park Grill - American Fare in Millennium Park</h3>'	
});	


//infowindow

marker1.addListener('mouseover', () =>{
	detailwindow1.open(map,marker1);
});	

const detailwindow2= new google.maps.InfoWindow ({
	Content: '<h3>Cloud Gate "The Bean" - Huge outdoor sculpture shaped like a bean & allowing for views from its many mirrored sides.</h3>'	
});	

marker2.addListener('mouseover', () =>{
	detailwindow2.open(map,marker2);
});	

const detailwindow1= new google.maps.InfoWindow ({
	Content: '<h3>The Art Institute of Chicago - Renowned art museum holding nearly 300,000 works from all over the world, spanning many centuries.</h3>'	
});	

marker3.addListener('mouseover', () =>{
	detailwindow3.open(map,marker3);
});

}
	
//slider

var $slide = $('.slide'),
    $slideGroup = $('.slide-group'),
    $bullet = $('.bullet');

var slidesTotal = ($slide.length - 1),
    current = 0,
    isAutoSliding = true;

$bullet.first().addClass('current');

var clickSlide = function() {
  //stop auto sliding
  window.clearInterval(autoSlide);
  isAutoSliding = false;

  var slideIndex = $bullet.index($(this));

  updateIndex(slideIndex);
};

var updateIndex = function(currentSlide) {
  if(isAutoSliding) {
    if(current === slidesTotal) {
      current = 0;
    } else {
      current++;
    }
  } else {
      current = currentSlide;
  }

  $bullet.removeClass('current');
  $bullet.eq(current).addClass('current');

  transition(current);
};

var transition = function(slidePosition) {
    $slideGroup.animate({
      'top': '-' + slidePosition + '00%'
    });
};

$bullet.on( 'click', clickSlide);

var autoSlide = window.setInterval(updateIndex, 2000);
	







		
		
		
		
		
		
		