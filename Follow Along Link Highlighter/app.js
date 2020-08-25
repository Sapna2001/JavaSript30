const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.appendChild(highlight);

function highlightList (){
  const coords = this.getBoundingClientRect();
  // The Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
  const linkcoords = {
    width: coords.width,
    height: coords.height,
    top: coords.top + window.scrollY,
    left: coords.left + window.scrollX
  };
  // console.log(height,scrollY);
  highlight.style.width = `${linkcoords.width}px`;
  highlight.style.height = `${linkcoords.height}px`;
  highlight.style.transform = `translate(${linkcoords.left}px, ${linkcoords.top}px)`;
}

triggers.forEach( (trigger) => trigger.addEventListener("mouseenter",highlightList));
