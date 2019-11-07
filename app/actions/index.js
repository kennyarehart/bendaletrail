let service

function getService(map) {
	if (!service) {
		service = new google.maps.places.PlacesService(map.current.map_)
	}
	return service
}

export const getPlace = (map, data) => {
	return new Promise((resolve, reject) => {
		var service = getService(map)
		service.getDetails(
			{
				placeId: data.placeId,
				fields: ['name', 'opening_hours', 'permanently_closed', 'url']
			},
			(place, status) => {
				if (status == 'OK') {
					resolve([status, place])
				} else {
					reject(status)
				}
			}
		)
	})
}

//

export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'

export const FETCH_API = 'FETCH_API'
export const TOGGLE_VISIT = 'TOGGLE_VISIT'

//
import axios from 'axios'

const apiUrl = 'http://localhost:3000'

export const fetchPosts = ({ list, apikey }) => {
	return {
		type: FETCH_API,
		list,
		apikey
	}
}

export const fetchAllPosts = () => {
	console.log('actions: fetchAllPosts()')
	return dispatch => {
		return axios
			.get(`${apiUrl}/api`)
			.then(response => {
				console.log('response:', response)
				const check = fetchPosts(response.data)
				console.log('check:', check)
				dispatch(check)
			})
			.catch(error => {
				throw error
			})
	}
}

//

export const togglePlace = placeId => {
	return dispatch => {
		return axios
			.post(`${apiUrl}/toggle`, { placeId })
			.then(response => {
				dispatch(togglePlaceSuccess(response.data))
			})
			.catch(error => {
				throw error
			})
	}
}

export const togglePlaceSuccess = data => {
	return {
		type: TOGGLE_VISIT,
		payload: data
	}
}
