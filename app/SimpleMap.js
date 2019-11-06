import React, { useRef, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import places from './saved_places.json'
import Tag from './Tag'

function SimpleMap() {
	const mapRef = useRef()

	console.log(places)
	// let lat = []
	// let lng = []
	// places.features.forEach(item => {
	// 	const c = item.properties.location.coordinates
	// 	lat.push(c[1])
	// 	lng.push(c[0])
	// })

	// lat.sort((a, b) => a - b)
	// lng.sort((a, b) => a - b)

	// lat = [lat[0], lat[lat.length - 1]]
	// lng = [lng[0], lng[lng.length - 1]]

	// console.log('------------')
	// console.log(lat)
	// console.log(lng)
	// console.log('------------')

	var defaultProps = {
		center: {
			lat: 44.056103,
			lng: -121.314648
		},
		zoom: 14
	}

	const items = places.features.map((item, i) => {
		const coor = item.coordinates
		return <Tag lat={coor[1]} lng={coor[0]} data={item} key={i} map={mapRef} />
	})

	const handleApiLoaded = (map, maps) => {
		// use map and maps objects
		console.log(map, maps)

		// var service = new maps.places.PlacesService(map)
		// places.features.forEach((item, i) => {
		// 	setTimeout(() => {
		// 		service.getDetails(
		// 			{
		// 				placeId: item.placeId,
		// 				fields: ['name', 'formatted_address', 'place_id', 'geometry', 'opening_hours', 'permanently_closed', 'types']
		// 			},
		// 			function(place, status) {
		// 				console.log(status, place, item)
		// 			}
		// 		)
		// 	}, i * 1000)
		// })

		// var infoWindow = new google.maps.InfoWindow()
		// console.log('infoWindow:', infoWindow, this)
		// infoWindow.setContent(
		// 	'<div><strong>' +
		// 		'place.name' +
		// 		'</strong><br>' +
		// 		'Place ID: ' +
		// 		'place.place_id' +
		// 		'<br>' +
		// 		'place.formatted_address' +
		// 		'</div>'
		// )
		// infoWindow.open(map, this)
	}
	// NOTE: google-maps-react/lib/loaders/google_map_loader.js -> line 6 must add libraries=places query

	// 	var map = new google.maps.Map(document.getElementById('map'), defaultProps)

	// 	var service = new google.maps.places.PlacesService(map)
	// 	service.getDetails(request, function(place, status) {
	// 		console.log(status)
	// 		console.log(place)
	// 		// if (status === google.maps.places.PlacesServiceStatus.OK) {
	// 		// 	var marker = new google.maps.Marker({
	// 		// 		map: map,
	// 		// 		position: place.geometry.location
	// 		// 	})
	// 		// 	google.maps.event.addListener(marker, 'click', function() {
	// 		// 		infowindow.setContent(
	// 		// 			'<div><strong>' +
	// 		// 				place.name +
	// 		// 				'</strong><br>' +
	// 		// 				'Place ID: ' +
	// 		// 				place.place_id +
	// 		// 				'<br>' +
	// 		// 				place.formatted_address +
	// 		// 				'</div>'
	// 		// 		)
	// 		// 		infowindow.open(map, this)
	// 		// 	})
	// 		// }
	// 	})
	// 	//
	// })

	return (
		<div style={{ height: '100vh', width: '100%' }}>
			<GoogleMapReact
				ref={mapRef}
				bootstrapURLKeys={{ key: 'AIzaSyAWMDp_bow7yHNGxOw_wZY1TDPatKbsj6E' }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
				yesIWantToUseGoogleMapApiInternals
				onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}>
				{items}
			</GoogleMapReact>
		</div>
	)
}

export default SimpleMap
