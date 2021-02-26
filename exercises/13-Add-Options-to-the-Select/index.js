window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	let countryList = document.querySelector("#mySelect");
	countries.forEach(country => {
		let newOption = document.createElement("option");
		newOption.innerHTML = country;
		countryList.appendChild(newOption);
	});
	document.addEventListener("change", () => {
		let selectedOption = countryList.value;
		alert(selectedOption);
	});
};
