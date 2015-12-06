"use strict";

// var arr = [11, 4, 99, 2, 99, 32, 432, 3234];

// var max = arr[0];

// var index;


// for (var i = 0; i <= arr.length; i++) {
// 	var number = arr[i];


// 	if (number >= max) {
// 		max = number;
// 		index = arr.indexOf(arr[i]);
// 	}
// }

// console.log(max, index);

// for (var i = 0; i < arr.length - 1; i++) {
// 	for (var j = 0; j < arr.length - i - 1; j++) {
// 		if (arr[j] > arr[j + 1]) {
// 			var max = arr[j];
// 			arr[j] = arr[j + 1];
// 			arr[j + 1] = max;
// 		}
// 	}
// }


// console.log(arr);


// моя матрица !!!! умножение матриц


// var arr = [];
// var arr2 = [];
// var Str = +prompt("Сколько строк будет в матрице arr", "");
// stringToObj(Str, arr);
// var Str2 = +prompt("Сколько строк будет в матрице arr2", "");
// stringToObj(Str2, arr2);


// var arr3 = [];

// function stringToObj (str, arr) {

// 	for (var i = 0; i < str; i++) {
// 		var strToArr;
// 		strToArr = prompt("Строчка " + (i + 1), "");
// 		strToArr = strToArr.split(', ');
// 		arr.push(new Array());
// 		for (var j = 0; j < strToArr.length; j++) {
// 			arr[i][j] = strToArr[j];
// 		}
// 	}

// 	return arr;
// };

// console.log(arr, arr2);

// function getMatrix (arr, arr2) {

// 	for (var i = 0; i < arr.length; i++) {
// 		arr3.push(new Array());
// 		for (var j = 0; j < arr.length; j++) {
// 			arr3[i].push(0);
// 		}
// 	}

// 	for (var i = 0; i < arr.length; i++) {
// 		for (var k = 0; k < arr2[i].length; k++) {
// 			for (var j = 0; j < arr[k].length; j++) {

// 				arr3[i][k] +=  arr[i][j] * arr2[j][k];
// 			}
// 		}
// 	}

// 	return arr3;
// };

// console.log("arr3", getMatrix(arr, arr2));




// var leader = {
//   name: "Василий Иванович",
//   age: 35
// };


// var arr = JSON.stringify(leader);

// console.log(arr);

// leader = JSON.parse(arr);

// console.log(leader);
// 


// divcik.addEventListener("click", function() {
// 	document.getElementById("divcik").style.background = "#000";
// });




//Изменение цвета элемента за счет клика на элемент по кругу
// var r = "red, green, blue";

// var arr = [];
// arr = r.split(', ');

// function getColorCub (arr) {
	
// };
// // for (var i = 0; i < arr.length; i++) {
// // 	console.log(arr[i]);

// // };
// var div = document.getElementById("divcik");

// // div.style.backgroundColor = arr[0];
// div.classList.add("red");

// var divStyle = window.getComputedStyle(div).backgroundColor;
// var divBaCol;
// divBaCol = div.style.backgroundColor;
// var a;
// var h1 = document.createElement('h1');
// h1.innerHTML = 'Красный';
// divLi.insertBefore(h1, divLi.children[0]);
// h1.setAttribute('Id', "h1");
// divcik.addEventListener("click", function() {
// 	if (div.classList.contains("red") == true) {
// 		// div.style.backgroundColor = arr[1];
// 		// divBaCol = arr[1];
// 		h1.innerHTML = 'Зеленый';
// 		div.classList.remove("red");
// 		div.classList.add("green");
// 	} else if (div.classList.contains("green") == true) {
// 		// div.style.backgroundColor = arr[2];
// 		// divBaCol = arr[2];
// 		h1.innerHTML = 'Синий';
// 		div.classList.remove("green");
// 		div.classList.add("blue");
// 	} else {
// 		// div.style.backgroundColor = arr[0];
// 		// divBaCol = arr[0];
// 		h1.innerHTML = 'Красный';
// 		div.classList.remove("blue");
// 		div.classList.add("red");
// 	}
// 	div.style.backgroundColor = divBaCol;
// });
// console.log(divBaCol);
// console.log(divStyle);



// Вывод данных из массива по клику


// var arr = ["wife", "smoll", "ass", "big", "smoll", "4", 4, "sdfsdf"];



// var div = document.getElementById("divcik");


// var h1 = document.createElement('h1');
// h1.innerHTML = arr[0];
// divLi.insertBefore(h1, divLi.children[0]);
// h1.setAttribute('Id', "h1");
// var i = 0;
// h1.addEventListener("click", function() {
// 	if (i < arr.length - 1) {
// 		i = i + 1;
// 		h1.innerHTML = arr[i];
// 	} else if (i = arr.length - 1) {
// 		// div.style.backgroundColor = arr[2];
// 		// divBaCol = arr[2];
// 		i = 0;
// 		h1.innerHTML = arr[i]
// 	}
	
// });

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var div = document.getElementById("divcik");

var position = [];

var positionObj = {};

var idCounter = 0;

// var divMenu = document.getElementById('sweetsMenu');

// var span = document.createElement('span');
// span.setAttribute('Class', "title");
// divMenu.insertBefore(span, divMenu.children[0]);
// span.innerHTML = "Сладости";

// var ul = document.createElement('ul');
// divMenu.insertBefore(ul, divMenu.children[1]);

// var liFirst = document.createElement('li');
// ul.insertBefore(liFirst, ul.children[0]);
// liFirst.innerHTML = "Торт";

// var liSecondary = document.createElement('li');
// ul.insertBefore(liSecondary, ul.children[1]);
// liSecondary.innerHTML = "Пончик";

// var liThird = document.createElement('li');
// ul.insertBefore(liThird, ul.children[2]);
// liThird.innerHTML = "";

var divContent = document.getElementById('content');

var form = document.createElement('form');
divLi.insertBefore(form, divLi.children[0]);
form.setAttribute('Id', "formInfo");
form.setAttribute('Action', "/submit");
form.setAttribute('Name', "person");

// var formData = new FormData(document.forms.person);
var formData = new FormData(document.getElementById('form'));

var xhr = new XMLHttpRequest();
xhr.open("POST", "/polls/get_news/", true);
xhr.send(formData);

// var xhr = new XMLHttpRequest();

// var json = JSON.stringify({
//   name: "Виктор",
//   surname: "Цой"
// });

// xhr.open("POST", '/polls/get_news/', true)
// xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

// // xhr.onreadystatechange = ...;

// // Отсылаем объект в формате JSON и с Content-Type application/json
// // Сервер должен уметь такой Content-Type принимать и раскодировать
// xhr.send(json);


var divBox = document.createElement('div');
divBox.setAttribute('Id', "divBox");
formInfo.insertBefore(divBox, formInfo.children[0]);

var divForm1Str = document.createElement('div');
divForm1Str.classList.add('divForm');
divForm1Str.setAttribute('Id', "DF");
formInfo.insertBefore(divForm1Str, formInfo.children[1]);

var labelTitle = document.createElement('Label');
labelTitle.innerHTML = "Title";
labelTitle.setAttribute('For', "inputInfo");
divForm1Str.insertBefore(labelTitle, divForm1Str.children[0]);

var input = document.createElement('input');
input.setAttribute('Id', "inputInfo");
input.setAttribute('Value', "");
input.setAttribute('Name', "new_type");
input.setAttribute('Value', "science");
// input.setAttribute('New_type', "science");
divForm1Str.insertBefore(input, divForm1Str.children[1]);
document.getElementById('inputInfo').focus();

inputInfo.onblur = function () {
	if (isNaN(input.value)) {
		input.classList.add("error");
		input.focus();
		input.value = "Введите данные Числовые";
	}
	else {
		input.classList.remove("error");
		// input.value = "";
	}
};

var inputSubmit = document.createElement('input');
inputSubmit.setAttribute('Type', "button");
inputSubmit.setAttribute('Id', "inputSubmit");
inputSubmit.setAttribute('Value', "Добавить");
divForm1Str.insertBefore(inputSubmit, divForm1Str.children[2]);

var changeOrder = document.createElement('input');
changeOrder.setAttribute('Type', "button");
changeOrder.setAttribute('Class', "button");
changeOrder.setAttribute('Value', "Сортировать");
divForm1Str.appendChild(changeOrder);

var divForm2Str = document.createElement('div');
divForm2Str.classList.add('divForm2', 'divForm');
divForm2Str.setAttribute('Id', "DF2");
formInfo.insertBefore(divForm2Str, formInfo.children[2]);

var inputName = document.createElement('input');
inputName.setAttribute('Id', "inputNameForm");
inputName.setAttribute('Class', "inputName");
inputName.setAttribute('Value', "");
divForm2Str.insertBefore(inputName, divForm2Str.children[1]);

var labelName = document.createElement('label');
labelName.innerHTML = "Имя";
labelName.setAttribute('For', "inputNameForm");
divForm2Str.insertBefore(labelName, divForm2Str.children[0]);

var divForm3Str = document.createElement('div');
divForm3Str.classList.add('divForm3', 'divForm');
divForm3Str.setAttribute('Id', "DF3");
formInfo.insertBefore(divForm3Str, formInfo.children[3]);

var inputAge = document.createElement('input');
inputAge.setAttribute('Id', "inputAgeForm");
inputAge.setAttribute('Class', "inputAge");
inputAge.setAttribute('Value', "");
divForm3Str.insertBefore(inputAge, divForm3Str.children[1]);

var labelAge = document.createElement('Label');
labelAge.innerHTML = "Возраст";
labelAge.setAttribute('For', "inputAgeForm");
divForm3Str.insertBefore(labelAge, divForm3Str.children[0]);

var buttonJson = document.createElement('input');
buttonJson.setAttribute('Type', "button");
buttonJson.setAttribute('Id', "buttonJson");
buttonJson.setAttribute('Value', "Json");
formInfo.insertBefore(buttonJson, formInfo.children[4]);
buttonJson.innerHTML = "JSON";

var h4Json = document.createElement('h4');
formInfo.insertBefore(h4Json, formInfo.children[5]);

var divMenu = document.createElement('div');
divMenu.setAttribute('Class', "divMenu");
divMenu.setAttribute('Id', "divMenuId");
divContent.insertBefore(divMenu, divContent.children[0]);

var ul = document.createElement('ul');
divMenu.appendChild(ul);
// button.addEventListener('click', loadPhones());
// 
// inputInfo.onblur = function () {
// 	if (isNaN(input.value)) {
// 		input.classList.add("error");
// 		input.focus();
// 		input.value = "Введите данные Числовые";
// 	}
// 	else {
// 		input.classList.remove("error");
// 		// input.value = "";
// 	}
// };

function loadPhones() {
	var xhr = new XMLHttpRequest();

	xhr.open('POST', '/static/polls/phones.json', true);
	xhr.send();

	xhr.onreadystatechange = function () {
		if (xhr.readyState != 4) return;

		h4Json.innerHTML = "Готово";

		if (xhr.status != 200) {
			alert(xhr.status + ': ' + xhr.statusText);
		} else {
			var Jsontext = JSON.parse(xhr.responseText);
			for (var g = 0; g < Jsontext.length; g++) {
				var divInfo = document.createElement('div');
				document.body.insertBefore(divInfo, document.body.children[1]);
				divInfo.setAttribute('Id', "div");
				divInfo.innerHTML = Jsontext[g].name;
			}
        // divInfo.innerHTML = JSON.parse(xhr.responseText);
    }
}

    h4Json.innerHTML = "Загружаю...";
    h4Json.disabled = true;
};
buttonJson.addEventListener('click', function () {
	loadPhones();
});

function getFirst () {
	var form = document.createElement('form');
	divLi.insertBefore(form, divLi.children[0]);
	form.setAttribute('Id', "formInfo");

	var divBox = document.createElement('div');
	divBox.setAttribute('Id', "divBox");
	formInfo.insertBefore(divBox, formInfo.children[0]);

	var divForm1Str = document.createElement('div');
	divForm1Str.classList.add('divForm');
	divForm1Str.setAttribute('Id', "DF");
	formInfo.insertBefore(divForm1Str, formInfo.children[1]);

	var labelTitle = document.createElement('Label');
	labelTitle.innerHTML = "Title";
	labelTitle.setAttribute('For', "inputInfo");
	divForm1Str.insertBefore(labelTitle, divForm1Str.children[0]);

	var input = document.createElement('input');
	input.setAttribute('Id', "inputInfo");
	input.setAttribute('Value', "");
	divForm1Str.insertBefore(input, divForm1Str.children[1]);
	document.getElementById('inputInfo').focus();

	// inputInfo.onblur = function () {
	// 	if (isNaN(input.value)) {
	// 		input.classList.add("error");
	// 		input.focus();
	// 		input.value = "Введите данные Числовые";
	// 	}
	// 	else {
	// 		input.classList.remove("error");
	// 	// input.value = "";
	// 	}
	// };

	var inputSubmit = document.createElement('input');
	inputSubmit.setAttribute('Type', "button");
	inputSubmit.setAttribute('Id', "inputSubmit");
	inputSubmit.setAttribute('Value', "Добавить");
	divForm1Str.insertBefore(inputSubmit, divForm1Str.children[2]);

	var changeOrder = document.createElement('input');
	changeOrder.setAttribute('Type', "button");
	changeOrder.setAttribute('Class', "button");
	changeOrder.setAttribute('Value', "Сортировать");
	divForm1Str.appendChild(changeOrder);

	var divForm2Str = document.createElement('div');
	divForm2Str.classList.add('divForm2', 'divForm');
	divForm2Str.setAttribute('Id', "DF2");
	formInfo.insertBefore(divForm2Str, formInfo.children[2]);

	var inputName = document.createElement('input');
	inputName.setAttribute('Id', "inputNameForm");
	inputName.setAttribute('Class', "inputName");
	inputName.setAttribute('Value', "");
	divForm2Str.insertBefore(inputName, divForm2Str.children[1]);

	var labelName = document.createElement('label');
	labelName.innerHTML = "Имя";
	labelName.setAttribute('For', "inputNameForm");
	divForm2Str.insertBefore(labelName, divForm2Str.children[0]);

	var divForm3Str = document.createElement('div');
	divForm3Str.classList.add('divForm3', 'divForm');
	divForm3Str.setAttribute('Id', "DF3");
	formInfo.insertBefore(divForm3Str, formInfo.children[3]);

	var inputAge = document.createElement('input');
	inputAge.setAttribute('Id', "inputAgeForm");
	inputAge.setAttribute('Class', "inputAge");
	inputAge.setAttribute('Value', "");
	divForm3Str.insertBefore(inputAge, divForm3Str.children[1]);

	var labelAge = document.createElement('Label');
	labelAge.innerHTML = "Возраст";
	labelAge.setAttribute('For', "inputAgeForm");
	divForm3Str.insertBefore(labelAge, divForm3Str.children[0]);
};


function reDrow() {
	if (document.getElementById('divInfo') != null) {
		for (var h = divBox.children.length - 1; h >= 0; h--) {
			// document.getElementById('divBox').removeChild(document.getElementById('divInfo'));
			divBox.children[h].remove();
		}
	}
	for (var k = 0; k < position.length; k++) {
		var divInfo = document.createElement('div');
		divInfo.setAttribute('Id', "divInfo");
		divBox.appendChild(divInfo);


		var h2 = document.createElement('h2');
		h2.setAttribute('Id', "h2Info");
		divInfo.insertBefore(h2, divInfo.children[0]);
		h2.innerHTML = position[k].title;

		var inputRemove = document.createElement('input');
		inputRemove.setAttribute('Type', "button");
		inputRemove.setAttribute('Id', "buttonRemove");
		inputRemove.setAttribute('Value', "Удалить");
		inputRemove.classList.add("d");
		divInfo.appendChild(inputRemove);

		function constructor(index) {
			function _handleClick(event) {
				position.splice(index, 1);
				reDrow();
			}
			return _handleClick;
		}

		var handleClick = constructor(k);

		function constructor2 (index) {
			function _handleClick2 (event) {
			var divAlertCreate = event.target.getAttribute('Id')
			if (divAlertCreate !== "buttonRemove") {
				var divAlert = document.createElement('div');
				divAlert.setAttribute('Id', "alert");
				divAlert.setAttribute('Class', "alert2");
				document.body.appendChild(divAlert);

				form.setAttribute('Class', "formInfo");

				var divAlertChild = document.createElement('div');
				divAlertChild.setAttribute('Id', "message");
				divAlertChild.setAttribute('Class', "alertChild");
				divAlert.appendChild(divAlertChild);

				var h4AlertTitle = document.createElement('h4');
				h4AlertTitle.setAttribute('Id', "titleAlert");
				h4AlertTitle.setAttribute('Class', "h4Text");
				divAlertChild.insertBefore(h4AlertTitle, divAlertChild.children[0]);
				h4AlertTitle.innerHTML = "Title" + " : " + position[index].title;

				var h4AlertName = document.createElement('h4');
				h4AlertName.setAttribute('Id', "nameAlert");
				h4AlertName.setAttribute('Class', "h4Text");
				divAlertChild.insertBefore(h4AlertName, divAlertChild.children[1]);
				h4AlertName.innerHTML = "Имя" + " : " + position[index].name;

				var h4AlertAge = document.createElement('h4');
				h4AlertAge.setAttribute('Id', "ageAlert");
				h4AlertAge.setAttribute('Class', "h4Text");
				divAlertChild.insertBefore(h4AlertAge, divAlertChild.children[2]);
				h4AlertAge.innerHTML = "Возраст" + " : " + position[index].age;

				var inputClose = document.createElement('input');
				inputClose.setAttribute('Class', "inputClose");
				inputClose.setAttribute('Type', "button");
				inputClose.setAttribute('Value', "Закрыть");
				divAlertChild.insertBefore(inputClose, divAlertChild.children[3]);

				inputClose.addEventListener("click", function (event) {
					divAlert.remove();
					form.classList.remove('formInfo');
				});
				divAlert.addEventListener("click", function (event) {
					var target = event.target;

					var divAlertClick = target.getAttribute('Id');
					// var h4AlertText = target.getAttribute
					if (divAlertClick == 'message'|| target.getAttribute('Class') == 'h4Text') {
						return;
					}
					else {
						divAlert.remove();
						form.classList.remove('formInfo');
					}
				});
				}
				else {
					return;
				}
			};
			return _handleClick2;
		};

		var handleClick2 = constructor2(k);

		inputRemove.addEventListener("click", handleClick);

		divInfo.addEventListener("click", handleClick2);
		// divInfo.addEventListener('click', function(event) {
		// 	alert(positionObj);
		// });
	};
};


inputSubmit.addEventListener("click", function(event) {
	if (input.value != "") {
		idCounter++;
		positionObj = {id: idCounter, title: input.value, name: inputName.value, age: inputAge.value};
		position.push(positionObj);
		// console.log(position);
		input.value = "";
		inputName.value = "";
		inputAge.value = "";
		reDrow();
	}
});

changeOrder.addEventListener('click', function(event) {
	if (position != []) {
		for (var i = 0; i < position.length / 2; i++) {
			var j = position[i];
			var l = position.length;
			var h = position[l - 1 - i];
			position[i] = h;
			position[l - 1 - i] = j;
		}
		reDrow (position);
	}
});


// divMenu.addEventListener('mouseover', function() {
// 		divMenu.classList.add("divMenuMause");
// });

// divMenu.addEventListener('mouseout', function () {
// 	divMenu.classList.remove("divMenuMause");
// })

// function createNewDom () {
// 	formInfo.remove();
// 	var divNewDom = document.createElement('div');
// 	divNewDom.setAttribute('Class', "newDom");
// 	divLi.insertBefore(divNewDom, divLi.children[0]);
// 	var inputBack = document.createElement('input');
// 	inputBack.setAttribute('Value', "Вернуться");
// 	divNewDom.insertBefore(inputBack, divNewDom.children[0]);
// 	inputBack.addEventListener('click', function () {
// 		divNewDom.remove();
// 		reDrow()
// 	});
// };

var items = ["Главная", "Галерея", "Контакты", "ЧАВО"];

items.forEach(function (item) {
	var li = document.createElement('li');
	ul.appendChild(li);
	var aLink = document.createElement('a');
	aLink.textContent = item;
	// aLink.setAttribute('Href', "");
	li.appendChild(aLink);
	aLink.addEventListener('click', function () {
		formInfo.remove();
		var divNewDom = document.createElement('div');
		divNewDom.setAttribute('Class', "newDom");
		divLi.insertBefore(divNewDom, divLi.children[0]);
		var inputBack = document.createElement('input');
		inputBack.setAttribute('Value', "Вернуться");
		divNewDom.insertBefore(inputBack, divNewDom.children[0]);
		inputBack.addEventListener('click', function () {
			divNewDom.remove();
			getFirst ();
		});
	});
});

// использование
// var menu = new Menu({
//   elem: document.getElementById('sweetsMenu')
// });

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// var div = document.getElementById("divcik");

// var position = [];

// var clickSort = 1;


// var form = document.createElement('form');
// divLi.insertBefore(form, divLi.children[0]);
// form.setAttribute('Id', "formInfo");

// var divBox = document.createElement('div');
// divBox.setAttribute('Id', "divBox");
// formInfo.insertBefore(divBox, formInfo.children[0]);


// var input = document.createElement('input');
// input.setAttribute('Id', "inputInfo");
// input.setAttribute('Value', "");
// formInfo.insertBefore(input, formInfo.children[1]);

// var inputSubmit = document.createElement('input');
// inputSubmit.setAttribute('Type', "button");
// inputSubmit.setAttribute('Id', "inputSubmit");
// formInfo.appendChild(inputSubmit);

// var i = 0;

// var arr = [];

// var divInfo;

// var divInfo2;

// var inputRemove;


// inputSubmit.addEventListener("click", function() {
// 	if (input.value != "") {
// 		i++;

// 		var divInfo = document.createElement('div');
// 		// divInfo.setAttribute('Id', "divInfo");
// 		divInfo.setAttribute('Id', i);
// 		divInfo.setAttribute('Class', "divInfo");
// 		divBox.appendChild(divInfo);
// 		// divInfo.classList.add(i)

// 		var h2 = document.createElement('h2');
// 		h2.setAttribute('Id', "h2Info");
// 		divInfo.insertBefore(h2, divInfo.children[0]);
// 		h2.innerHTML = input.value;

// 		input.value = "";

// 		inputRemove = document.createElement('input');
// 		inputRemove.setAttribute('Type', "button");
// 		inputRemove.setAttribute('Id', "buttonRemove");
// 		inputRemove.setAttribute('Value', "Удалить");
// 		inputRemove.setAttribute('Class', i + "d");
// 		divInfo.appendChild(inputRemove);

// 		inputRemove.addEventListener("click", function() {
// 			// divInfo.parentNode.removeChild(divInfo);
// 			i = 0;
// 			divInfo.remove();
// 		});
// 		arr.push(i);
// 	}
// });


// var inputSotr = document.createElement('input');
// inputSotr.setAttribute('Type', "Button");
// inputSotr.setAttribute('Class', "Button");
// inputSotr.setAttribute('Volue', "Сортировать");
// formInfo.insertBefore(inputSotr, formInfo.children[2]);


// inputSotr.addEventListener('click', function() {
// 	if (document.body.children[0].children[1].children[0].children[0].children[0] != null) {
// 		position = [];

// 		var divBox2 = document.createElement('div');
// 		divBox2.setAttribute('Id', "divBox2");

// 		var divBox3 = document.createElement('div');
// 		divBox3.setAttribute('Id', "divBox3");
// 		for (var j = 0; j < i; j++) {
// 			position[j] = document.body.children[0].children[1].children[0].children[0].children[j];
// 		};
// 		console.log(position, ">>>>>");
// 		var pos = +position[0].getAttribute('Id');
// 		var posNext = +position[1].getAttribute('Id');
// 		if (pos > posNext) {
// 			for (var k = 0; k < position.length - 1; k++) {
// 				for (var j = 0; j < position.length - k - 1; j++) {
// 					var posJ = +position[j].getAttribute('Id');
// 					var posJNext = +position[j + 1].getAttribute('Id');
// 					var max = posJ;
// 					posJ = posJNext;
// 					posJNext = max;
// 					position[j + 1].setAttribute('Id', posJ);
// 					position[j].setAttribute('Id', posJNext);
// 				};
// 				inputRemove.addEventListener("click", function() {
// 					for (var n = 0; n < position.length; n++) {
// 						inputRemove = document.getElementById('n');
// 					};
// 						document.getElementsByClassName('divInfo').remove();
// 				});
// 			};
// 			for (var l = 0; l < position.length; l++) {
// 				var divPosition = position[l];
// 				var divInfo2 = divPosition.cloneNode(true);
// 				divBox3.insertBefore(divInfo2, divBox3.children[0]);
// 			};
// 			var elem2 = document.getElementById("divBox2");
// 			elem2.remove();
// 			formInfo.insertBefore(divBox3, formInfo.firstChild);

// 			console.log(position, "++++++");

// 			// inputRemove.addEventListener("click", function() {
// 			// for (var n = 0; n < position.length; n++) {
// 			// 	inputRemove = document.getElementsByClassName('n');
// 			// };
// 			// 	document.getElementById('divInfo').remove();
// 			// });
// 			// inputRemove = document.getElementById('buttonRemove');
// 			// inputRemove.addEventListener("click", function() {
// 			// 	document.getElementById('divInfo').remove();
// 			// });
// 		}
// 		else if (pos < posNext) {
// 			for (var k = 0; k < position.length - 1; k++) {
// 				for (var y = 0; y < position.length - k - 1; y++) {
// 					var posY = +position[y].getAttribute('Id');
// 					var posYNext = +position[y + 1].getAttribute('Id');
// 					var min = posY;
// 					posY = posYNext;
// 					posYNext = min;
// 					position[y + 1].setAttribute('Id', posY);
// 					position[y].setAttribute('Id', posYNext);

// 				};
// 			};
// 			divInfo = document.getElementById(2).cloneNode(true);
// 			// divInfo = document.getElementsByClassName('divInfo');
// 			for (var g = 0; g < position.length; g++) {
// 				var divPosition = position[g];
// 				var divInfo2 = divPosition.cloneNode(true);
// 				divBox2.insertBefore(divInfo2, divBox2.children[0]);

// 			};
// 			if (clickSort == 1) {
// 				// formInfo.removeChild(divBox);
// 				document.getElementById('divBox').remove();
// 				formInfo.insertBefore(divBox2,formInfo.firstChild);
// 			}
// 			else if (clickSort > 1) {
// 				var elem = document.getElementById("divBox3");
// 				document.getElementById("divBox3").remove();
// 				formInfo.insertBefore(divBox2, formInfo.firstChild);
// 			}
// 			// inputRemove = document.getElementById('buttonRemove'); 
// 			inputRemove = document.getElementById('buttonRemove');
// 			inputRemove.addEventListener("click", function() {
// 				document.getElementById(1).remove();
// 			});
// 			// for (var i = 0; i < position.length; i++) {
// 			// 	var divInfo2 = position[i].cloneNode(true);
// 			// 	divBox.insertBefore(position[i], divBox.children[0]);
// 			// };
// 			// divInfo.parentNode.insertBefore(divInfo2, divInfo.nextSibling);
// 			console.log(position);
// 			// inputRemove = document.createElement('input');
// 			// inputRemove.setAttribute('Type', "button");
// 			// inputRemove.setAttribute('Id', "buttonRemove");
// 			// inputRemove.setAttribute('Value', "Удалить");
// 			// 
// 			// 
// 			// inputRemove.setAttribute('Class', k + 1);
// 			// inputRemove = document.getElementById('buttonRemove');
// 			// inputRemove.addEventListener("click", function() {
// 			// 	document.getElementById('divInfo').remove();
// 			// });
// 		}
// 		clickSort++;
// 	}
// });