const container = document.querySelector(".container");
const text = document.querySelector("#text");

const totalTime = 7500
const breatheTime = (totalTime/5)*2;
const breatheHold = (totalTime/5);

function breatheAnimation(){
    // console.log("hi")
  text.innerHTML = "Breathe In";
  container.className = ("container grow");
  setTimeout(()=>{
    text.innerHTML = "Breathe Hold";
    setTimeout(()=>{
        text.innerHTML = "Breathe Out";
        // container.className = ("container shrink")
        container.classList.add("container","shrink")
    },breatheHold)
  },breatheTime)
}

setInterval(breatheAnimation,totalTime);