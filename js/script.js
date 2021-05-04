


 function init(){
	//alert('it works');
	var el = document.getElementById('map');
	var myLocation = new google.maps.LatLng(41.87980015887943, -87.62329487707916);
	var mapOptions = {
		center: myLocation,
		zoom: 20,
		
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		//animation: google.maps.Animation.BOUNCE,
		
	});

	var contentString = '<img src="image/marker1.jpg" alt="#1 Site to See" width="300" height="30">';
	var marker1= '41.87967013055939, -87.62373142891539';
	var marker2= new google.maps.LatLng(41.8826870366143, -87.62343975521112);
	var marker3= new google.maps.LatLng(41.882659304758576, -87.62330767610253);

	var infowindow = new google.maps.InfoWindow({
      content: contentString
	  

  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});


}

google.maps.event.addDomListener(window, 'load', init);



		
		
		
		
		
		
		