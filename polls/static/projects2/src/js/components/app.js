/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions.js');
var AppStore = require('../stores/AppStore.js');

console.log("app");
console.log(AppStore);










var Box = React.createClass({
    render: function() {
        return (
            <div>
                <App />
                <ColorBox />
                <ColorElement />
            </div>
        )     
    }
});

var App = React.createClass({
    handleClick:function(){
        AppActions.addItem('this is the item');
    },
    render:function(){
        return (
          <div className="wrapper">
          <h3 onClick={this.handleClick}>Click this Title, then check console</h3>
          </div>
          )
    }
});

var ColorBox = React.createClass({
    myClick: function(event) {
        AppActions.setColor(this.state.boxColor);
    },
    getInitialState: function() {
        return {boxColor: AppStore.getState().setColor};
    },
    onChange: function() {
        this.setState({boxColor: AppStore.getState().setColor});
    },
    componentDidMount: function() {
        AppStore.addChangeListener(this.onChange);
    },
    render: function() {
        var elementClassName;
        if (this.state.boxColor == "red") {
            elementClassName = "boxRed";
        }
        else if (this.state.boxColor == "green") {
            elementClassName = "boxGreen";
        }
        else if (this.state.boxColor == "grey") {
            elementClassName = "boxGrey";
        }
        return (
            <div className={elementClassName} onClick={this.myClick}>
            </div>
        )
    }
});

var ColorElement = React.createClass({
    getInitialState: function() {
        return {boxColor: "black"};
    },
    onChange: function() {
        if (AppStore.getState().setColor == "green"){
            this.setState({boxColor: "grey"});        
        }
        else {
            this.setState({boxColor: "black"});
        }
    },
    componentDidMount: function() {
        AppStore.addChangeListener(this.onChange);
    },
    render: function() {
        var elementClassName;
        if (this.state.boxColor == "black") {
            elementClassName = "boxBlack";
        }
        else if (this.state.boxColor == "grey") {
            elementClassName = "boxGrey";
        }
        return (
            <div className={elementClassName}></div>
        );
    }
});

module.exports = Box;
