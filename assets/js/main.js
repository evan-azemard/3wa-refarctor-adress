import { getPosition } from "./geolocation.js";
import { getAddressFromCoords } from "./adressApi.js";
import { showError,waitFor } from "./utils.js";

const geolocationButton = document.querySelector('button');
const paragraphAdress = document.querySelector('#location');

geolocationButton.addEventListener('click', () => {
	getPosition()
		.then(coords => getAddressFromCoords(coords))
		.then(address => {
			paragraphAdress.textContent = address;
		})
		.catch(error => {
			showError(error);

			waitFor(3).then(() => {
				hideError();
			});
		});
});