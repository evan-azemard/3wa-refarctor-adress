const paragraphError = document.querySelector('#error');

export const waitFor = (time) => {
	return new Promise((resolve,reject) => {
		resolve(setTimeout(() => {

		},time * 1000));
	})
}

export const showError = (error) => {
	console.log('erreur: ',error);
	paragraphError.innerHTML = '';
	paragraphError.textContent = error;
}

export const hideError = () => {
	paragraphError.innerHTML = '';
}