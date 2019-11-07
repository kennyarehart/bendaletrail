import React, { useRef, useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import Tag from './Tag'
import InfoPanel from './InfoPanel'
import axios from 'axios'

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

	const [panel, setPanel] = useState()
	const [data, setData] = useState({ list: [] })

	useEffect(() => {
		axios.get('http://localhost:3000/api').then(
			response => {
				console.log('list received:', response.data)
				setData(response.data)
			},
			error => {
				console.log(error)
			}
		)
	}, [])

	return (
		<div id="main">
			<div id="map-container">
				{data.apikey ? (
					<GoogleMapReact
						ref={mapRef}
						bootstrapURLKeys={{ key: data.apikey }}
						defaultCenter={defaultProps.center}
						defaultZoom={defaultProps.zoom}
						yesIWantToUseGoogleMapApiInternals>
						{data.list.map((item, i) => (
							<Tag lat={item.coordinates[1]} lng={item.coordinates[0]} data={item} key={i} map={mapRef} />
						))}
					</GoogleMapReact>
				) : (
					<div />
				)}
			</div>
			{panel}
		</div>
	)
}
