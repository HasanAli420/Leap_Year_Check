let result = document.getElementById("demo");

function isLeapYear(year){
    if((year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0)){
        result.innerText = `${year} is a leap Year`
    } else{
        result.innerText = `${year} is not a leap Year`
    }
}

isLeapYear(prompt("Check Leap Year"));