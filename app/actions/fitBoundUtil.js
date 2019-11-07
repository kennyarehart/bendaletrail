import { fitBounds } from 'google-map-react/utils'

export default function(list, apiPlace) {
	const lats = []
	const lngs = []
	list.filter(item => {
		if (item.placeId === apiPlace.placeId) {
			return !apiPlace.visited
		}
		return !item.visited
	}).forEach(item => {
		lats.push(item.lat)
		lngs.push(item.lng)
	})

	const defaultObj = {
		zoom: 14
	}
	if (lats.length === 1) {
		defaultObj.center = {
			lat: lats[0],
			lng: lngs[0]
		}
		return defaultObj
	} else if (lats.length === 0) {
		defaultObj.center = {
			lat: 44.056103,
			lng: -121.314648
		}
		return defaultObj
	}

	lats.sort((a, b) => a - b)
	lngs.sort((a, b) => a - b)

	const bounds = {
		nw: {
			lat: lats[0],
			lng: lngs[0]
		},
		se: {
			lat: lats[lats.length - 1],
			lng: lngs[lngs.length - 1]
		}
	}

	const size = {
		width: window.innerWidth,
		height: window.innerHeight
	}

	return fitBounds(bounds, size)
}
