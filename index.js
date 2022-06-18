//Problem 1
let ages = [3,9,23,64,2,8,28,93];
   
console.log(ages[ages.length-1] - ages[0]); 

ages.push(100);

console.log(ages[ages.length-1] - ages[0]);

sum = 0;
for(i=0; i<ages.length; i++){
    sum = sum + ages[i];  
}

console.log(sum/ages.length);
    

//Problem 2

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
 sum = 0
for(i=0; i<names.length; i++) {
    sum = sum + names[i].length;
    }
    console.log(sum/names.length);

    let conName = names[0];
    for(i=1; i<names.length; i++){
        conName = conName.concat("",names[i]);
    }
    console.log("Concatenated names:",conName);

//Problem 3: To access the last element of an array, you could use the .length minus 1 method:
// Example:  array[array.length-1];

//Problem 4: To access the first element of an array, you could assign a variable that is assigned the value of whatever the array's name is 
//and then in square brackets you would put 0 because it is 0 based indexing
//Example: variableName = arrayName[0];

//Problem 5
let nameLengths = [];

for(i=0; i < names.length; i++){
    nameLengths[i] = names[i].length;
}

//Problem 6
sum = 0;
for(i=0; i < nameLengths.length; i++){
    sum = sum + nameLengths[i];
}
console.log(nameLengths);
console.log("Sum of all elements in the nameLengths array is:",sum);

//Problem 7

function concat_n_times(word, n){
    let con= word;
    for(i=1; i<n; i++){
        con = con.concat(word);
    }
    return con;
}

console.log("Concatenated words : ",concat_n_times("Hello", 3));



//Problem 8
function fullName(firstName, lastName){
     return firstName + "" + lastName;
}
console.log("Johnny","Walker");


//Problem 9

function greaterThan100(ages){
    sum=0;
    for(i=0; i<ages.length; i++){

        sum = sum + ages[i];
    }

    if(sum > 100){

        return true;
    }

    else {

        return false;
    }
}

console.log(greaterThan100(ages));

//problem 10 
let array1 = [13, 24, 33, 55, 82];

let array2 = [10, 25, 33];

function average(array1) {

        sum=0;

        for(i=0; i<array1.length; i++) {

            sum = sum + array1[i];

        }  return (sum/array1.length);

    }
//problem 11
    function compare_average(arr1, arr2) {

        if(average(arr1) > average(arr2)) {

            return true;
        }

        else {

            return false;

        }
    }
    console.log("Array sum greater than 100?:",greaterThan100(array1));

    console.log("The average of the elements in the array is:",average(array1));

    console.log("Is the average of the first array greater than second array's average?:",compare_average(array1, array2));



//Problem 12
function willBuyDrink(isHotOutside, moneyInPocket){

      if((isHotOutside) && (moneyInPocket > 10.50)){

            return true;

         } else {

            return false;
        }
    }

    let isHotOutside = true;

    let moneyInPocket = 13.00;

    console.log("I can buy the drink : ",willBuyDrink(isHotOutside, moneyInPocket));


//Problem 13
let weekDay = favDay("Saturday");
function favDay(day){
    
    return `${day}is my favorite day of the week!`
}


console.log("Finally it is the weekend! " + weekDay);

// I created this function because 

