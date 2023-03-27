function dateDisplay(){
	let date = new Date();

	let day = date.getUTCDate();
	let month = date.getUTCMonth();
	let year = date.getUTCFullYear();

	let hour = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds(); 

	const month_array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


	let date_holder = document.querySelector("#date");

	date_holder.innerHTML = `<span class="datetime-placeholder">Date:</span> ${month_array[month]} ${day}, ${year} <span class="datetime-placeholder">Time: </span>${hour}:${minutes}:${seconds}`;
}
