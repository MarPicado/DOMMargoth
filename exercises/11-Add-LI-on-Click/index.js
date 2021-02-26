let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let place = document.querySelector("#myList");
	let newLI = document.createElement("li");
	newLI.innerHTML = "Fourth element";
	place.appendChild(newLI);
});
