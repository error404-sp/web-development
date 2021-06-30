const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);
//
const redText =document.createElement("p");
redText.style.color = "red";
redText.textContent = "Hey I’m red!";
container.appendChild(redText);
//
const blueText = document.createElement("h4");
blueText.style.color = "blue";
blueText.textContent = "I’m a blue h3!";
container.appendChild(blueText);
//
const divElement = document.createElement("div");
divElement.style.cssText = "border:black 1px solid;background:pink";
const h1 = document.createElement("h1");
const p = document.createElement("p");
h1.textContent = "I’m in a div";
p.textContent = "ME TOO!";
divElement.appendChild(h1);
divElement.appendChild(p);
container.appendChild(divElement);

