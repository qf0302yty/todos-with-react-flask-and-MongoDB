var React = require('react');
var ReactDOM = require('react-dom')
var TodoItem = React.createClass({
    handleUpdate : function(id,status){
        this.props.updateTodo(id,status);
    },
    handleDelete : function(id){
        this.props.deleteTodo(id);
    },
    render:function(){
        var t = this.props.todo;
        var updateBtn;
        if(t.status==0){
            updateBtn = <button className="btn btn-primary" onClick={this.handleUpdate.bind(this,t.id,1)}>Done</button>;
        }else{
            updateBtn = <button className="btn btn-primary" onClick={this.handleUpdate.bind(this,t.id,0)}>UnDone</button>;
        }
        return(
               <tr>
                    <td>{ t.content }</td>
                    <td>{ t.status == 0 ? '未完成':'已完成' }</td>
                    <td>{ t.time }</td>
                    <td>{ t.finishtime }</td>
                    <td>{ t.classification }</td>
                    <td>
                        {updateBtn}
                        <button className="btn btn-danger" onClick={this.handleDelete.bind(this,t.id)}>Delete</button>
                    </td>
               </tr>
        )
    }
});

module.exports = TodoItem;