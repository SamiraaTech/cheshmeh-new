// googlemap valarian

google_api_map_init();
	function google_api_map_init(){
		var map;
		var coordData = new google.maps.LatLng(parseFloat(35.775452), parseFloat(51.420922,16)); 
		var marker;

		var markerIcon = { 
				url: "images/gmap_marker.png", 
				size: new google.maps.Size(42, 65), 
				origin: new google.maps.Point(0,0), 
				anchor: new google.maps.Point(21, 70) 
		};

		function initialize() { 
			var mapOptions = { 
				zoom: 16, 
				center: coordData, 
				scrollwheel: false, 
				// styles: styleArray 
			}

			var contentString = "<div></div>"; 
			var infowindow = new google.maps.InfoWindow({ 
				content: contentString, 
				maxWidth: 200 
			});
			 
			var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
			marker = new google.maps.Marker({ 
				map:map, 
				draggable:true, 
				position: coordData, 
				icon: markerIcon 
			});
			
		}
		google.maps.event.addDomListener(window, "load", initialize); 
	}