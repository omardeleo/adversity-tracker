import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

class Chart extends React.Component {
    componentDidMount() {
        let chart = am4core.create("chartdiv", am4charts.XYChart);
        chart.data = this.props.adversities;
        chart.background.fill = "#282828";
        chart.paddingRight = 50;
        let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "title"
        categoryAxis.renderer.grid.template.disabled = true;
        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        let dateMin = new Date(2019, 7, 1).valueOf();
        let dateMax = new Date(2019, 7, 31).valueOf();
        dateAxis.min = dateMin;
        dateAxis.max = dateMax;
        dateAxis.strictMinMax = true;
        categoryAxis.renderer.labels.template.fill = am4core.color("#a9a9a9");
        categoryAxis.renderer.labels.template.events.on("hit", function(ev) {
            console.log("click on", ev.target);
        }, this);
        dateAxis.renderer.labels.template.fill = am4core.color("#a9a9a9");
        dateAxis.renderer.grid.template.stroke = am4core.color("#a9a9a9");
        dateAxis.renderer.line.strokeOpacity = 1;
        dateAxis.renderer.line.strokeWidth = 2;
        dateAxis.renderer.line.stroke = am4core.color("#a9a9a9");
        categoryAxis.renderer.line.strokeOpacity = 1;
        categoryAxis.renderer.line.strokeWidth = 2;
        categoryAxis.renderer.line.stroke = am4core.color("#a9a9a9");
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.name = "Adversity";
        series.dataFields.dateX = "created_at";
        // series.dataFields.dateX = "date";
        series.dataFields.categoryY = "title";
        series.columns.template.height = 0;

        series.bullets.create(am4charts.CircleBullet);
        // var dateBullet = series.bullets.create(am4charts.CircleBullet);
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div id="chartdiv" style={{ width: "940px", height: "500px" }}></div>
        );
    }
}

export default Chart;