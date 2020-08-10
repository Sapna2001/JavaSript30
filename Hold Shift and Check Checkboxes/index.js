const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkBoxes);

let lastChecked;

function handleCheck(e) {
	//check if shift key is down
	//And they are checking it
	console.log("clicked");
	let inBetween = false;
	if (e.shiftKey && this.checked) {
		checkBoxes.forEach((checkBox) => {
			// loop over every single checkBox
			console.log(checkBox);
			if (checkBox === this || checkBox === lastChecked) {
				inBetween = !inBetween;
				console.log("checked box");
			}
			if (inBetween) {
				checkBox.checked = true;
				console.log("inbetween");
			}
		});
	}
	lastChecked = this;
}

checkBoxes.forEach((checkBox) => {
	checkBox.addEventListener("click", handleCheck);
});
