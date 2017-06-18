var React = require('react');
var ReactDOM = require('react-dom')

var QueryForm = React.createClass({
    handleSubmit : function(e){
        e.preventDefault();
        var content = ReactDOM.findDOMNode(this.refs.content).value.trim();
        this.props.queryTodo(content);
        ReactDOM.findDOMNode(this.refs.content).value = "";
    },
    render : function(){
        return(
            <form className="input-group" onSubmit={this.handleSubmit}>
                <input ref="content" className="form-control" id="content" name="content" type="text"/>
                 <span className="input-group-btn">
                    <button className="btn btn-primary" type="submit">查找</button>
                 </span>
            </form>

        )
    }
});

module.exports = QueryForm;