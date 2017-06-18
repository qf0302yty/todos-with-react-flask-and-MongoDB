var React = require('react');
var TodoForm = require('./TodoForm');
var TodoBar = require('./TodoBar');
var TodoBarForm = require('./TodoBarForm')

var TodoBarList = React.createClass({
    getInitialState : function(){
        return{
            done : [],
            undone: []
        }
    },
    queryBars : function(content){
        $.ajax({
            type : 'get',
            url : '/queryBars/'+content
        }).done(function(resp){
            if(resp.status == "success"){
                this.setState({done:resp.done,undone:resp.undone});

            }
        }.bind(this))
    },
    render : function(){
        return(
            <div>
                <TodoBarForm queryBars={this.queryBars}/>
                <TodoBar done={this.state.done} undone={this.state.undone} />
            </div>
        )
    }

});

module.exports = TodoBarList;