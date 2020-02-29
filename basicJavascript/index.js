/*
document.write("Iqram khan</br>"); document.write("This is comment</br>");
//document.write("iqram");
*/


//variable
/*
var name="Iqram khan"
document.write(name+'</br>');
var num=123;
document.write(num+'</br>');
var bol=false;
document.write(bol+"</br>");
var name,age;

//var age;

name="Iqram";
age=22;
document.write(name+"</br>"+age);
*/


//String Concatenation
/*
document.write("Iqram"+" khan"+"</br>");
var firstName = "Akram";
var lastName = " khan"
document.write(firstName+lastName+"</br>");
document.write("My name is : "+firstName+"</br>");
document.write("My name is : "+firstName+" khan");
*/

//Library Function

//var text=prompt("Enter a text : ");
//document.write("Number of character = "+text.length);
/*
var text1 = "Bangladesh";
var text2 = " is a beautiful country";
document.write(text1.concat(text2)+"</br>"); 
var text = "Bangladesh";
document.write(text.charAt(5)+"</br>");
document.write(text.toUpperCase()+"</br>");
document.write(text.toLowerCase()+"</br>");
document.write(text.slice(0,6));
*/


/*
//calculator
var num1=prompt("Enter First Number: ");//by prompt we take string value.

//for converting string to number
num1 = parseInt(num1,10);

var num2=prompt("Enter Second Number:");

num2 = parseInt(num2,10);

var sum,sub;

sum = num1 + num2;
document.write("Sum is: "+sum+"</br>");

sub = num1 - num2;
document.write("Sub is: "+sub+"</br>");
*/

/*
//Area of various Shape
var base = parseFloat(prompt("Enter base : "));
var height = parseFloat(prompt("Enter height : "));

var Area= (base * height)/2;

document.write("Area of Triangle = "+ Area);
*/
/*
//Temperature Converter
var Fahrenheit = parseFloat(prompt("Enter Temperature in Fahrenheit: "));

var celcias = (Fahrenheit-32)*(5/9);

document.write("Temperature is : "+celcias+" C"+"</br>");


var cels = parseFloat(prompt("Enter Temperature in Celcias: "));

var fah = (cels*95)+32;

document.write("Temperature is : "+fah+" F");

*/  

//if-else,else-if
/*
var number = 4;
if(number%2==0)
{
    document.write("Even");
}
else{
    document.write("Odd");
}

var num = prompt("Enter a number: ");
if(num>0){
    console.log("Positive");
}
else if(num<0){
    console.log("Negative");
}
else{
    console.log("Zero");
}

//Letter
var l = prompt("Enter a letter : ");

l=l.toLowerCase();

if(l=="a"|| l=="e"|| l=="i"|| l=="o"|| l=="u"){
    console.log("Vowel");
}

else{
    console.log("Consonent");
}

//switch(Digit Spelling)
var digit=prompt("Enter a Digit : ");
switch(digit){
    case"0":
        console.log("zero");
        break;
    case"1":
        console.log("One");
        break;
    case"2":
        console.log("Two");
        break;
    case"3":
        console.log("Three");
        break;
    case"4":
        console.log("Four");
        break;
    case"5":
        console.log("Five");
        break;
    case"6":
        console.log("Six");
        break;
    case"7":
        console.log("Seven");
        break;
    case"8":
        console.log("Eight");
        break;
    case"9":
        console.log("Nine");
        break;
    default:
        console.log("Invalid Input");
}

var letter=prompt("Enter a Letter : ");
var letter=letter.toLowerCase();
switch(letter){
    case"a":
    case"e":
    case"i":
    case"o":  
    case"u":
        console.log("Vowel");
        break;
    default:
        console.log("Consonent");
}


//Looping

var sum = 0;
for(i=0;i<=5;i++){
   sum=sum+i;
}
document.write("sum is = "+sum);

var m = parseInt(prompt("Enter the 1st number : "));
var n = parseInt(prompt("Enter the 2nd number : "));
var sum=0;
for(var i=m;i<=n;i++){
    sum=sum+i;
}
document.write("Sum is : "+sum);

//while Loop

var i=1;
sum=0;
while(i<=100){
    if( i%3==0 && i%5==0){
        document.writeln(" "+i+"<br>");
        sum=sum+i;
    }
  
    i++;
}
document.writeln("Result = "+sum);


//Do-while Loop
var i = 1;
do{
   console.log(" "+i);
    i++;
    if(i==15){
        break;
  }
}while(i<=20);


for(var i=0;i<=10;i++){
    if(i==6){
        continue;
    }
    console.log(" "+i);
}

//function

function multiplication(a,b,c,d,e,f,g,h,i,j){
  
    var result = a*b*c*d*e*f*g*h*i*j;
    document.write("Result : "+result+"<br>")

}
multiplication(5,10,2,4,5,4,5,6,7,8);


//Array-ia an object;collection of variable
var names = new Array(3);
names[0] = "iqram";
names[1] = 12;
names[2] = 12.30;
document.write(names[0]+"<br>");
document.write(names[2]);

 var names = ["iqram","akram",10,23.56,true]
 document.write(names.length+"<br>");
 document.write(names[4]+"<br>");
 document.write(names[0]+"<br>");
 names.push("saha");
 document.write(names+"<br>");
 names.pop();
 document.write(names+"<br>");

 var cun = ["pak","ind"];
 var cun1 = ["ban","afg"];

var country = cun.concat(cun1);
document.write(country);

var num = new Array();
for(var i=0; i<5;i++){
    num[i] = parseInt(prompt("Enter Number:"));
}
sum = 0;

for(var i=0;i<5;i++){
    document.write(num[i]+"<br>");
    sum = sum+num[i];
}
document.write("sum:"+sum+"<br>");

//Object
var stu1 = {
    name : "iqram",
    age : 22,
    cgpa :3.3, 
    Lang : ["bangla","english"]
}
document.writeln(stu1.Lang);

function Student(name,age,cgpa,Lang){
        this.name=name;
        this.age=age;
        this.cgpa=cgpa;
        this.Lang=Lang;

    this.display = function(){

        document.writeln(this.name+"<br>");
        document.writeln(this.age+"<br>");
        document.writeln(this.cgpa+"<br>");
        document.writeln(this.Lang+"<br>");  

    }
}

var stud1 = new Student("iqram",22,3.14,["ban","eng"]);
var stud2 = new Student("Saha",25,3.54,["ban","eng","ger"]);
var stud3 = new Student("ana",34,4.00,["ban","eng","urdu"]);

stud1.display();
stud2.display();
stud3.display();

 var num1 = parseInt(prompt("Enter First Number : "));
 var num2 = parseInt(prompt("Enter Second Number : "));
 var maximum = Math.max(num1,num2);
 document.writeln(maximum);10

//Guessing Game
var numOfWon = 0;
var numOfLost = 0;

for(var i=1;i<=5;i++){

    var guessNumber = parseInt(prompt("Enter a Number From 1 To 5 :"));

    var randomNumber = Math.floor(Math.random()*5+1);
    
    if(guessNumber==randomNumber){
        document.write("You have won<br>");
        numOfWon++;
    }
    else{
        document.write("You have lost. Random number was "+ randomNumber+"<br>");
        numOfLost++;
    }
}
document.write("Number of won = "+numOfWon+"<br>");
document.write("Number of Lost = "+numOfLost+"<br>");
 */
   














