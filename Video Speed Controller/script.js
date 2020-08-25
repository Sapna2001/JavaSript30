const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

const handlemove = (e) =>{
    // console.log(e);
    // e.pageY output the coordinates of the mouse pointer when the mouse button is clicked on an element
    const y = e.pageY - speed.offsetTop;
    const percent = (y/speed.offsetHeight);
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + "%";
    const playbackRate = (percent*(max-min)) + min;
    bar.style.height = height;
    bar.innerHTML = playbackRate.toFixed(2)+"x";
    video.playbackRate = playbackRate;
    // console.log(y,height);
    // console.log(playbackRate);
}

speed.addEventListener("mousemove",handlemove)