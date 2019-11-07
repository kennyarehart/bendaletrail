import React, { useRef } from 'react'
import GoogleMapReact from 'google-map-react'
import Tag from './Tag'
import fitBoundUtil from '../actions/fitBoundUtil'

export default function Map({ list, apikey, apiPlace }) {
	const mapRef = useRef()

	const defaultProps = fitBoundUtil(list, apiPlace)

	return (
		<div id="map-container">
			<GoogleMapReact
				ref={mapRef}
				bootstrapURLKeys={{ key: apikey }}
				defaultCenter={defaultProps.center}
				center={defaultProps.center}
				defaultZoom={defaultProps.zoom}
				zoom={defaultProps.zoom}
				yesIWantToUseGoogleMapApiInternals>
				{list.map((item, i) => (
					<Tag lat={item.lat} lng={item.lng} data={item} key={i} map={mapRef} apiPlace={apiPlace} />
				))}
			</GoogleMapReact>
		</div>
	)
}
