var DivBox = React.createClass({
	loadCommentsFromServer: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			type: 'GET',
			cache: false,
			success: function(data) {
				this.setState({data: data, onload: true});
				console.log(this.state.data);
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	handleCommentSubmit: function(comment) {
		$.ajax({
			url: this.props.url2,
			dataType: 'json',
			type: 'POST',
			data: comment,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function() {
		return {data: [], onload: false};
	},
	componentDidMount: function() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
	render: function() {
		return (
			<div className="commentBox">
				<CommentList data={this.state.data} onload={this.state.onload} />
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</div>
		);
	}
});

var CommentList = React.createClass({
	render: function() {
		if (this.props.onload == true) {
			console.log(this.props.data.comments);
			var commentNodes = this.props.data.comments.map(function(comment, id) {
				return (
					<Comment commentElem={comment} key={id}>"this"</Comment>
				);
			});
		}
		else {
			var commentNodes = function () {
				return (
					<Comment>hey</Comment>
				);
			};
		}
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
});

var Comment = React.createClass({
	render: function() {
		return (
			<div className="comment">
			<h2 className="commentAuthor">
			{this.props.commentElem.author}
			</h2>
			<span>
			{this.props.commentElem.comment}
			</span>
			</div>
			);
	}
});

var CommentForm = React.createClass({
	getInitialState: function() {
		return {item_id: 0, author: "", comment : ""};
	},
	handleAuthorChange: function(event) {
		this.setState({author: event.target.value});
	},
	handleTextChange: function(event) {
		this.setState({comment : event.target.value});
	},
	handleSubmit: function(event) {
	    event.preventDefault();
	    var author = this.state.author.trim();
	    var comment  = this.state.comment .trim();
	    if (!comment  || !author) {
	      return;
	    }
	    this.props.onCommentSubmit({item_id: 0, author: author, comment : comment });
	    this.setState({item_id: 0, author: '', comment : ''});
	},
	render: function() {
		return (
			<form className="commentForm" onSubmit={this.handleSubmit} >
				<input type="text" placeholder="You name" value={this.state.author} onChange={this.handleAuthorChange} />
				<input type="text" placeholder="Say something..." value={this.state.comment } onChange={this.handleTextChange} />
				<input type="submit" value="Post" />
			</form>
		);
	}
});

ReactDOM.render(
	<DivBox url="/api/comments/?item_id=0" url2="/api/add_comment/" pollInterval={2000} />,
	document.getElementById('content')
);