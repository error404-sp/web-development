//continue loop

//The continue statement works in a similar manner to break, but instead of breaking out of the loop entirely, it skips to the next iteration of the loop

//square generator
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click',function(){
  para.textContent = 'Output: ';
  let num = input.value;
  input.value = '';
  input.focus();
  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if(Math.floor(sqRoot) !== sqRoot) {
      continue;
    }

    para.textContent += i + ' ';
  }
});

const output = document.querySelector(".output");
output.innerHTML = '';
const button = document.querySelector(".btn");
button.addEventListener("click",function(){
  let i=10;
  while(i>=0){
    const paragh = document.createElement("p");
   
    if(i===10){
      paragh.textContent = "Countdown 10";
      
    }
    else if(i===0){
      paragh.textContent = "Blast off!";
      
    }
    else{
      paragh.textContent = i ;
      
    }
    output.appendChild(paragh);
    i--;
  }
  
});

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';
let admit = [];
let refuse = [];
for(let i=0;i<people.length;i++){
    if(people[i] === "Lola" || people[i] === "Phil"){
      refuse.push(people[i]);
    }
    else{
      admit.push(people[i]);
    }

}
admitted.textContent+=admit.toString() +".";
refused.textContent+=refuse.toString() + ".";