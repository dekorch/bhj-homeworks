const addText = function() {
	const output = document.getElementById("timer");
	output.textContent -= 1;
	if(output.textContent <= 0) {
		alert("Вы выйграли");
		clearInterval(intervalID);
	}
}

const intervalID = setInterval(addText, 1000);