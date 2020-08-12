const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 500; //atmsot how much it should be stretched

function shadow(e) {
	//    console.log(e);
	//    const width = hero.offsetWidth;
	//    const height = hero.offsetHeight;
	const { offsetWidth: width, offsetHeight: height } = hero;
	let { offsetX: x, offsetY: y } = e;
	// console.log(this, e.target);
	// console.log(x, y);
	// console.log(e.target.offsetLeft, e.target.offsetTop);
	if (this != e.target) {
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;
	}
    const xWalk = Math.round((x/width * walk) - (walk/2));
    const yWalk = Math.round((y/height * walk) - (walk/2));
    // console.log(x,width,xWalk);
    // console.log(y,height,yWalk);
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 red,
    ${xWalk * -1}px ${yWalk * -1}px 0 blue,
    ${xWalk}px ${yWalk * -1}px 0 green,
    ${xWalk * -1}px ${yWalk}px 0 yellow`;
    
}

hero.addEventListener("mousemove", shadow);
