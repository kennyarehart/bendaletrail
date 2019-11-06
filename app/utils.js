export const getPlace = (map, title) => {
	return new Promise((resolve, reject) => {
		var service = new google.maps.places.PlacesService(map.current.map_)
		service.findPlaceFromQuery(
			{
				query: title,
				fields: ['types', 'formatted_address', 'geometry', 'plus_code', 'name', 'opening_hours', 'permanently_closed', 'types']
			},
			(place, status) => {
				// console.log(status, place)
				resolve([status, place])
			}
		)
	})
}
