"use strict";

var div = document.getElementById('content');

var form = document.createElement('form');
form.setAttribute('Id', "form");
div.appendChild(form);

var inputText = document.createElement('input');
inputText.setAttribute('Name', "new_type");
inputText.setAttribute('Value', "science");
form.insertBefore(inputText, form.children[0]);

var inputButton = document.createElement('input');
inputButton.setAttribute('Type', "button");
inputButton.setAttribute('Value', "Отправить");
form.insertBefore(inputButton, form.children[1]);

inputButton.addEventListener('click', function (event) {
	var formData = new FormData(document.getElementById('form'));

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/polls/get_news/", true);
	xhr.send(formData);
	inputText.value = "";
});

var inputAnswer = document.createElement('input');
inputAnswer.setAttribute('Type', "button");
inputAnswer.setAttribute('Name', "new_type");
inputAnswer.setAttribute('Value', "science");
form.insertBefore(inputAnswer, form.children[2]);

inputAnswer.addEventListener('click', function (event) {
	var formData = new FormData(document.getElementById('form'));
	// 1. Создаём новый объект XMLHttpRequest
	var xhr = new XMLHttpRequest();

	// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
	xhr.open('POST', '/polls/get_news/', true);
	// xhr.open('POST', '/static/polls/phones.json', true);

	// 3. Отсылаем запрос
	xhr.send(formData);

		xhr.onreadystatechange = function () {
		if (xhr.readyState != 4) {
			console.log(xhr.readyState, xhr.status);
			return;
		}


		if (xhr.status != 200) {
			alert(xhr.status + ': ' + xhr.statusText);
		}
		else {
			console.log(xhr.readyState, xhr.status)
			// var Jsontext = JSON.parse(xhr.responseText);
			// alert(xhr.responseText);
			var divText = document.createElement('div');
			form.insertBefore(divText, form.children[3]);
			divText.setAttribute('Class', "divText");
			divText.innerHTML = xhr.responseText;
			// for (var g = 0; g < Jsontext.length; g++) {
			// 	var divInfo = document.createElement('div');
			// 	document.body.insertBefore(divInfo, document.body.children[1]);
			// 	divInfo.setAttribute('Id', "div");
			// 	divInfo.innerHTML = Jsontext[g].name;
			// }
        // divInfo.innerHTML = JSON.parse(xhr.responseText);
    }
}
});

var divBox = document.createElement('div');
divBox.setAttribute('Class', "box");
div.insertBefore(divBox, div.children[1]);

var divCors = document.createElement('div');
divCors.setAttribute('Class', "cors");
divBox.appendChild(divCors);

function makeEaseOut (timing) {
	return function (timeFraction) {
		return 1 - timing(1 - timeFraction);
	};
};

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
}

function bounce(timeFraction) {
	for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
		if (timeFraction >= (7 - 4 * a) / 11) {
			return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
		}
	};
};

var bounceEaseOut = makeEaseOut(bounce);

divCors.addEventListener('click', function (event) {
	animate({
		duration: 3000,
		timing: bounceEaseOut,
		draw: function(progress) {
			divCors.style.left = progress * 520 + 'px';
	}});
});











var CommentBox = React.createClass({
	loadCommentsFromServer: function() {
		$.ajax({
			url: this.props.url,
			// type: 'POST',
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
		console.log(data);
	},
	gatInitialState: function() {
		return {data: []};	
	},
	componentDidMount: function() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollinterval);
	},
	render: function () {
		return (
			<div className="commentBox" id="id">
				<CommentList data={this.state.data} />
				<ButtonBox />
			</div>
		);		
	}
});



var CommentBox = React.createClass({
	displayName: "CommentBox",

	loadCommentsFromServer: function loadCommentsFromServer() {
		$.ajax({
			url: this.props.url,
			type: 'POST',
			dataType: 'json',
			cache: false,
			success: (function (data) {
				this.setState({ data: data });
			}).bind(this),
			error: (function (xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}).bind(this)
		});
	},
	gatInitialState: function gatInitialState() {
		return { data: [] };
	},
	componentDidMount: function componentDidMount() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollinterval);
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "commentBox", id: "id" },
			React.createElement(CommentList, { data: this.state.data }),
			React.createElement(ButtonBox, null)
		);
	}
});

babel --presets rea src --watch --out-dir build