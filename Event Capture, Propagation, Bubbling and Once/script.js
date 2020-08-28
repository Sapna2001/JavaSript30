const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e){
    console.log(this.classList.value);
    e.stopPropagation(); //stop bubbling event
}

divs.forEach(
    div => div.addEventListener("click",logText,{
        capture: true,  // top -> bottom (one two three) 
        // capture: false -> three two one 
        once: true //onclick unbinds itself which basically means remove 
    })
)

button.addEventListener("click",()=>{
    console.log("click");
},{once:true})
// when something is clicked evething it goes from top to bottom and events are captured
// bubbling -> triggering up the events to the top