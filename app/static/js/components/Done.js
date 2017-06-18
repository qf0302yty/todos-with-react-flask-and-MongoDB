var React = require('react');
var QueryForm = require('./QueryForm');
var DoneTable = require('./DoneTable');

var Done = React.createClass({
    getInitialState : function(){
        return{
            todos : []
        }
    },
    listTodo : function(){
        $.ajax({
            type:'get',
            url:'/list'
        }).done(function(resp){
            if(resp.status == "success"){
                this.setState({todos:resp.todos});
                $('aside').css('height', $('html').height());
            }
        }.bind(this))

    },
    queryTodo : function(content){
        if(content=="")
        {
            this.listTodo()
        }
        else
        {
            $.ajax({
                type:'get',
                url:'/query/'+content
            }).done(function(resp){
                if(resp.status == "success"){
                    this.setState({todos:resp.todos});
                    $('aside').css('height', $('html').height());
                }
            }.bind(this))
        }
    },
    updateTodo : function(id,status){
        $.ajax({
            type:'post',
            url:'update',
            data:{id:id,status:status}
        }).done(function(resp){
            if(resp.status == "success"){
                this.listTodo()
            }
        }.bind(this))
    },
    deleteTodo : function(id){
        $.ajax({
            type : 'get',
            url : '/delete/'+id
        }).done(function(resp){
            if(resp.status == "success"){
                this.listTodo();
            }
        }.bind(this))
    },
    componentDidMount : function(){
        this.listTodo();
    },
    render : function(){

        return(
            <div>
                <QueryForm queryTodo = {this.queryTodo}/>
                <DoneTable todos = {this.state.todos} updateTodo={this.updateTodo}
                deleteTodo={this.deleteTodo}/>
            </div>
        )
    }
});

module.exports = Done;