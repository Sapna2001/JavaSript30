const slider = document.querySelector(".items");
let isDown = false;
let startx;
let scrollLeft;

slider.addEventListener("mousedown",(e)=>{
    isDown=true;
    slider.classList.add("active");
    // console.log(e);
    // console.log(e.pageX,slider.offsetLeft,slider.scrollLeft)
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    // console.log(startx,scrollLeft);
})
slider.addEventListener("mousemove",(e)=>{
    if(!isDown)
    return;
    e.preventDefault()
    //prevent selecting text
    const x = e.pageX - slider.offsetLeft;
    // console.log(e.pageX,slider.offsetLeft);
    const walk = (x - startX);  //deviation
    // console.log(e);
    // console.log(x,startX,scrollLeft,walk);
    // console.log("main");
    slider.scrollLeft = scrollLeft-walk;
})
slider.addEventListener("mouseup",()=>{
    isDown=false;
    slider.classList.remove("active");
})
slider.addEventListener("mouseleave",()=>{
    isDown=false;
    slider.classList.remove("active");
})


// Event Mouseout will trigger when mouse leaves the selected element and also when mouse leaves it's child elements also.
// Event Mouseleave element will trigger when pointer will leave the selected element only.

  
