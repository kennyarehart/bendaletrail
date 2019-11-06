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

	const [items, setItems] = useState([])
	const [panel, setPanel] = useState()

	useEffect(() => {
		axios.get('http://localhost:3000/api').then(
			response => {
				console.log('list received:', response.data)

				// setPanel(<InfoPanel places={list.features} />)

				const pool = response.data.features.map((item, i) => {
					const coor = item.coordinates
					return <Tag lat={coor[1]} lng={coor[0]} data={item} key={i} map={mapRef} />
				})
				setItems(pool)
			},
			error => {
				console.log(error)
			}
		)
	}, [])

	return (
		<div id="main">
			<div id="map-container">
				<GoogleMapReact
					ref={mapRef}
					bootstrapURLKeys={{ key: 'your key goes here' }}
					defaultCenter={defaultProps.center}
					defaultZoom={defaultProps.zoom}
					yesIWantToUseGoogleMapApiInternals>
					{items}
				</GoogleMapReact>
			</div>
			{panel}
		</div>
	)
}
