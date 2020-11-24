
// Exercise 7

/*
 The outer loop with the counter ```i``` takes care of lines,
and the inner loop with the counter ```j``` takes care of columns.
We start with the top left star and move right in the first line.
When the inner loop reaches the last column, it terminates. Then,
the outer loop increases its counter by 1 (moves to the next line), and so on.
*/

// Variable that stores the size of our square
var size = 5;

// Variable that stores one line of asterisks (stars)
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    // At every step you have to reset the variable because you start creating a new line
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        // Add a new asterisk (star) to the lineOfStars
        lineOfStars = lineOfStars + "*";
    }
    // Each line is separated by an empty line because if the browser sees 5 identical results,
    // it will collapse our square of stars into one line
    console.log(" ");

    // Writes the lineOfStars variable (its contents - therefore it is written here without quotation marks) in the console
    console.log(lineOfStars);
}



//Exercise 1

var number1 = 20;
var number2 = 30;
if (number2 > number1) {
    console.log("30 is greater than 20")
}

else {
    console.log("20 is smaller than 30")
}
 //In the console, the answer is '30 is greater than 20'.


//Exercise 2

var size1 = 100;
var size2 = 200;
var size3 = 300;
if (size1 > size2 && size1 > size3) {
    console.log("100 is the greatest number");
} else if (size2 > size1 && size2 > size3) {
    console.log("200 is the greatest number");
} else {
    console.log("300 is the greatest number")
}
//In the console it shows that '300 is the greatest number'.



//Exercise 3

var i = 1;

do {
	console.log("I like JavaScript");
	i++;
} while ( i <= 10 );
//In the console, it shows: '10 I like JavaScript'



//Exercise 4

var result = 0;
for (result = 1; result<11; result++){
    console.log(result);
}
/*
In the console, it shows: 
1 
2 
3 
4 
5 
6 
7
8 
9
10
*/



//Exercise 5

var n = 7
for (n = 0; n<8; n++){
    if (n % 2 == 0){
        console.log("even");
    } else {
        console.log("odd");
    }
}
/*In the console, it shows: 
even
odd
even
odd
eve
odd
even
*/



//Exercise 6

for(var ax=0; ax<5; ax++) {
for(var bx=ax; bx<5; bx++) {
console.log("ax="+ax+", bx="+bx);
}
}
/*In the console, we see:
ax=0, bx=0
ax=0, bx=1
ax=0, bx=2
ax=0, bx=3
ax=0, bx=4
ax=1, bx=1
ax=1, bx=2
ax=1, bx=3
ax=1, bx=4
ax=2, bx=2
ax=2, bx=3
ax=2, bx=4
ax=3, bx=3
ax=3, bx=4
ax=4, bx=4
*/


//Exercise 7

var size = 5;

var lineOfStars = "";

for(var i = 0; i < size; i++) {
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        lineOfStars = lineOfStars + "*";
    }
    console.log(" ");
    console.log(lineOfStars);
}
/*
In the console, we see this:
*****
*****
*****
*****
*****
*/


//Exercise 8


var symbol ="";
var symbolNumber = 5;
for ( var n = 0; n<symbolNumber; n++){
    symbol = symbol + "*"
    console.log(symbol);
}