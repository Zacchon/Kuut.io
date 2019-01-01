window.onload = main;

function main() {
	const cvs = document.getElementById("cvs");
	const ctx = cvs.getContext("2d");
	
	canvasInit(cvs);
	window.onresize = () => canvasInit(cvs);

}

function canvasInit(canvas) {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

function () {

}