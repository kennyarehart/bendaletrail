import React, { useRef } from 'react'
import GoogleMapReact from 'google-map-react'
import places from '../data/saved_places.json'
import Tag from './Tag'

// NOTE: google-maps-react/lib/loaders/google_map_loader.js -> line 6 must add libraries=places query

export default function SimpleMap() {
	const mapRef = useRef()

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
		// var infoWindow = new google.maps.InfoWindow()
		// console.log('infoWindow:', infoWindow)
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

	return (
		<div style={{ height: '100vh', width: '100%' }}>
			<GoogleMapReact
				ref={mapRef}
				bootstrapURLKeys={{ key: 'AIzaSyAWMDp_bow7yHNGxOw_wZY1TDPatKbsj6E' }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
				yesIWantToUseGoogleMapApiInternals
				// onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
			>
				{items}
			</GoogleMapReact>
		</div>
	)
}
