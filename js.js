var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

canvas.height = 400;
canvas.width = 600;



mainImage = new Image();
mainImage.ready = false;
mainImage.onload = checkReady();
mainImage.src = "assets/pac.png"

function checkReady() {
	this.ready = true; 
	playgame();

}


function playgame() {
	render();	
	}

function render() {
	ctx.fillStyle = "blue";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

}


document.body.appendChild(canvas);
ctx.fillText("helloworld", 10, 150);
