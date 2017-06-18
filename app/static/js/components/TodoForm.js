var React = require('react');
var ReactDOM = require('react-dom')

var TodoForm = React.createClass({
    handleSubmit : function(e){
        e.preventDefault();
        var content = ReactDOM.findDOMNode(this.refs.content).value.trim();
        var classification = ReactDOM.findDOMNode(this.refs.classificationForm).value.trim();
        var finishtime = ReactDOM.findDOMNode(this.refs.finishtime).value.trim();
        if(!content){
            return;
        }
        if(!classification){
            return;
        }
        if(!finishtime){
            return;
        }
        this.props.addTodo(content,classification,finishtime);
        ReactDOM.findDOMNode(this.refs.content).value = "";
        ReactDOM.findDOMNode(this.refs.finishtime).value = "";
    },
    handleClassificated : function(s){
        $("#classificationButton").html(s);
        $("#classificationForm").val(s);
    },
    componentDidMount:function(){
        $(".form_datetime").datetimepicker({
        autoclose: true,
        todayBtn: true
        });
    },
    render : function(){
        return(
            <form className="input-group" onSubmit={this.handleSubmit}>
                <input ref="content" className="form-control" id="content" name="content" type="text"/>
                <input ref="classificationForm" type="hidden" id="classificationForm" className="form-control" name="classificationForm"/>
                <span className="input-group-btn">
                    <div className="input-group date form_datetime col-md-5"  data-date-format="dd-mm-yyyy   hh:ii:ss" data-link-field="dtp_input1">
                    <input ref="finishtime" className="form-control" size="16" type="hidden" value="" readonly/>
					<span className="input-group-addon"><span className="glyphicon glyphicon-th"></span></span>
                	</div>
                </span>
                 <span className="input-group-btn">
                     <button type="button" className="btn btn-default dropdown-toggle"
                        data-toggle="dropdown" id="classificationButton">
                        分类
                            <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu" id="classificationList">
                            <li onClick={this.handleClassificated.bind(this,"工作")}>工作</li>
                            <li onClick={this.handleClassificated.bind(this,"娱乐")}>娱乐</li>
                            <li onClick={this.handleClassificated.bind(this,"人情")}>人情</li>
                            <li onClick={this.handleClassificated.bind(this,"教育")}>教育</li>
                            <li onClick={this.handleClassificated.bind(this,"日杂")}>日杂</li>
                        </ul>
                 </span>
                 <span className="input-group-btn">
                    <button className="btn btn-primary" type="submit">添加</button>
                 </span>
            </form>

        )
    }
});

module.exports = TodoForm;