const panels = document.querySelectorAll(".panel"); //not panels
function toogleOpen() {
	this.classList.toggle("open");
}
function toogleActive(e) {
    if(e.propertyName.includes('flex'))
	this.classList.toggle("open-active");
}
panels.forEach((panel) => {
	panel.addEventListener("click", toogleOpen);
});

panels.forEach((panel) => {
	panel.addEventListener("transitionend", toogleActive);
});
