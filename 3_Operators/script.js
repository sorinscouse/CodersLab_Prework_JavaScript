//Exercise 1

var firstNumber = 1;
var secondNumber = 3;
console.log(firstNumber == secondNumber);
//the value shown in the console was 'false', because 1 is not equal to 3, they are different numbers.


//Exercise 2

var Number1 = 3;
var Number2 = 7;
var resultModulo = 0;
resultModulo = 3 % 7;
console.log(resultModulo);
//In the console, the result is 3.

//Exercise 3

var text1 ="Mike";
var text2 ="Kellog";
var joinedStrings = "";
joinedStrings = text1 + ' ' + text2;
console.log(joinedStrings);
// The console shows Mike Kellog.


//Exercise 4
var myNumber = 4;
var myString = "4";
console.log(myNumber == myString);
console.log(myNumber === myString);
//If using '==', the result is true, because 4=4, they're both equal numbers. If using '===', the result is false, because they're different types, one is a number, and one is a string.


//Exercise 5

var counter = 145;
console.log(counter);
counter++;
console.log(counter);
counter--;
console.log(counter);
//When we increase the value of variable 'counter', the result will be: 146 (145+1=146). When we decrease the value of counter, the result will be: 145 (146-1=145).



//Exercise 6

var dimension1 = 10;
var dimension2 = 12;
var result =null;
result = dimension1 > dimension2;
console.log(result);
//The answer is false, because 10<12)