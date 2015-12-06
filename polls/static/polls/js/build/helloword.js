'use strict';

var NewsBox = React.createClass({
	displayName: 'NewsBox',

	loadCommentsFromServer: function loadCommentsFromServer() {
		$.ajax({
			url: this.props.url,
			type: 'GET',
			dataType: 'json',
			cache: false,
			success: (function (data) {
				this.setState({ data: data, start: 0, end: 10, linkNews: 0, keyId: 0, coords: document.getElementById('box').getBoundingClientRect().bottom - document.body.clientHeight });
			}).bind(this),
			error: (function (xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}).bind(this)
		});
	},
	getInitialState: function getInitialState() {
		return { data: [], start: 0, end: 0, linkNews: 0, keyId: 0, coords: 1 };
	},
	componentDidMount: function componentDidMount() {
		this.loadCommentsFromServer();
		window.addEventListener('scroll', this.corrds);
		setInterval(this.loadCommentsFromServer, this.props.pollinterval);
	},
	getIframeKey: function getIframeKey(link, keyId) {
		var state = this.state;
		state.linkNews = link;
		state.inSelected = true;
		state.keyId = keyId;
		this.setState(state);
	},
	myNews: function myNews() {
		var state = this.state;
		state.end = this.state.end + 5;
		this.setState(state);
	},
	corrds: function corrds() {
		this.setState({ coords: document.getElementById('box').getBoundingClientRect().bottom - document.body.clientHeight });
		console.log(this.state.coords);
		if (this.state.coords <= 50) {
			this.myNews();
			this.setState({ coords: document.getElementById('box').getBoundingClientRect().bottom - document.body.clientHeight });
		}
	},
	render: function render() {
		var getIframeKey = this.getIframeKey;
		var newData = this.state.data.slice(this.state.start, this.state.end);
		var keyIdIsSelected = this.state.keyId;
		var commentListNodes = newData.map(function (NewsLink) {
			var isSelected;
			if (keyIdIsSelected == NewsLink) {
				isSelected = true;
			} else {
				isSelected = false;
			}
			return React.createElement(ItemNewsList, { func: getIframeKey, url: "https://hacker-news.firebaseio.com/v0/item/" + NewsLink + ".json?print=pretty", key: NewsLink, keyId: NewsLink, isSelected: isSelected });
		});
		return React.createElement(
			'div',
			{ className: 'commentBox', id: 'id', onWheel: this._corrds },
			React.createElement(IFrameBox, { paramsLink: this.state.linkNews }),
			React.createElement(ButtonBox, { func: this.myNews }),
			React.createElement(
				'div',
				{ className: 'boxNewsList', id: 'box' },
				commentListNodes
			)
		);
	}
});

var ItemNewsList = React.createClass({
	displayName: 'ItemNewsList',

	loadCommentsFromServer: function loadCommentsFromServer() {
		$.ajax({
			url: this.props.url,
			type: 'GET',
			dataType: 'json',
			cache: false,
			success: (function (data) {
				this.setState({ data: data, isLoad: true });
			}).bind(this),
			error: (function (xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}).bind(this)
		});
	},
	getInitialState: function getInitialState() {
		return { data: [], isLoad: false };
	},
	componentDidMount: function componentDidMount() {
		this.loadCommentsFromServer();
	},
	myClick: function myClick(event) {
		var link = this.state.data.url;
		var keyId = this.props.keyId;
		this.props.func(link, keyId);
	},
	render: function render() {
		// this.getCords();
		var classNameIsSelected = "";
		if (this.state.isLoad == true) {
			if (this.props.isSelected == true) {
				classNameIsSelected = "commentList commentListBack";
			} else if (this.props.isSelected == false) {
				classNameIsSelected = "commentList";
			}
		} else if (this.state.isLoad == false) {
			console.log(this.state.isLoad, "render");
			classNameIsSelected = "commentListDefault";
		}
		return React.createElement(
			'div',
			{ className: 'commentListBox' },
			React.createElement(
				'div',
				{ id: this.props.id, className: classNameIsSelected, onClick: this.myClick },
				React.createElement(
					'div',
					{ className: 'comment' },
					this.state.data.title
				)
			)
		);
	}
});

var ButtonBox = React.createClass({
	displayName: 'ButtonBox',

	getInitialState: function getInitialState() {
		return { clickData: false };
	},
	myClick: function myClick(event) {
		this.props.func(event);
	},
	render: function render() {
		return React.createElement('input', { className: 'button', type: 'button', onClick: this.myClick, value: 'Загрузить' });
	}
});

var IFrameBox = React.createClass({
	displayName: 'IFrameBox',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'iFrameBoxNews' },
			React.createElement('iframe', { className: 'iFrameBoxNews', src: this.props.paramsLink, name: 'iframe' })
		);
	}
});

ReactDOM.render(React.createElement(NewsBox, { url: 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty', pollinterval: 200000 }), document.getElementById('content'));