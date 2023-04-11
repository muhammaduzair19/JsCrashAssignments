let mark1 = +prompt("enter marks for one subject")
let mark2 = +prompt("enter marks for second subject")
let mark3 = +prompt("enter marks for third subject")
let mark4 = +prompt("enter marks for fourth subject")
let mark5 = +prompt("enter marks for fifth subject")

let avg = mark1 + mark2 + mark3 + mark4 + mark5;

avg = avg / 5;

if (100 <= avg) {
    console.log("The grade is: A")
}
else if (90 <= avg) {
    console.log("The grade is: B")
}
else if (80 <= avg) {
    console.log("The grade is: C")
}
else if (70 <= avg) {
    console.log("The grade is: D")
}
else if (60 <= avg) {
    console.log("The grade is: F")
}
else{
    console.log("The grade is: F")
}