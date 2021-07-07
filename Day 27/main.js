const divs = document.querySelectorAll('div');
divs.forEach(div =>{
    capture:true;
    div.addEventListener('click',e=>{
        
        console.log(div.classList.value); 
        //this will cause bubbling
    });
});