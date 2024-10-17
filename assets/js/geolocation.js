export const getPosition = () => {
	return new Promise((resolve,reject) => {
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition((position) => {
				resolve(position.coords);
			})
		}
	}, error =>
	{
		console.log(reject);
		reject(error);
	})
}