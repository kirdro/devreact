'use strict';

var DivBox = React.createClass({
	displayName: 'DivBox',

	loadCommentsFromServer: function loadCommentsFromServer() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			type: 'GET',
			cache: false,
			success: (function (data) {
				this.setState({ data: data, onload: true });
				console.log(this.state.data);
			}).bind(this),
			error: (function (xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}).bind(this)
		});
	},
	handleCommentSubmit: function handleCommentSubmit(comment) {
		$.ajax({
			url: this.props.url2,
			dataType: 'json',
			type: 'POST',
			data: comment,
			success: (function (data) {
				this.setState({ data: data });
			}).bind(this),
			error: (function (xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}).bind(this)
		});
	},
	getInitialState: function getInitialState() {
		return { data: [], onload: false };
	},
	componentDidMount: function componentDidMount() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
	render: function render() {
		return React.createElement(
			'div',
			{ className: 'commentBox' },
			React.createElement(CommentList, { data: this.state.data, onload: this.state.onload }),
			React.createElement(CommentForm, { onCommentSubmit: this.handleCommentSubmit })
		);
	}
});

var CommentList = React.createClass({
	displayName: 'CommentList',

	render: function render() {
		if (this.props.onload == true) {
			console.log(this.props.data.comments);
			var commentNodes = this.props.data.comments.map(function (comment, id) {
				return React.createElement(
					Comment,
					{ commentElem: comment, key: id },
					'"this"'
				);
			});
		} else {
			var commentNodes = function commentNodes() {
				return React.createElement(
					Comment,
					null,
					'hey'
				);
			};
		}
		return React.createElement(
			'div',
			{ className: 'commentList' },
			commentNodes
		);
	}
});

var Comment = React.createClass({
	displayName: 'Comment',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'comment' },
			React.createElement(
				'h2',
				{ className: 'commentAuthor' },
				this.props.commentElem.author
			),
			React.createElement(
				'span',
				null,
				this.props.commentElem.comment
			)
		);
	}
});

var CommentForm = React.createClass({
	displayName: 'CommentForm',

	getInitialState: function getInitialState() {
		return { item_id: 0, author: "", comment: "" };
	},
	handleAuthorChange: function handleAuthorChange(event) {
		this.setState({ author: event.target.value });
	},
	handleTextChange: function handleTextChange(event) {
		this.setState({ comment: event.target.value });
	},
	handleSubmit: function handleSubmit(event) {
		event.preventDefault();
		var author = this.state.author.trim();
		var comment = this.state.comment.trim();
		if (!comment || !author) {
			return;
		}
		this.props.onCommentSubmit({ item_id: 0, author: author, comment: comment
		});
		this.setState({ item_id: 0, author: '', comment: '' });
	},
	render: function render() {
		return React.createElement(
			'form',
			{ className: 'commentForm', onSubmit: this.handleSubmit },
			React.createElement('input', { type: 'text', placeholder: 'You name', value: this.state.author, onChange: this.handleAuthorChange }),
			React.createElement('input', { type: 'text', placeholder: 'Say something...', value: this.state.comment, onChange: this.handleTextChange }),
			React.createElement('input', { type: 'submit', value: 'Post' })
		);
	}
});

ReactDOM.render(React.createElement(DivBox, { url: '/api/comments/?item_id=0', url2: '/api/add_comment/', pollInterval: 2000 }), document.getElementById('content'));