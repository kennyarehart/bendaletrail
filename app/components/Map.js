import React, { useRef } from 'react'
import GoogleMapReact from 'google-map-react'
import Tag from './Tag'

// NOTE: google-maps-react/lib/loaders/google_map_loader.js -> line 6 must add libraries=places query

export default function Map({ list, apikey }) {
	const mapRef = useRef()

	var defaultProps = {
		center: {
			lat: 44.056103,
			lng: -121.314648
		},
		zoom: 14
	}

	return (
		<div id="map-container">
			<GoogleMapReact
				ref={mapRef}
				bootstrapURLKeys={{ key: apikey }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
				yesIWantToUseGoogleMapApiInternals>
				{list.map((item, i) => (
					<Tag lat={item.lat} lng={item.lng} data={item} key={i} map={mapRef} />
				))}
			</GoogleMapReact>
		</div>
	)
}
