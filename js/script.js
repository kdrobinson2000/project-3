


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

	var marker1 = '<img src="image/marker1.jpg" alt="#1 Site to See" width="300" height="30">';
	var marker2 = '<img src="image/marker2.jpg" alt="#1 Site to See" width="300" height="30">';
	var marker3 = '<img src="image/marker3.jpg" alt="#1 Site to See" width="300" height="30">';
	
	var location1= '41.87967013055939, -87.62373142891539';
	var location2= new google.maps.LatLng(41.8826870366143, -87.62343975521112);
	var location3= new google.maps.LatLng(41.882659304758576, -87.62330767610253);

	var infowindow = new google.maps.InfoWindow({
      content: location1
	  

  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});


}

google.maps.event.addDomListener(window, 'load', init);



		
		
		
		
		
		
		