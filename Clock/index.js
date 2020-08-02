const secondHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){
const date = new Date(); //date
const day = date.getDay();
//seconds
const seconds = date.getSeconds();
const secondsDegree = ((seconds/60)*360)
secondHand.style.transform = `rotate(${secondsDegree}deg)`
//minutes
const minutes = date.getMinutes();
const minutesDegree = ((minutes/60)*360)+90;
minutesHand.style.transform = `rotate(${minutesDegree}deg)`
//hours
const hours = date.getHours();
const hoursDegree = ((hours/12)*360)+90;
hourHand.style.transform = `rotate(${hoursDegree}deg)`

const dateinfo = document.querySelector(".date"); 
const dayinfo = document.querySelector(".day"); 
const timeinfo = document.querySelector(".time"); 

var dayWord;

//days
switch(day){
    case 0: dayWord = "Sunday";
            break;
    case 1: dayWord = "Monday";
            break;
    case 2: dayWord = "Tuesday";
            break;
    case 3: dayWord = "Wednesday";    
            break;
    case 4: dayWord = "Thursday";
            break;
    case 5: dayWord = "Friday";
            break;
    case 6: dayWord = "Saturday";    
            break;        

}

dayWord = dayWord.toUpperCase();

timeinfo.innerHTML = `TIME : ${hours}:${minutes}:${seconds}`
dayinfo.innerHTML = `DAY : ${dayWord}`
dateinfo.innerHTML = `DATE : ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
}

setInterval(setDate,1000)
