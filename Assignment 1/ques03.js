let num1 = +prompt("Enter the number 1");
let num2 = +prompt("Enter the number 2");
let num3 = +prompt("Enter the number 3");
let num4 = +prompt("Enter the number 4");
let num5 = +prompt("Enter the number 5");

function num1num2(x, y) { //funtion to check first two number and store it in a variable
    let large1;
    if (x > y) {
        large1 = x;
    }
    else {
        large1 = y;
    }
    return large1
}
function num3num4(x, y) { //function for third and forth, and store in a variable
    let large2;
    if (x > y) {
        large2 = x;
    }
    else {
        large2 = y;
    }
    return large2
}
function large1large2(x, y) { // function to check the result of first two comparison
    let large3;
    if (x > y) {
        large3 = x;
    }
    else {
        large3 = y;
    }
    return large3;
}

let result1 =num1num2(num1,num2);
let result2 =num3num4(num3,num4);
let result3 = large1large2(result1,result2);

if(result3>num5){ //if condition for result of third function and num5
    console.log("The large number is:" + " " + result3);
}
else{
    console.log("The large number is:" + " " + num5);

}
