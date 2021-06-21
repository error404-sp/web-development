const button = document.getElementById("machine-btn");
const description = document.getElementById("machine-desc");
button.addEventListener('click',updateDescription);
function updateDescription() {
    if(button.textContent==="Start Machine"){
        button.textContent = "Stop Machine";
        description.textContent = "Machine has started";
    }
    else{
        button.textContent = "Start Machine";
        description.textContent = "Machine is stopped";
    }
}

const welcomeButton = document.getElementById("welcome-btn");
welcomeButton.onclick = function(){
    let name = prompt("What is your name");
    alert(`Hey,${name},How are you?`);
}

let stringForExample = "Hey ,whats up . I am learning Javascript ";
console.log(stringForExample.length); //41
console.log(stringForExample.indexOf("Hey")); //0
console.log(stringForExample.lastIndexOf("a")); //33
console.log(stringForExample.indexOf("a",10)); //18
console.log(stringForExample.lastIndexOf("a",10)); //7
console.log(stringForExample.search("Hey")); //0
console.log(stringForExample.slice(30,40)); //Javascript
console.log(stringForExample.substring(30,40)); //Javascript
console.log(stringForExample.substr(30,10)); //Javascript
console.log(stringForExample.replace("Javascript","React")); //Hey ,whats up . I am learning React
console.log(stringForExample.charAt(0)); //H
console.log(stringForExample.trim().length); //40
console.log(stringForExample.toLowerCase()); //hey ,whats up . i am learning javascript
console.log(stringForExample.split(" "));

function showMessage(from,text="no text given"){ //this is a default parameter
    console.log(from+":"+text);
}
showMessage("Ann");

function ask(question,yes,no)