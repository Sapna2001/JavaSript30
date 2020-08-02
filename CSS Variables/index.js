const inputs = document.querySelectorAll(".controls input");
function handleUpdate() {
	// console.log(this.value);
	const suffix = this.dataset.sizing || ""; //set of items starting with data and '' for hexcode
	// console.log(suffix);
	document.documentElement.style.setProperty(
		`--${this.name}`,
		this.value + suffix
	);
}
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
