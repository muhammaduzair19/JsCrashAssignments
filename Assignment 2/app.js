// Question No 01


/* function add(num1){  //question 01
    console.log(`closure function passed value: ${num1}`);
    return function (num2){
        console.log(`sum of passed value ${num2+num1}`);
    }
}

let innerFunction = add(8);
innerFunction(5) */


// Question No 02


/* let arr = [2, 4, 6, 7, 8]; // question 2
let a = arr.length
let b = findVal(9, a);
console.log(b)

function findVal(val, len) {

    if (val == arr[len-1]) {
        return true;
    }
    else{

        if((len-1) == 0){
            return false
        }
        return findVal(val, len - 1)
    }
    return 0
} */


// Question No 03

/* let divElement = document.querySelector(".html-element"); 

function elementColor (elementName, color){
    elementName.style.backgroundColor = color;
}
elementColor(divElement, "green"); */





// Question No 04



/* function addUnOrderedList(listItem) {
    const addUL = document.createElement("ul");
    const addLi = document.createElement("li");
    const ListText = document.createTextNode(listItem);
    addUL.appendChild(addLi);
    addLi.appendChild(ListText);
    document.body.appendChild(addUL)
}
addUnOrderedList("hello SMIT") */


// Question No 05

/* function addParagraph(text) { 
    const addPara = document.createElement("p");
    const paraText = document.createTextNode(text)
    addPara.appendChild(paraText);
    document.body.appendChild(addPara)
}

addParagraph("Hey this is uzair here"); */


// Question No 06

/* function storeObject(key, obj){   //question 06
    let stringConvert = JSON.stringify(obj);
    localStorage.setItem(key,stringConvert)
}

storeObject("myData", myData); */



// Question No 07

/* function getObject(key){  
    let prevData = JSON.parse(localStorage.getItem(key));
    return prevData
}
console.log(getObject("myData2")) */



// Question No 08

/* prevObj = JSON.parse(localStorage.getItem("storedObject"));
obj = {}

function storeAndGetObject(key, value) {  // question 08
    prevObj = JSON.parse(localStorage.getItem("storedObject"));
    obj = prevObj
    obj[key] = value
    // console.log(obj)
    let stringObj = JSON.stringify(obj)
    localStorage.setItem("storedObject", stringObj)
    return JSON.parse(localStorage.getItem("storedObject"));
}
console.log(storeAndGetObject()) */