var canvas = undefined;
var ctx = undefined;
var offset = 0.5;
var jump = 10;

var inputForm = document.querySelector('form');
var options = document.getElementsByName('fun');
var title = document.getElementsByName('title');
var xax = document.getElementsByName('xax');
var yax = document.getElementsByName('yax')

function init(){
	//initalizes the canvas
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	graph();
}

document.addEventListener('DOMContentLoaded',init);

function graph(){
	ctx.fillStyle = "white";
	ctx.fillRect(0,0,canvas.width,canvas.height);

	if(jump<0) return;

	ctx.beginPath();
	ctx.strokeStyle="#9ef2ff";
	ctx.lineWidth =1;

	for (var x = offset; x <= canvas.width; x+= jump) {
		ctx.moveTo(x,0);
		ctx.lineTo(x, canvas.height);
	}

	ctx.moveTo(x,0);
	ctx.lineTo(x,canvas.height);

	for (var y = offset; y <= canvas.height; y+= jump) {
		ctx.moveTo(0,y);
		ctx.lineTo(canvas.width,y);
	}
	ctx.stroke();

	ctx.beginPath();
	//x axis
	ctx.moveTo(0,(canvas.height+jump)/2-offset);
	ctx.lineTo(canvas.width,(canvas.height+jump)/2-offset);

	// y axis
	ctx.moveTo(canvas.width/2,-offset);
	ctx.lineTo(canvas.width/2,canvas.height-offset);
	ctx.strokeStyle="#999999";

	ctx.stroke();
}
function draw() {
	ctx.beginPath();
	ctx.fillStyle="#999999";
	ctx.font = "20px Helvetica";
	ctx.fillText(title[0].value, 5, 20);
	//draw a function
	for (var i=0;i<options.length;i++){
		if (options[i].value === "fun1" && options[i].checked) {
			ctx.save();
			fun1();
			ctx.restore();
			break;
		}
		else if (options[i].value === "fun2" && options[i].checked) {
			fun2();
			break;
		}
		else if (options[i].value === "fun3" && options[i].checked) {
			fun3();
			break;
		}
	}
}

function fun1(){
	console.log('option 1');
	ctx.beginPath();
	ctx.strokeStyle = "#FF0000";

	ctx.translate(canvas.width/2,canvas.height/2);
	for (var x = -canvas.width/2; x <= canvas.width; x += jump) {
        ctx.lineTo(x, eval(((.5 * x) + 4)*-1));
    }
	ctx.stroke();	

}

function fun2(){
	console.log('option 2');
	ctx.beginPath();
	ctx.strokeStyle = "#FF0000";

	ctx.translate(canvas.width/2,canvas.height/2);
	for (var x = -canvas.width/2; x <= canvas.width; x += 2) {
        ctx.lineTo(x, eval(-1*((x+2)*(x-4))));
    }
	ctx.stroke();	
}

function fun3(){
	console.log('option 3');
	ctx.beginPath();
	ctx.strokeStyle = "#FF0000";

	ctx.translate(canvas.width/2,canvas.height/2);
	for (var x = -canvas.width/2; x <= canvas.width/2; x += jump) {
        ctx.lineTo(x, -4);
    }
	ctx.stroke();	
}


/*

function update() {
}

function draw() {


	// Draw Graph
	canvasContext.save();
    plotEquation();
	canvasContext.restore();

}

function plotEquation() {

	canvasContext.strokeStyle="#FF0000";
	
	canvasContext.beginPath();
    canvasContext.translate(canvas.width/2,(canvas.height+jump)/2-offset);
	for (var x = -canvas.width/2; x <= canvas.width; x += jump) {
        canvasContext.lineTo(x, eval(document.data.equation.value));
    }
	canvasContext.stroke();		
}*/