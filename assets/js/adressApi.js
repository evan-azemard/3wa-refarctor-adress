export const getAddressFromCoords = (coords, url) => {
	return new Promise((resolve, reject) => {
		const longitude = coords.longitude;
		const latitude = coords.latitude;
		/*const latitude = '056515110515161151651888884848484884';*/
		const url = "https://api-adresse.data.gouv.fr/reverse/?"

		fetch(`${url}lon=${longitude}&lat=${latitude}`)
			.then(response => response.json())
			.catch(error => {
				reject(error)
			})
			.then(response => {
				if(response.features.length > 0){
					resolve(response.features[0].properties.label);
				}else{
					console.log('aucune adresse trouvé');
				}
			}).catch(error => {
				reject(error);
		})
	}, error => {
		console.log(error);
		reject(error);
	})
}

