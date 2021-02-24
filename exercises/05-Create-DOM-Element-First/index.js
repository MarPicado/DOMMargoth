var elem = document.createElement("H1");
elem.innerHTML = "Hello World";
document.querySelector("#myDiv").appendChild(elem);

//Your code here
// Don'change the code above
let parent = document.querySelector("body");
let newP = document.createElement("P");
//let t = document.createTextNode("Hello World"); se puede utilizar createTextNode o innerHTML para crear texto
newP.style.background = "yellow";
newP.innerHTML = "Hello World";
parent.appendChild(newP);
