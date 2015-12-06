"use strict";

var div = document.getElementById('content');

var inputCoor = document.createElement('input');
div.insertBefore(inputCoor, div.children[0]);

var divBord = document.createElement('div');
div.insertBefore(divBord, div.children[1]);
divBord.setAttribute('Class', "bord");
divBord.setAttribute('Id', "bord");

var inputBox = document.createElement('input');
inputBox.setAttribute('Type', "button");
inputBox.setAttribute('Class', "boxArt");
inputBox.setAttribute('Value', "Кидалово))");
div.insertBefore(inputBox, div.children[2]);

var inputAssembly = document.createElement('input');
inputAssembly.setAttribute('Type', 'button');
inputAssembly.setAttribute('Value', 'Переключиться');
div.insertBefore(inputAssembly, div.children[3]);
inputAssembly.style.color = "grey";

var domArr = [];

var divInfoArr = [];

var infoArr = {};

var gameMode = "createMode";

var h4 = document.createElement('h4');
h4.innerHTML = "Режим: Создания";
div.insertBefore(h4, div.children[4]);

inputAssembly.addEventListener('click', function (event) {
	if (gameMode == "createMode") {
		if (domArr.length >= 1) {
			gameMode = "animateMode";
			h4.innerHTML = "Режим: Анимации";
			divBord.style.background = "#8a9597";
			var timer = setInterval(frame, 100);
		}
		else {
			inputAssembly.style.color = "grey";
			h4.innerHTML = "Режим: Создания. Для перехода в режим Анимации надо создать хотя бы один эелемент";
			return;
		}
	}	
	else if (gameMode == "animateMode") {
		gameMode = "gravitiMode";
		h4.innerHTML = "Режим гравитации";
		divBord.style.background = "grey";
	}
	else if (gameMode == "gravitiMode") {
		gameMode = "createMode";
		h4.innerHTML = "Гравитация";
		divBord.style.background = "black";
	}
})





// var divCircle = document.createElement('div');
// divBord.appendChild(divCircle);
// divCircle.setAttribute('Class', "circle");

divBord.addEventListener('mousemove', function (event) {
	inputCoor.value = event.pageX + ':' + event.pageY;
})

// function linear(timeFraction) {
// 	return timeFraction;
// };

function animate(options) {

	var start = performance.now();

	requestAnimationFrame(function animate(time) {
    // timeFraction от 0 до 1
	    var timeFraction = (time - start) / options.duration;
	    if (timeFraction > 1) timeFraction = 1;

	    // текущее состояние анимации
	    var progress = options.timing(timeFraction)

	    options.draw(progress);

	    if (timeFraction < 1) {
	    	requestAnimationFrame(animate);
	    }

	});
};
var h = 0;

divBord.addEventListener('mousedown', function (event) {
	// inputCoor.value = event.clientX + ':' + event.clientY;
	// divCircle.style.left = event.clientX - 5 + "px";
	// divCircle.style.top = event.clientY - 26 + "px";
	if (event.which == 1) {
		var coorX = event.pageX - divBord.getBoundingClientRect().left;
		var coorY = event.pageY - divBord.getBoundingClientRect().top;
		if (gameMode == "createMode") {
			var divCircle = document.createElement('div');
			divBord.appendChild(divCircle);
			divCircle.setAttribute('Class', "circle");
			divCircle.setAttribute('Id', "circle2");
			divCircle.style.display = "block";
			inputAssembly.style.color = "black";
			infoArr = {
				title: divCircle,
				cx: coorX,
				cy: coorY,
				vEX: 0,
				vEY: 0,
				aX: 0,
				aY: 1
			};
			domArr.push(infoArr);
			h++;
				animate({
					duration: 500,
					timing: function (x, timeFraction) {
								return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
							}.bind(null, 1.5),
					draw: function(progress) {
						divCircle.style.width = progress * 50 + 10 + 'px';
						divCircle.style.height = progress * 50 + 10 + 'px';
						divCircle.style.borderRadius = progress * 50 / 2 + 5 + 'px';
						divCircle.style.top = (event.clientY - divBord.getBoundingClientRect().top) - 5 - (progress * 25)  + 'px';
						divCircle.style.left = (event.clientX - divBord.getBoundingClientRect().left) - 5 - (progress * 25)  + 'px';
			}});
		}
		else if (gameMode == "animateMode" || gameMode == "gravitiMode") {
			if (event.which == 1) {
				var coorX = event.pageX - divBord.getBoundingClientRect().left;
				var coorY = event.pageY - divBord.getBoundingClientRect().top;
				contSpeed(coorX, coorY);
				drawCircle(domArr, coorX, coorY);
			}
		}
	}
})

function makeEaseOut(timing) {
	return function(timeFraction) {
		return 1 - timing(1 - timeFraction);
	}
}


function bounce(timeFraction) {
	for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
		if (timeFraction >= (7 - 4 * a) / 11) {
			return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
		}
	}
}

var bounceEaseOut = makeEaseOut(bounce);

inputBox.addEventListener('click', function (event) {
		for (var j = 0; j < domArr.length; j++) {
			divInfoArr[j] = domArr[j].title.getBoundingClientRect().top;
		}
		console.log(domArr[0]);
		animate({
			duration: 10000,
			timing: bounceEaseOut,
			draw: function(progress) {
				for (var i = 0; i < domArr.length; i++) {
					domArr[i].title.style.top = progress * (340 - divInfoArr[i]) + divInfoArr[i] + 'px';
					// domArr[i].style.top = progress * (340 - 92) + 92 + 'px';
				};
		}});
})


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function contSpeed(coorX, coorY) {
	for (var j = 0; j < domArr.length; j++) {
		var vX = coorX - domArr[j].cx;
		var vY = coorY - domArr[j].cy;
		var vS = Math.sqrt(Math.pow(vX, 2) + Math.pow(vY, 2));	
		domArr[j].vEX = (vX / vS) * 5;
		domArr[j].vEY = (vY / vS) * 5;
	}
}

function countSpeedStop() {
	for (var i = 0; i < domArr.length; i++) {
		domArr[i].vEX = 0;
		domArr[i].vEY = 0;
	};
}

function getRadius(i) {
	var sumVS = 0;
	for (var j = 0; j < domArr.length; j++) {
		var vX = domArr[i].cx - domArr[j].cx;
		var vY = domArr[i].cy - domArr[j].cy;
		var vS = Math.sqrt(Math.pow(vX, 2) + Math.pow(vY, 2));
		if (j != i) {
			if (vS < 60) {
				sumVS = sumVS + vS;
				// domArr[i].vEX = (vX / vS) * 5;
				// domArr[i].vEY = (vY / vS) * 5;
				console.log("===");
				domArr[i].vEX = (vX / sumVS) * 5;
				domArr[i].vEY = (vY / sumVS) * 5;
				domArr[i].aX = 0.5;
			}
			else {
				domArr[i].aX = 0;
			}
		}
	}
	// domArr[i].vEX = (vX / sumVS) * 5;
	// domArr[i].vEY = (vY / sumVS) * 5;
}

function frame() {
	var start = Date.now();
	var startOld = 0;
	if (gameMode == "animateMode") {
		for (var i = 0; i < domArr.length; i++) {
			getRadius(i);
			// domArr[i].vEX = domArr[i].vEX + domArr[i].aX;
			// domArr[i].vEY = domArr[i].vEY + domArr[i].aY;
			var new_x = domArr[i].cx + domArr[i].vEX;
			var new_y = domArr[i].cy + domArr[i].vEY;
			domArr[i].cx = new_x;
			domArr[i].cy = new_y;
			domArr[i].title.style.left = new_x - 30 + 'px';
			domArr[i].title.style.top = new_y - 30 + 'px';
			if (domArr[i].title.getBoundingClientRect().top <= divBord.getBoundingClientRect().top) {
				domArr[i].vEY = - domArr[i].vEY;
				domArr[i].cy = domArr[i].title.getBoundingClientRect().top - divBord.getBoundingClientRect().top + 60;
				// domArr[i].vEY = - domArr[i].vEY;
			}
			if (domArr[i].title.getBoundingClientRect().left <= divBord.getBoundingClientRect().left) {
				// domArr[i].vEX = domArr[i].vEX * 0.9;
				domArr[i].vEX = - domArr[i].vEX;
				domArr[i].cx = domArr[i].title.getBoundingClientRect().left - divBord.getBoundingClientRect().left + 60;
				// domArr[i].cx = domArr[i].title.getBoundingClientRect().left - divBord.getBoundingClientRect().left;
			}
			if (domArr[i].title.getBoundingClientRect().top >= divBord.getBoundingClientRect().height - domArr[i].title.getBoundingClientRect().height + 21) {
				// domArr[i].vEY = domArr[i].vEY * 0.9;
				// domArr[i].cy = divBord.getBoundingClientRect().height - 31;
				domArr[i].title.style.top = divBord.getBoundingClientRect().height - 60 + "px";
				// console.log("vEY", domArr[i].vEY);
				domArr[i].vEY = - domArr[i].vEY;
				// console.log("vEY", domArr[i].vEY);
				// domArr[i].title.style.top = divBord.getBoundingClientRect().height - 10 + 'px';
				// console.log("Top", domArr[i].title.style.top);
			}
			if (domArr[i].title.getBoundingClientRect().left >= divBord.getBoundingClientRect().left + divBord.getBoundingClientRect().width - 60) {
				// domArr[i].vEX = domArr[i].vEX * 0.9;
				domArr[i].cx = domArr[i].title.getBoundingClientRect().left - divBord.getBoundingClientRect().left;
				domArr[i].vEX = - domArr[i].vEX;
			}
		}
	}
	else if (gameMode == "gravitiMode") {
		for (var i = 0; i < domArr.length; i++) {
			getRadius(i);
			domArr[i].vEX = domArr[i].vEX + domArr[i].aX;
			domArr[i].vEY = domArr[i].vEY + domArr[i].aY;
			var new_x = domArr[i].cx + domArr[i].vEX;
			var new_y = domArr[i].cy + domArr[i].vEY;
			domArr[i].cx = new_x;
			domArr[i].cy = new_y;
			domArr[i].title.style.left = new_x - 30 + 'px';
			domArr[i].title.style.top = new_y - 30 + 'px';
			if (domArr[i].title.getBoundingClientRect().top <= divBord.getBoundingClientRect().top) {
				domArr[i].vEY = - domArr[i].vEY;
			}
			if (domArr[i].title.getBoundingClientRect().left <= divBord.getBoundingClientRect().left) {
				domArr[i].vEX = domArr[i].vEX * 0.9;
				domArr[i].vEX = - domArr[i].vEX;
				domArr[i].cx = domArr[i].title.getBoundingClientRect().left - divBord.getBoundingClientRect().left + 60;
				// domArr[i].cx = domArr[i].title.getBoundingClientRect().left - divBord.getBoundingClientRect().left;
			}
			if (domArr[i].title.getBoundingClientRect().top >= divBord.getBoundingClientRect().height - domArr[i].title.getBoundingClientRect().height + 21) {
				domArr[i].vEY = domArr[i].vEY * 0.9;
				domArr[i].vEY = - domArr[i].vEY;
				// domArr[i].cy = divBord.getBoundingClientRect().height - 30;
				domArr[i].title.style.top = divBord.getBoundingClientRect().height - 60 + "px";
				// console.log("vEY", domArr[i].vEY);
				// domArr[i].vEY = - domArr[i].vEY;
				// console.log("vEY", domArr[i].vEY);
				// domArr[i].title.style.top = divBord.getBoundingClientRect().height - 10 + 'px';
				// console.log("Top", domArr[i].title.style.top);
			}
			if (domArr[i].title.getBoundingClientRect().left >= divBord.getBoundingClientRect().left + divBord.getBoundingClientRect().width - 60) {
				domArr[i].vEX = domArr[i].vEX * 0.9;
				domArr[i].cx = domArr[i].title.getBoundingClientRect().left - divBord.getBoundingClientRect().left;
				domArr[i].vEX = - domArr[i].vEX;
			}
		}
	}
	startOld = start;
}

function drawCircle(domArr, coorX, coorY) {
	frame();
}
divBord.addEventListener('mouseup', function (event) {
	if (gameMode == "animateMode") {
		countSpeedStop();
	}
	else if (gameMode == "gravitiMode") {
		return;
	}
	// countSpeedStop();
})

// window.addEventListener('load', function (event) {
// 	var timer = setInterval(frame, 10);
// 	console.log('>>>>>>');
// })

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


