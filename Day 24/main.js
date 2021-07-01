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
//
const btn = document.querySelector("button");
//btn.addEventListener('click',function(e){
//    console.log(e);
//});
//btn.addEventListener('click', function (e) {
//  console.log(e.target);
//});
btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});

//The target property sets or returns the value of the target attribute in a base element.

//The target attribute specifies the default target for all hyperlinks and forms in the page
// btn.addEventListener('click', function (e) {
//   e.target.style.background = 'blue';
// })

//queryselectorAll

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click',()=>{
        alert(button.id);
    });
});
//dblclick 	The event occurs when the user double-clicks on an element
//scroll 	The event occurs when an element's scrollbar is being scrolled
//keypress 	The event occurs when the user presses a key
//keydown 	The event occurs when the user is pressing a key
//keyup 	The event occurs when the user releases a key 	KeyboardEvent





