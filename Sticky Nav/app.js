const nav = document.querySelector("#main");
let topOfNav = nav.offsetTop;

function fixNav() {
	// console.log(topOfNav,scrollY);
	if (window.scrollY >= topOfNav) {
		//   console.log("crossed");
		document.body.style.paddingTop = nav.offsetHeight + "px";
		//if padding not added reflow will occur
		document.body.classList.add("fixed-nav");
	} else {
		document.body.classList.remove("fixed-nav");
		document.body.style.paddingTop = 0;
	}
}

window.addEventListener("scroll", fixNav);
