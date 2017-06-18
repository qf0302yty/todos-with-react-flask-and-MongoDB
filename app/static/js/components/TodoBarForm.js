var React = require('react');
var ReactDOM = require('react-dom')

var TodoBarForm = React.createClass({
    handleSubmit : function(e){
        e.preventDefault();
        var content = ReactDOM.findDOMNode(this.refs.TodoBarTime).value.trim();
        this.props.queryBars(content);
        $("#TodoBarForm").val(content);
    },
    componentDidMount : function(){
        $(".form_datetime").datetimepicker({
        autoclose: true,
        todayBtn: true,
        startView:4,
        minView:4,
        initialDate:new Date()
        });
        var myDate = new Date();
        this.props.queryBars(myDate.getFullYear());
        $("#TodoBarForm").val(myDate.getFullYear());
    },
    render : function(){
        return(
            <form className="input-group col-md-4" onSubmit={this.handleSubmit}>
                <div className="input-group date form_datetime "  data-date-format="yyyy" data-link-field="dtp_input1">
                    <input ref="TodoBarTime" id="TodoBarForm" className="form-control" size="16" type="text"  readonly/>
					<span className="input-group-addon"><span className="glyphicon glyphicon-th"></span></span>
                </div>
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="submit">查看</button>
                </span>
            </form>
        )
    }
});

module.exports = TodoBarForm;