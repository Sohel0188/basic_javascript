document.getElementById("submit").addEventListener("click", (event) => {
    const marks = document.getElementById("input_value").value;
    let result = document.getElementById("FinalRasult")
    console.log(result);
    const p = document.createElement("p")
    p.innerText = "";

    if (marks >= 80 && marks <= 100) {
        p.innerText = "Congratulations! You get A+";
    } else if (marks >= 70 && marks < 80) {
        p.innerText = "Congratulations! You get A";
    } else if (marks >= 60 && marks < 70) {
        p.innerText = "Congratulations! You get A-";
    } else if (marks > 50 && marks < 40) {
        p.innerText = "Congratulations! You get B";
    } else if (marks >= 40 && marks < 50) {
        p.innerText = "Congratulations! You get C";
    } else if (marks >= 33 && marks < 40) {
        p.innerText = "Congratulations! You get D";
    } else {
        p.innerText = "Sorry! You get F";
    }
    result.append(p);
    document.getElementById("input_value").value;
})

document.getElementById("submit_value").addEventListener("click", (e) => {
    const inputNumber = document.getElementById("input_number").value;
    const result = document.getElementById("even_odd")
    const p = document.createElement("p")
    p.innerText = "";

    if (inputNumber % 2 == 0) {
        p.innerText = "Even Number";
    } else {
        p.innerText = "Odd Number";
    }
    result.append(p);
    document.getElementById("input_number").value = "";
})

document.getElementById("submit_year").addEventListener("click", (e) => {
    const inputYear = document.getElementById("input_year").value;
    const result = document.getElementById("leapYearOrNot");
    const p = document.createElement("p");
    p.innerText = ""
    if (inputYear % 400 == 0) {

        p.innerText = "This is a Leap Year";

    } else if (inputYear % 100 == 0) {

        p.innerText = "This is Not a Leap Year";
    }
    else if (inputYear % 4 == 0) {
        p.innerText = "This is a Leap Year";
    }
    else {
        p.innerText = "This is Not a Leap Year";
    }

    result.append(p);
    document.getElementById("input_year").value = "";
})
//============problem 3=================//
const myArray = document.getElementById("mainArray");
const ar = [10, 5, 6, 20, 15, 2, 3, 18];
let str = ar.join(' ');
const p = document.createElement("p");
p.innerText = str;
myArray.append(p);

// document.getElementById("finalArray").innerHTML = ar;
function myFunction() {
    const finalarray = ar.sort(function (a, b) { return a - b });
    let str = finalarray.join(' ');
    document.getElementById("finalArray").innerHTML = str;
}

//====================problem 5 ==================//

const nameList = document.getElementById("nameList");
const myList = ["'rahim'", "'karim'", "'abdul'", "'sadsd'", "'heroAlom'"];
let finalList = myList.join(' ');
const name = document.createElement("p");
name.innerText = finalList;
nameList.append(name);

function findLargeName() {
    

    let largeName = myList[0];
    //console.log(largeName)
    for (let i = 0; i < myList.length; i++) {
        //console.log(myList[i]);
        
        if (myList[i].length>largeName.length) {

            largeName = myList[i];
            //console.log(largeName);
            document.getElementById("largeName").innerHTML = largeName;
        }else{
            document.getElementById("largeName").innerHTML = largeName;
        }
    }
}


document.getElementById("submit_year").addEventListener("click", (e) => {
    const inputYear = document.getElementById("input_year").value;
    const result = document.getElementById("leapYearOrNot");
    const p = document.createElement("p");
    p.innerText = ""
    if (inputYear % 400 == 0) {

        p.innerText = "This is a Leap Year";

    } else if (inputYear % 100 == 0) {

        p.innerText = "This is Not a Leap Year";
    }
    else if (inputYear % 4 == 0) {
        p.innerText = "This is a Leap Year";
    }
    else {
        p.innerText = "This is Not a Leap Year";
    }

    result.append(p);
    document.getElementById("input_year").value = "";
})
       