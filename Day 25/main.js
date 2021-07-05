const buttons = document.querySelectorAll("button");
var i = 1;
buttons.forEach((button)=>{

    button.setAttribute('id',i + '');
    i++;
    button.addEventListener('click',() =>{
        alert(button.getAttribute('id'));
    })
});