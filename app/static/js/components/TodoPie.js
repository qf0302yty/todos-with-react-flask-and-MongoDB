var React = require('react');
var ReactDOM = require('react-dom');

var TodoPie = React.createClass({
    componentDidMount : function(){
        var data = this.props.data;
	   var chart = {
       plotBackgroundColor: null,
       plotBorderWidth: null,
       backgroundColor: 'rgba(255,255,255,0)',
       plotShadow: false
       };
       var title = {
          text: '各类别事项统计图'
       };
       var tooltip = {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
       };
       var plotOptions = {
          pie: {
             allowPointSelect: true,
             cursor: 'pointer',
             dataLabels: {
                enabled: true,
                format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
                style: {
                   color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
             }
          }
       };

       var series= [{
          type: 'pie',
          name: '分类比例',
          data: data
       }];

       var json = {};
       json.chart = chart;
       json.title = title;
       json.tooltip = tooltip;
       json.series = series;
       json.plotOptions = plotOptions;
       $('.pie-container').highcharts(json);

    },
    componentDidUpdate : function(){
        var data = this.props.data;
        var chart = {
       plotBackgroundColor: null,
       plotBorderWidth: null,
       backgroundColor: 'rgba(255,255,255,0)',
       plotShadow: false
       };
       var title = {
          text: '各类别事项统计图'
       };
       var tooltip = {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
       };
       var plotOptions = {
          pie: {
             allowPointSelect: true,
             cursor: 'pointer',
             dataLabels: {
                enabled: true,
                format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
                style: {
                   color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
             }
          }
       };

       var series= [{
          type: 'pie',
          name: '分类比例',
          data: data
       }];

       var json = {};
       json.chart = chart;
       json.title = title;
       json.tooltip = tooltip;
       json.series = series;
       json.plotOptions = plotOptions;
       $('.pie-container').highcharts(json);
    },

    render : function(){
        return <div className="pie-container"></div>;
    }
});

module.exports = TodoPie;