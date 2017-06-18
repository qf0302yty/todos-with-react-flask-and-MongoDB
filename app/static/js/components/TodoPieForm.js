var React = require('react');
var ReactDOM = require('react-dom')

var TodoPieForm = React.createClass({
    handleSubmit : function(e){
        e.preventDefault();
        var content = ReactDOM.findDOMNode(this.refs.TodoPieTime).value.trim();
        this.props.queryPies(content);
    },
    componentDidMount : function(){
        $(".form_datetime").datetimepicker({
        autoclose: true,
        todayBtn: true,
        startView:3,
        minView:3,
        startDate: "2013-02-14 10:00"
        });
        var myDate = new Date();
        var s = myDate.getFullYear()+'-'+(myDate.getMonth()+1);
        this.props.queryPies(s);
        $("#TodoPieForm").val(s);
    },
    render : function(){
        return(
            <form className="input-group col-md-4" onSubmit={this.handleSubmit}>
                <div className="input-group date form_datetime "  data-date-format="yyyy-m" data-link-field="dtp_input1">
                    <input ref="TodoPieTime" id="TodoPieForm" className="form-control" size="16" type="text"  readonly/>
					<span className="input-group-addon"><span className="glyphicon glyphicon-th"></span></span>
                </div>
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="submit">查看</button>
                </span>
            </form>
        )
    }
});

module.exports = TodoPieForm;