var React = require('react');
var ReactDOM = require('react-dom')
var TodoItem = require('./TodoItem');

var DoneTable = React.createClass({
    render : function(){
        var todos = this.props.todos.map(function(item){
            if(item.status==1){
                return <TodoItem key = {item.id} todo={item} updateTodo={this.props.updateTodo}
                deleteTodo={this.props.deleteTodo}/>
            }
        }.bind(this));
        return(
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>事项名</th>
                            <th>状态</th>
                            <th>记录时间</th>
                            <th>完成时间</th>
                            <th>分类</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos}
                    </tbody>
                </table>
            </div>
        )
    }
});

module.exports = DoneTable;