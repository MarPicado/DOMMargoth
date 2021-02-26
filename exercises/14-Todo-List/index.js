// Your code here
let deleteItem = document.querySelector("#myList");
deleteItem.addEventListener("click", function(e) {
	//el "e" es un parametro de entrada, es la posicion actual del objeto cuando le haces click
	this.removeChild(e.target);
});

let addItem = document.querySelector("#addToDo");
addItem.addEventListener("keypress", function(e) {
	if (e.key === "Enter") {
		let newWord = document.createElement("li");
		newWord.innerHTML = "<span><i class='fa fa-trash'></i></span>" + " " + e.currentTarget.value;
		deleteItem.appendChild(newWord);
		addItem.value = "";
	}
});
