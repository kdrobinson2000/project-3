


  function init(){

	var map = document.getElementById('map');
	 var myLocation= new google.maps.LatLng ([
      [ 41.879736253871656, -87.62368111519166],
      [ 41.8828540097483, -87.62347127286442],
      [ 41.88260412033522, -87.62336315937388]
    );
    for (i = 0; i < myLocation.length; i++) {  
     var marker = new google.maps.Marker({
        position: new google.maps.LatLng(myLocation[i][0], myLocation[i][1]),
        map: myMap
        
	var mapOptions = {
		center: myLocation,
		zoom: 20,
		
		
	};

	var myMap = new google.maps.Map(map, mapOptions);

	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		
		
	});

	

google.maps.event.addDomListener(window, 'load', init);



		
		
		
		
		
		
		