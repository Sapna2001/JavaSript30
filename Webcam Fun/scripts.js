const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo() {
	navigator.mediaDevices
		.getUserMedia({
			video: true,
			audio: false,
		})
		.then((localMediaStream) => {
			// console.log(localMediaStream);
			video.srcObject = localMediaStream;
			video.play();
		})
		.catch((err) => {
			console.error(`OH NO!!!`, err);
		});
	// The navigator object contains information about the browser.
}

function paintToCanvas() {
	const width = 640;
	const height = 480;
	canvas.width = width;
	canvas.height = height;
	setInterval(() => {
		ctx.drawImage(video, 0, 0, width, height);
		//get pixels
		let pixels = ctx.getImageData(0, 0, width, height);
		// console.log(pixels)
		// debugger -> pause

		//filter
		// pixels = redEffect(pixels);
		pixels = rgbSplit(pixels);
		// pixels = greenScreen(pixels);

		//put back
		ctx.globalAlpha = 0.9;
		//The globalAlpha property sets or returns the current alpha or transparency value of the drawing.
		ctx.putImageData(pixels, 0, 0);
	}, 16);
}

function redEffect(pixels) {
	for (let i = 0; i < pixels.data.length; i += 4) {
		// pixels -> r,g,b,alpha
		pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
		pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
		pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
	}
	return pixels;
}

function rgbSplit(pixels) {
	for (let i = 0; i < pixels.data.length; i += 4) {
		// pixels -> r,g,b,alpha
		pixels.data[i - 250] = pixels.data[i + 0]; // RED
		pixels.data[i + 200] = pixels.data[i + 1]; // GREEN
		pixels.data[i - 200] = pixels.data[i + 2]; // Blue
	}
	return pixels;
}

function takePhoto() {
	snap.currentTime = 0;
	snap.play();

	const data = canvas.toDataURL("image/jpeg");
	// returns a data URI containing a representation of the image in the format specified by the type parameter
	// console.log(data);
	const link = document.createElement("a");
	link.href = data;
	link.setAttribute("download", "pretty");
	//download to the computer
	link.innerHTML = `<img src="${data}" alt="Pretty Girl" />`;
	strip.insertBefore(link, strip.firstChild);
}

// function greenScreen(pixels) {
//     const levels = {};  //min and max value

//     //rgb input
//     document.querySelectorAll('.rgb input').forEach((input) => {
//       levels[input.name] = input.value;
//     });

//     for (i = 0; i < pixels.data.length; i = i + 4) {
//       red = pixels.data[i + 0];
//       green = pixels.data[i + 1];
//       blue = pixels.data[i + 2];
//       alpha = pixels.data[i + 3];

//       if (red >= levels.rmin
//         && green >= levels.gmin
//         && blue >= levels.bmin
//         && red <= levels.rmax
//         && green <= levels.gmax
//         && blue <= levels.bmax) {
//         // take it out
//         pixels.data[i + 3] = 0;
//       }
//     }

//     return pixels;
//   }

getVideo();
video.addEventListener("canplay", paintToCanvas);
// The canplay event occurs when the browser can start playing the specified audio/video (when it has buffered enough to begin).
