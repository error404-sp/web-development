const divs = document.querySelectorAll('div');
divs.forEach(div =>{
    
    div.addEventListener('click',e=>{
        
        console.log(div.classList.value);         //this will cause bubbling
        e.stopPropagation(); //stops bubbling
        
    },{capture:true,
    once:true}); //this is event capturing i.e activate captures and the second one makes sure it can be clicked only once
    
});