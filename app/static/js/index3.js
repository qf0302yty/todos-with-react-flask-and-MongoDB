var React = require('react');
var ReactDOM = require('react-dom')
var TodoBarList = require('./components/TodoBarList');
var TodoPieList = require('./components/TodoPieList');

ReactDOM.render(<TodoBarList/>, document.getElementById("bar"));
ReactDOM.render(<TodoPieList/>,document.getElementById("pie"));