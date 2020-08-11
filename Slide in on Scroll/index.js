function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function () {
		var context = this,
			args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) {
				func.apply(context, args);
			}
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
	// console.log("scroll");
	// console.log(e);
	// console.log(`Scroll Y: ${window.scrollY}`);
	// console.log(`Window.innerHeight: ${window.innerHeight}`);
	sliderImages.forEach((sliderImage) => {
		// half way through the image
		const slideInAt =
			window.scrollY + window.innerHeight - sliderImage.height / 2;
		// bottom of the image
		const imageBottom = sliderImage.offsetTop + sliderImage.height;
		const isHalfShown = slideInAt > sliderImage.offsetTop;
		// console.log(`ImageBottom : ${imageBottom}`);
		// console.log(`SliderImage.offsetTop : ${sliderImage.offsetTop}`);
		// console.log(`ScrollY : ${window.scrollY}`);
		const isNotScrolledPast = imageBottom > window.scrollY;
		if (isHalfShown && isNotScrolledPast) {
			sliderImage.classList.add("active");
			// console.log("slide in");
		} else {
			sliderImage.classList.remove("active");
		}
	});
}

window.addEventListener("scroll", debounce(checkSlide));
