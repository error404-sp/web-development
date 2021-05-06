let carNames = ["BMW","Volvo","i10"];
document.getElementById("demo").innerHTML = carNames; //BMW,Volvo,i10

//Arrays are a special type of objects. 
//The typeof operator in JavaScript returns "object" for arrays.


// ARRAYS FUNCTIONS AND METHODS

//length method
console.log(carNames.length); //3

//Accessing the First and last Array Element
console.log(carNames[0]);
console.log(carNames[carNames.length-1]);

// Looping Array Elements

text="<ul>"
for(let i=0;i<carNames.length;i++){
    text+="<li>"+ carNames[i] + "</li>";
}
text+="</ul>";
console.log(text); 

//forEach Function(instead of using loop)

text = "<ul>";
carNames.forEach(myFunction);
text += "</ul>";
document.getElementById("demo").innerHTML = text;

function myFunction(value) {
  text += "<li>" + value + "</li>";
} 

//Adding elements
carNames.push("Audi");
console.log(carNames);

carNames[carNames.length] = "Maruti Suzuki";
console.log(carNames);

//In JavaScript, arrays use numbered indexes.  

//In JavaScript, objects use named indexes.


//Converting Arrays to Strings
// To convert array into string use .toString()

console.log(carNames.toString());  //BMW,Volvo,i10,Audi,Maruti Suzuki

// converting array elements into string with a specifier using join()

console.log(carNames.join("."));  //BMW.Volvo.i10.Audi.Maruti Suzuki

//Popping and Pushing
carNames.push("tu pagal aahe");  //The push() method returns the new array length:
console.log(carNames); 

carNames.pop();
console.log(carNames);


//shifting elements
carNames.shift(); //["Volvo", "i10", "Audi", "Maruti Suzuki"]
console.log(carNames);

carNames.unshift("i20") 
console.log(carNames);  //["i20", "Volvo", "i10", "Audi", "Maruti Suzuki"]

//Changing Elements

carNames[0] = "hyundai"
console.log(carNames); //"hyundai", "Volvo", "i10", "Audi", "Maruti Suzuki"]

//Deleting elements
delete carNames[0];
console.log(carNames); //[empty, "Volvo", "i10", "Audi", "Maruti Suzuki"]

//splicing an array

//adding elements
carNames.splice(2,0,"shreyasi");
console.log(carNames); //[empty, "Volvo", "shreyasi", "i10", "Audi", "Maruti Suzuki"]

//removing elements
carNames.splice(0,1);
console.log(carNames) //["Volvo", "shreyasi", "i10", "Audi", "Maruti Suzuki"]

//Concat()
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);  
console.log(myChildren); //["Cecilie", "Lone", "Emil", "Tobias", "Linus"]

//The concat() method does not change the existing arrays. It always returns a new array


//Slicing an Array

//The slice() method slices out a piece of an array into a new array.
//The slice() method can take two arguments like slice(1, 3).
//The method then selects elements from the start argument, and up to (but not including) the end argument.
console.log(carNames.slice(0,3)); //All JavaScript objects have a toString() method.

//JavaScript automatically converts an array to a comma separated string when a primitive value is expected.

//This is always the case when you try to output an array.


