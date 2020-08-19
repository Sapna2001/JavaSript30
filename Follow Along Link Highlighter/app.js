const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.appendChild(highlight);

function highlightList (){
  const coords = this.getBoundingClientRect();
  const linkcoords = {
    width: coords.width,
    height: coords.height,
    top: coords.top + window.scrollY,
    left: coords.left + window.scrollX
  };
  console.log(scrollY);
  highlight.style.width = `${linkcoords.width}px`;
  highlight.style.height = `${linkcoords.height}px`;
  highlight.style.transform = `translate(${linkcoords.left}px, ${linkcoords.top}px)`;
}

triggers.forEach( (trigger) => trigger.addEventListener("mouseenter",highlightList));
