"use strict";

var div = document.getElementById('content');

var inputCoor = document.createElement('input');
div.insertBefore(inputCoor, div.children[0]);

var divBord = document.createElement('div');
div.insertBefore(divBord, div.children[1]);
divBord.setAttribute('Class', "bord");
divBord.setAttribute('Id', "bord");

divBord.addEventListener('mousemove', function (event) {
	inputCoor.value = event.pageX + ':' + event.pageY;
})

var divCircle = document.createElement('div');
divBord.appendChild(divCircle);
divCircle.setAttribute('Class', "circle");
divCircle.setAttribute('Id', "circle");
divCircle.style.display = "block";
divCircle.style.left = "100px";
divCircle.style.top = "100px";

var divCircle2 = document.createElement('div');
divBord.appendChild(divCircle2);
divCircle2.setAttribute('Class', "circle");
divCircle2.setAttribute('Id', "circle");
divCircle2.style.display = "block";
divCircle2.style.left = "400px";
divCircle2.style.top = "200px";

var infoDivObj = {
	title: divCircle,
	cx: divCircle.getBoundingClientRect().left - divBord.getBoundingClientRect().left,
	cy: divCircle.getBoundingClientRect().top - divBord.getBoundingClientRect().top,
	vEX: 0,
	vEY: 0
};
var infoDivObj2 = {
	title: divCircle2,
	cx: divCircle2.getBoundingClientRect().left - divBord.getBoundingClientRect().left,
	cy: divCircle2.getBoundingClientRect().top - divBord.getBoundingClientRect().top,
	vEX: 0,
	vEY: 0
};
var domArr = [];
domArr.push(infoDivObj);
domArr.push(infoDivObj2);

function contSpeed(coorX, coorY) {
	for (var j = 0; j < domArr.length; j++) {
		var vX = coorX - domArr[j].cx;
		var vY = coorY - domArr[j].cy;
		var vS = Math.sqrt(Math.pow(vX, 2) + Math.pow(vY, 2));	
		domArr[j].vEX = vX / vS;
		domArr[j].vEY = vY / vS
	}
}

function countSpeedStop() {
	for (var i = 0; i < domArr.length; i++) {
		domArr[i].vEX = 0;
		domArr[i].vEY = 0;
	};
}

function drawCircle(domArr, coorX, coorY) {
	var start = Date.now();
	// function countIteration (coor, i) {
	// 	var results;

	// 	if (coor == coorX) {
	// 		if (domArr[i].title.getBoundingClientRect().left - divBord.getBoundingClientRect().left < coorX || domArr[i].title.getBoundingClientRect().left - divBord.getBoundingClientRect().left > coorX) {
	// 			results = (domArr[i].title.getBoundingClientRect().left - divBord.getBoundingClientRect().left) + (domArr[i].vEX * 2);
	// 			console.log(results, "x");
	// 		}
	// 		else if (domArr[i].title.getBoundingClientRect().left - divBord.getBoundingClientRect().left == coorX) {
	// 			domArr[i].vEX = 0;
	// 		}
	// 	}
	// 	else if (coor == coorY) {
	// 		if (domArr[i].title.getBoundingClientRect().top - divBord.getBoundingClientRect().top < coorY || domArr[i].title.getBoundingClientRect().top - divBord.getBoundingClientRect().top > coorY) {
	// 			results = (domArr[i].title.getBoundingClientRect().top - divBord.getBoundingClientRect().top) + (domArr[i].vEY * 2);
	// 			console.log(results, "y");
	// 		}
	// 		else if (domArr[i].title.getBoundingClientRect().top - divBord.getBoundingClientRect().top == coorY) {
	// 			domArr[i].vEY = 0;
	// 		}
	// 	}
	// 	return results;
	// };
	var property = 0;
	function frame() {
		var start = Date.now();
		console.log(start);
		var startOld = 0;
		property++;
		for (var i = 0; i < domArr.length; i++) {
			var new_x = domArr[i].cx + domArr[i].vEX;
			var new_y = domArr[i].cy + domArr[i].vEY;
			domArr[i].cx = new_x;
			domArr[i].cy = new_y;
			domArr[i].title.style.left = new_x + 'px';
			domArr[i].title.style.top = new_y + 'px';
		}
		startOld = start;
	}

	var timer = setInterval(frame, 10);

}

divBord.addEventListener('mousedown', function (event) {
	if (event.which == 1) {
		var coorX = event.pageX - divBord.getBoundingClientRect().left;
		var coorY = event.pageY - divBord.getBoundingClientRect().top;
		contSpeed(coorX, coorY);
		drawCircle(domArr, coorX, coorY);
	}
})

divBord.addEventListener('mouseup', function (event) {
	countSpeedStop();
})