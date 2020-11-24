/*Exercise 1*/


var array = [1,3,7]
for ( var i=0; i < array.length; i++){
    console.log( array[i] );
}



/*Exercise 2*/

var fruits =["watermelon", "bananas", "pineapple"]
console.log(fruits[0]);
console.log(fruits[2]);
for(i=0; i<fruits.length;i++){
    console.log(fruits[i]);
}

/*Exercise 3*/

var tenNumbers = [1,2,3,4,5,6,7,8,9,10];
var sum = 0;
for(i=0; i<=9; i++){
    sum = ( sum + tenNumbers[i]);
    if (i === 9){
        console.log(sum);
    }
}

/*Exercise 4*/

var tenElements =[1,2,3,4,5,6,7,8,9,10];
sum = 0;
for(i=0; i<tenElements.length; i++){
    if((tenElements[i] % 2) == 0){
        sum = (sum + tenElements[i])
    }
    if(i == 9){
        console.log(sum);
    }
}


/*Exercise 5*/

var tenArrays = [1,2,3,4,5,6,7,8,9,10];
var max = 0;
for(i=0; i<=9; i++){
    if(tenArrays[i] > max){
        max  = tenArrays[i]
    }
}
console.log(max);


/*Exercise 6*/

var arrays = [0,1,2,3,1,4,4,5,6,7,];
var firstIndex;
for(i = 0; i<10; i++){
    for( var j= 1; j<=10; j++){
        if(arrays[i] === arrays[j]){
            firstIndex = arrays[i]
            break
        }  
        break
    }
}
console.log(firstIndex)



/*Exercise 7*/

var lastArrays = [0,1,2,3,4,5,6,7,8,9];
for(i= 9; i>=0; i--){
    console.log(lastArrays[i])
} 

















