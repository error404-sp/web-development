//Programming loops are all to do with doing the same thing over and over again, which is termed iteration in programming speak

//LOOPS

//Loop has a counter(that is initialised at start of loop),a condition(that determines till when the loop will run), and a iterator(that increments the counter)

//for loop

//syntax
//for (initializer; condition; final-expression) {
  // code to run
//}

//const para = document.querySelector("p");
let info = "My cats are namely ";
let cats = ["Billy","Meow","Sweety"];
for(let i=0;i<cats.length;i++){
    info+=cats[i]+",";
}
//para.textContent = info;




//Exiting loops with break

//If you want to exit a loop before all the iterations have been completed, you can use the break statement.

//a program to find contact by name

const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];//given
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener('click',function(){
  let searchName = input.value.toLowerCase();
  input.value = "";
  input.focus();
  for(let i=0;i<contacts.length;i++){
    let splitContact = contacts[i].split(":");
    if(splitContact[0].toLowerCase() === searchName){
      para.textContent = `${splitContact[0]}'s contact number is ${splitContact[1]}.`
      break;
    }
    else if(i=== contacts.length-1){
      para.textContent = `Contact not found`
    }

    }

  }
);

//Skipping iterations with continue

//The continue statement works in a similar manner to break, but instead of breaking out of the loop entirely, it skips to the next iteration of the loop

let num = input.value;

for (let i = 1; i <= num; i++) {
  let sqRoot = Math.sqrt(i);
  if (Math.floor(sqRoot) !== sqRoot) {
    continue;
  }

  para.textContent += i + ' ';
}



//while and do ... while

//initializer
//while (condition) {
  // code to run

  //final-expression
//}

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }

  i++;
}

//initializer
//do {
  // code to run

  //final-expression
//} while (condition)


