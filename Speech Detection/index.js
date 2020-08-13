window.SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;
    
const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "en-US";

let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);

recognition.addEventListener("result", (e) => {  //list
    console.log(e);
	const transcript = Array.from(e.results)    //array
		.map((result) => result[0])
		.map((result) => result.transcript)    
        .join("");
        console.log(transcript);

	const happyScript = transcript.replace(/happy|smile|calm/gi, "😊");
	p.textContent = happyScript;

	if (e.results[0].isFinal) {
		p = document.createElement("p");
		words.appendChild(p);
	}
});

recognition.addEventListener("end", recognition.start);

recognition.start();
