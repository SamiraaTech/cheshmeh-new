// google map

google_api_map_init();
	function google_api_map_init(){
		var map;
		var coordData = new google.maps.LatLng(parseFloat(35.708559), parseFloat(51.429892)); 
		var marker;

		var markerIcon = { 
				url: "images/marker_map-40x40.png", 
				size: new google.maps.Size(40, 40), 
				origin: new google.maps.Point(0,0), 
				anchor: new google.maps.Point(21, 40) 
		};

		function initialize() { 
			var mapOptions = { 
				zoom: 17, 
				center: coordData, 
				scrollwheel: true, 
				//styles: styleArray 
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
