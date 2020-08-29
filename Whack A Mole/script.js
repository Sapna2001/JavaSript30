const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".scoreshow");
const moles = document.querySelectorAll(".mole");
const wrapper = document.querySelector(".wrapper")
const scoreList = wrapper.querySelector(".score");
const scores = JSON.parse(localStorage.getItem('scores')) || [];
const highest = document.querySelector(".highest");
const level = document.querySelector(".level");

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

function peep1() {
	const time = randomTime(300, 1000);
	const hole = randomHole(holes);
	hole.classList.add("up");
    // console.log(time, hole);
    setTimeout(() => {
        hole.classList.remove("up");
        if (!timeUp) //timeup set to true then stops
        peep1(); 
        else
        {
            const text = score;
            const currScore ={
                text
            }
            scores.push(currScore);
            populateList(scores,scoreList);
            localStorage.setItem('scores', JSON.stringify(scores));
            if(score>highest.textContent)
            highest.textContent=score;
            localStorage.setItem("HScore", highest);
        }
    },time)
}

function peep2() {
	const time = randomTime(200, 1000);
	const hole = randomHole(holes);
	hole.classList.add("up");
    // console.log(time, hole);
    setTimeout(() => {
        hole.classList.remove("up");
        if (!timeUp) //timeup set to true then stops
        peep2(); 
        else
        {
            const text = score;
            const currScore ={
                text
            }
            scores.push(currScore);
            populateList(scores,scoreList);
            localStorage.setItem('scores', JSON.stringify(scores));
            if(score>highest.textContent)
            highest.innerText=score;
            localStorage.setItem("HScore", highest);
        }
    },time)
}

function peep3() {
	const time = randomTime(100, 1000);
	const hole = randomHole(holes);
	hole.classList.add("up");
    // console.log(time, hole);
    setTimeout(() => {
        hole.classList.remove("up");
        if (!timeUp) //timeup set to true then stops
        peep3(); 
        else
        {
            const text = score;
            const currScore ={
                text,
            }
            scores.push(currScore);
            populateList(scores,scoreList);
            localStorage.setItem("HScore", highest);
            localStorage.setItem("CLevel", level.innerText);
            localStorage.setItem('scores', JSON.stringify(scores));
            if(score>highest.innerText)
            highest.innerText=text;
        }
    },time)
}

function populateList(scores,scoreList){
    scoreList.innerHTML = scores.map((score,index) =>{
        return `
            <li class="scoreText">
                Score ${index+1} = ${score.text}     
            </li>
        `
    }).join("");
}

function startGame(){
    scoreBoard.innerText = 0;
    timeUp = false;
    if(score>=0 && score<5)
    {
        peep1();
        level.innerText=1;
    }
    if(score>=5 && score<10){
        peep2();
        level.innerText=2;
    }
    if(score>=10){
        peep3();
        level.innerText=3;
    }
    score=0;
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
populateList(scores,scoreList);
if(scores.length !==0){
    highest.innerText = localStorage.getItem("HScore");
    level.innerText = localStorage.getItem("CLevel");
}

