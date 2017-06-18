var React = require('react');
var ReactDOM = require('react-dom');

var TodoBar = React.createClass({
    componentDidMount : function(){
        var done = this.props.done;
        var undone = this.props.undone;
		   var chart = {
		      type: 'bar',
		      plotBackgroundColor: null,
              plotBorderWidth: null,
              backgroundColor: 'rgba(255,255,255,0)',
              plotShadow: false
		   };
		   var title = {
		      text: '各月份事项条形统计图'
		   };
		   var xAxis = {
		      categories: ['一月', '二月', '三月', '四月', '五月', '六月'
      ,'七月', '八月', '九月', '十月', '十一月', '十二月'],
		      title: {
		         text: null
		      },
		      labels:{
		        style:{
		            'color':'#000',
		            'fontSize':'14px',
		            'fontWeight':'600'
		        }
		      }

		   };
		   var yAxis = {
		      min: 0,
		      title: {
		         text: '事项总数',
		         align: 'high',
		         style:{
		            'color':'#000',
		            'fontSize':'14px',
		            'fontWeight':'600'
		         }
		      },
		      labels:{
		        style:{
		            'color':'#000',
		            'fontSize':'14px',
		            'fontWeight':'600'
		        }
		      }
		   };
		   var legend = {
               itemStyle : {
                    'color':'#000',
		            'fontSize':'14px',
		            'fontWeight':'600'
                }
           };
		    var tooltip = {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} 件</b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true,
              style:{
		            'color':'#000',
		            'fontSize':'14px',
		            'fontWeight':'600'
		        }
           };

		   var plotOptions = {
              column: {
                pointPadding: 0.2,
                borderWidth: 0,

              }
           };

		   var credits = {
		      enabled: false
		   };

		   var series= [{
		         name: '已完成',
		            data: done
		        }, {
		            name: '未完成',
		            data: undone
		        }
		   ];

		   var json = {};
           json.chart = chart;
           json.title = title;
           json.tooltip = tooltip;
           json.xAxis = xAxis;
           json.yAxis = yAxis;
           json.series = series;
           json.legend = legend;
           json.plotOptions = plotOptions;
           json.credits = credits;
		   $('.bar-container').highcharts(json);
    },
    componentDidUpdate : function(){
        var done = this.props.done;
        var undone = this.props.undone;
        var chart = {
		      type: 'bar',
		      plotBackgroundColor: null,
              plotBorderWidth: null,
              backgroundColor: 'rgba(255,255,255,0)',
              plotShadow: false
		   };
		   var title = {
		      text: '各月份事项条形统计图'
		   };
		   var xAxis = {
		      categories: ['一月', '二月', '三月', '四月', '五月', '六月'
      ,'七月', '八月', '九月', '十月', '十一月', '十二月'],
		      title: {
		         text: null
		      },
		      labels:{
		        style:{
		            'color':'#000',
		            'fontSize':'14px',
		            'fontWeight':'600'
		        }
		      }

		   };
		   var yAxis = {
		      min: 0,
		      title: {
		         text: '事项总数',
		         align: 'high',
		         style:{
		            'color':'#000',
		            'fontSize':'14px',
		            'fontWeight':'600'
		         }
		      },
		      labels:{
		        style:{
		            'color':'#000',
		            'fontSize':'14px',
		            'fontWeight':'600'
		        }
		      }
		   };
		   var legend = {
               itemStyle : {
                    'color':'#000',
		            'fontSize':'14px',
		            'fontWeight':'600'
                }
           };
		    var tooltip = {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} 件</b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true,
              style:{
		            'color':'#000',
		            'fontSize':'14px',
		            'fontWeight':'600'
		        }
           };

		   var plotOptions = {
              column: {
                pointPadding: 0.2,
                borderWidth: 0,

              }
           };

		   var credits = {
		      enabled: false
		   };
        var series= [{
		        name: '已完成',
		        data: done
		        }, {
		       name: '未完成',
		     data: undone
		   }
		];
		var json = {};
        json.chart = chart;
        json.title = title;
        json.tooltip = tooltip;
        json.xAxis = xAxis;
        json.yAxis = yAxis;
        json.series = series;
        json.legend = legend;
        json.plotOptions = plotOptions;
        json.credits = credits;
		$('.bar-container').highcharts(json);
    },
    render : function(){
        return (
          <div className="bar-container"></div>
        )
    }
});

module.exports = TodoBar;