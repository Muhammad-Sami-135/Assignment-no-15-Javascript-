//Chapter 10 (if statements)

//q1.

var city = "Karachi";
if(city === "Karachi"){
    console.log(city+"is the city of Light");
}

//q2.

var x=10;
var y=10;
var z= prompt("Please enter the value of z");

if(x ===y){
    console.log(z);    
}

//q3.

var zipcode= "10010";
if(zipcode ==="10010"){
    alert("Karachi");
}
else{
    alert("please write correct code");
}

//q4.

var x =1;
if(x === 1){
    x = 2;

}




            // Chapter 11 (Comparison Operators)

//q1.  

var a =10;
var b =20;
if(a!==b){
    console.log(true);
}
else{
    console.log(false);
}

//q2.

var a= 10;
var b= 5;
if(a>=b){
    console.log("a is greater or equal than b");
}
else{
    console.log("a is less than b")
}

//q3.

var a =5;

if(a!==10){
    a= 20;
    console.log(a);
}

 //q4.

var num1= 20;
var num2= 30;
if(num1!==num2){
    alert("Congratulations");
}

//q5.

var firstName= prompt("Enter your firstName");
var anotherName = "Sidra";
if(firstName!==anotherName){
    alert("No match");
}




           // Chapter 12 (if…else and else if statements)

//q1. 

var a= 10;
var b= 5;
if(a>=b){
    alert("a is greater or equal than b");
}
else{
    alert("a is less than b")
}

//q2.

var totalMarks =Number(prompt("Enter your totalMarks"));
var obtainedMarks =Number(prompt("Enter your obtainedMarks"));
var percentage= (obtainedMarks/totalMarks)*100;
var grade;

if(percentage>=90){
    grade="A+";
}
else if(percentage>=79){
    grade="A"
}
else if(percentage>=70){
    grade="B"
}
else if(percentage>=60){
    grade="C"
}
else if(percentage>=50){
    grade="D"
}
else if(percentage>=40){
    grade="C"
}
else{
    grade="F"
}
alert(` Your grade is ${grade}`);

//q3.

var a= 20;
if (a === 10) {
    alert("a is 10"); 
}
else{
    alert(The correct value of a is ${a});
}

//q4.

var city= prompt("Enter your city name");
if(city==="Karachi"){
    alert("This is Karachi");
}
else if(city==="Lahore"){
    alert("This is Lahore");
}
else{
    alert("This city is neither Karachi nor Lahore");
}    





                // chapter 9-11 pdf USER INPUT & CONDITIONAL STATEMENT

//q1.

var city= prompt("Enter your city");
if(city==="Karachi"){
  alert("Welcome to city of lights");
}
else{
  alert(Wellcome to ${city});
}



//q2.

var gender = prompt("Enter your gender");
var message;

if (gender === "male") {
  message = "Good Morning Sir.";
} 

else if (gender === "female") {
  message = "Good Morning Ma’am.";
} 

else {
  alert("incorrect input!!");
}

alert(message);

//q3.

var signalColors= prompt("Enter the color of traffic signal(Red,Yellow,Green):");
if(signalColors==="Red"){
  alert("Must Stop");
}
else if(signalColors==="Yellow"){
  alert("Ready to move");
}
else if(signalColors==="Green"){
  alert("Move now");
}
else{
  alert("Invalid color! please enter Red,Yellow,Green. ");
}

//q4.

var fuel=prompt("Enter your remaining fuel");
if(fuel<"0.25liters"){
  alert("Please refill the fuel in your car");
}
else{
  alert("fuel level is sufficient");
}