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