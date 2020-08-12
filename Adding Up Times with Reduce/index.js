const timeNode = document.querySelectorAll('[data-time]');
// console.log(timeNodes);
// time is node list
//node list -> arraylist
//The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
const timeArray = Array.from(timeNode);
// console.log(timeArray);

const seconds = timeArray
    .map((node) => node.dataset.time)
    .map(timeCode => {
      const [mins, secs] = timeCode.split(':').map(parseFloat); //string ->float
    //   console.log(mins,secs)
      return (mins * 60) + secs;
    })
    .reduce((totalSeconds,vidSeconds) => {
        return totalSeconds + vidSeconds;
    })

    // console.log(seconds);

    let secondsLeft = seconds;

    //hours
    const hours = Math.floor(secondsLeft/3600);
    secondsLeft = secondsLeft % 3600;

    //minutes
    const minutes = Math.floor(secondsLeft/60);
    secondsLeft = secondsLeft % 60;

    console.table(hours,minutes,secondsLeft);

    const timetag = document.querySelector(".time");
    timetag.innerHTML = `Total Time : ${hours}:${minutes}:${secondsLeft}`


    


