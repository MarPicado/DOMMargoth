let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let boxHello = document.createElement("div");
	boxHello.innerHTML = "Hello World";
	boxHello.style.background = "yellow";
	document.body.appendChild(boxHello);
});

