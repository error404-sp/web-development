//Loops

const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = 'My cats are called ';
const para = document.querySelector('p');

for (let i = 0; i < cats.length; i++) {
  info += cats[i] + ', ';
}

para.textContent = info;

const output = document.querySelector(".output");
for(let i=10;i>=0;i--){
    const para = document.createElement("p");
    output.appendChild(para);
    if(i==10){
        para.textContent = "Countdown 10";
    }
    else if(i==0){
       para.textContent = "Blastoff";
    }
    else{
        para.textContent = i;
    }
}

//activity 3
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';
let adm = [];
let ref = [];
for(let i=0;i<people.length;i++){
    if(people[i]=="Lola" || people[i] == "Phil"){
         ref.push(people[i]);
    }
    else{
        adm.push(people[i]);
    }

}

refused.textContent += ref+".";
admitted.textContent += adm +".";

