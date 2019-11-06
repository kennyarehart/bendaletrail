// move serive out here soits not re-created each time

export const getPlace = (map, data) => {
	return new Promise((resolve, reject) => {
		var service = new google.maps.places.PlacesService(map.current.map_)
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
