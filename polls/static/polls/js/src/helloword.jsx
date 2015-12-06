var NewsBox = React.createClass({
	loadCommentsFromServer: function() {
		$.ajax({
			url: this.props.url,
			type: 'GET',
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data, start: 0, end: 10, linkNews: 0, keyId: 0, coords: document.getElementById('box').getBoundingClientRect().bottom - document.body.clientHeight});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function() {
		return {data: [], start: 0, end: 0, linkNews: 0, keyId: 0, coords: 1};
	},
	componentDidMount: function() {
		this.loadCommentsFromServer();
		window.addEventListener('scroll', this.corrds);
		setInterval(this.loadCommentsFromServer, this.props.pollinterval);
	},
	getIframeKey: function(link, keyId) {
		var state =  this.state;
		state.linkNews = link;
		state.inSelected = true;
		state.keyId = keyId
		this.setState(state);
	},
	myNews: function() {
 		var state =  this.state;
		state.end = this.state.end + 5;
		this.setState(state);
	},
	corrds: function() {
		this.setState({coords: document.getElementById('box').getBoundingClientRect().bottom - document.body.clientHeight});
		console.log(this.state.coords);
		if (this.state.coords <= 50) {
			this.myNews();
			this.setState({coords: document.getElementById('box').getBoundingClientRect().bottom - document.body.clientHeight});
		}
	},
	render: function () {
		var getIframeKey = this.getIframeKey;
		var newData = this.state.data.slice(this.state.start, this.state.end);
		var keyIdIsSelected = this.state.keyId;
		var commentListNodes = newData.map(function (NewsLink) {
			var isSelected;
			if(keyIdIsSelected == NewsLink) {
				isSelected = true;
			}
			else {
				isSelected = false;
			}
			return (
				<ItemNewsList func={getIframeKey} url={"https://hacker-news.firebaseio.com/v0/item/" + NewsLink + ".json?print=pretty"} key={NewsLink} keyId={NewsLink} isSelected={isSelected} />
			);
		});
		return (
			<div className="commentBox" id="id" onWheel={this._corrds}>
				<IFrameBox paramsLink={this.state.linkNews}  />
				<ButtonBox func={this.myNews} />
				<div className="boxNewsList" id="box">
					{commentListNodes}
				</div>
			</div>
		);	
	}
});



var ItemNewsList = React.createClass({
	loadCommentsFromServer: function() {
		$.ajax({
			url: this.props.url,
			type: 'GET',
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data, isLoad: true});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function() {
		return {data: [], isLoad: false};	
	},
	componentDidMount: function() {
		this.loadCommentsFromServer();
	},
	myClick: function(event) {
		var link = this.state.data.url;
		var keyId = this.props.keyId;
		this.props.func(link, keyId);
	},
	render: function () {
		// this.getCords();
		var classNameIsSelected = "";
		if (this.state.isLoad == true) {
			if(this.props.isSelected == true) {
				classNameIsSelected = "commentList commentListBack";
			}
			else if (this.props.isSelected == false) {
				classNameIsSelected = "commentList";
			}
		}
		else if (this.state.isLoad == false) {
			console.log(this.state.isLoad, "render");
			classNameIsSelected = "commentListDefault";
		}
		return (
			<div className="commentListBox">
				<div id={this.props.id} className={classNameIsSelected} onClick={this.myClick} >
					<div className="comment">{this.state.data.title}</div>
				</div>
			</div>
		);	
	}
});

var ButtonBox = React.createClass({
	getInitialState: function() {
		return {clickData: false};
	},
	myClick: function (event) {
		this.props.func(event);
	},
	render: function () {
		return (
				<input className="button" type="button" onClick={this.myClick} value="Загрузить" />
		);
	}
});

var IFrameBox = React.createClass({
	render: function() {
		return (
			<div className="iFrameBoxNews">
				<iframe className="iFrameBoxNews" src={this.props.paramsLink}  name="iframe" ></iframe>
			</div>
		);
	}	
});

ReactDOM.render(
	<NewsBox url="https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty" pollinterval={200000} />,
	document.getElementById('content')
);


