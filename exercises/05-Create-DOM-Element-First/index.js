var elem = document.createElement("H1");
elem.innerHTML = "Hello World";
document.querySelector("#myDiv").appendChild(elem);

//Your code here
// Don'change the code above
let newP = document.createElement("P");
let t = document.createTextNode("Hello World");
newP.style.background = "yellow";
newP.appendChild(t);
