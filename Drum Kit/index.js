const message = document.querySelector(".message"); //message box
const keys = document.querySelectorAll(".key"); // choose all the keys
// console.log(keys);
window.addEventListener("keydown", playSound);
keys.forEach((key) => key.addEventListener("transitionend", removeTransition)); //The transitionend event occurs when a CSS transition has completed.

//functions
function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	//   console.log(e.keyCode); // find the keycode of the alphabet pressed
	//   console.log(audio);
	//   console.log(key);
	if (!audio) {
		message.innerHTML = `Enter valid key`;
		return;
	}
	audio.currrentTime = 0; // rewind to start
	message.innerHTML = ``;
	audio.play();
	key.classList.add("playing"); //add the class playing to change the css
}

function removeTransition(e) {
	// console.log(e)
	if (e.propertyName !== "transform") return; //skip if it is not a transform
	e.target.classList.remove("playing");
}
