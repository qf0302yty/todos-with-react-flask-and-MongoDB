var React = require('react');
var TodoForm = require('./TodoForm');
var TodoPie = require('./TodoPie');
var TodoPieForm = require('./TodoPieForm');

var TodoPieList = React.createClass({
    getInitialState : function(){
        return{
            data : []
        }
    },
    queryPies : function(content){
        $.ajax({
            type : 'get',
            url : '/queryPies/'+content
        }).done(function(resp){
            if(resp.status == "success"){
                this.setState({data:resp.data});
            }
        }.bind(this))
    },
    render : function(){
        return(
            <div>
                <TodoPieForm queryPies={this.queryPies}/>
                <TodoPie data = {this.state.data} />
            </div>
        )
    }

});

module.exports = TodoPieList;