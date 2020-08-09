const dogs = [
	{ name: "Snickers", age: 2 },
	{ name: "hugo", age: 8 },
];

function makeRed() {
	const p = document.querySelector("p");
	p.style.color = "red";
	p.style.fontSize = "50px";
}

// Regular
console.log("Sapna");

// Interpolated
var sap = "😍";
console.log("Hi I am %s string", "😍");
console.log(`Hi I am ${sap} string`);

// Styled
console.log("%c enlarged text", "font-size:25px; background:red");

// warning!
console.warn("warning");

// Error :|
console.error("error");

// Info
console.info("hhbgvkfjcv");

// Testing
console.assert(1 === 2, "That is wrong");
const p = document.querySelector("p");
console.assert(p.classList.contains("para"), "That is wrong");

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
	console.groupCollapsed(`${dog.name}`);
	console.log(`This is ${dog.name}`);
	console.log(`${dog.name} is ${dog.age} years old`);
	console.groupEnd(`${dog.name}`);
});

// counting
console.count("sap");
console.count("sapna");
console.count("sap");
console.count("sapna");
console.count("sapna");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/Sapna2001")
	.then((data) => data.json())
	.then((data) => {
		console.timeEnd("fetching data");
		console.log(data);
	});

function makeGreen() {
	const h3 = document.querySelector("h3");
	h3.style.color = "green";
	h3.style.fontSize = "50px";
}

//performance now
const t0 = performance.now();
makeGreen();
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
