const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
	const index = Math.floor(Math.random() * holes.length);
	const hole = holes[index];
	// console.log(index);
	if (hole === lastHole) {
		return randomHole(holes); // no same hole consecutively
	}
	lastHole = hole;
	return hole;
}

function peep() {
	const time = randomTime(200, 1000);
	const hole = randomHole(holes);
	hole.classList.add("up");
    // console.log(time, hole);
    setTimeout(() => {
        hole.classList.remove("up");
        if (!timeUp) //timeup set to true then stops
        peep(); 
    },time)
}

function startGame(){
    scoreBoard.innerText = 0;
    timeUp = false;
    score=0;
    peep();
    setTimeout(() => timeUp = true, 10000)
}

function bonk(e){
    if(!e.isTrusted) //avoid cheating
    return 
    score++;
    // console.log(score)
    this.classList.remove("up");
    scoreBoard.textContent = score;
}

moles.forEach((mole) => mole.addEventListener("click",bonk));
