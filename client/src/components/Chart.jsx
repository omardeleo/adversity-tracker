import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { Redirect } from 'react-router-dom';

import { getDateRange } from '../util/date_util';
const equal = require('deep-equal');

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
    }

    renderChart() {
        let chart = am4core.create("chartdiv", am4charts.XYChart);
        this.chart = chart;
        const { adversities } = this.props;
        chart.data = adversities;
        chart.background.fill = "#181818";
        chart.paddingRight = 50;
       
        // create y axis
        let yAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        yAxis.dataFields.category = "title"
        yAxis.renderer.grid.template.disabled = true;
        yAxis.renderer.minGridDistance = 10;
        yAxis.renderer.line.strokeOpacity = 1;
        yAxis.renderer.line.strokeWidth = 2;
        yAxis.renderer.line.stroke = am4core.color("#a9a9a9");

        // create x axis
        let xAxis = chart.xAxes.push(new am4charts.DateAxis());
        let dateMin = getDateRange().start;
        let dateMax = getDateRange().end;
        xAxis.min = dateMin;
        xAxis.max = dateMax;
        xAxis.strictMinMax = true;
        yAxis.renderer.labels.template.fill = am4core.color("#a9a9a9");
        yAxis.renderer.labels.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;
        yAxis.renderer.labels.template.events.on("hit", function (ev) {

            const title = ev.target.currentText;
            let id;

            for (let adversity of adversities) {
                if (adversity.title === title) {
                    id = adversity.adv_id;
                    break;
                }
            }

            this.props.onTitleClick(title, id);
            this.setState(({ redirect: true }))
        }, this);
        xAxis.renderer.labels.template.fill = am4core.color("#a9a9a9");
        xAxis.renderer.grid.template.stroke = am4core.color("#a9a9a9");
        xAxis.renderer.line.strokeOpacity = 1;
        xAxis.renderer.line.strokeWidth = 2;
        xAxis.renderer.line.stroke = am4core.color("#a9a9a9");

        chart.scrollbarX = new am4core.Scrollbar();
        chart.scrollbarY = new am4core.Scrollbar();

        chart.scrollbarX.background.fill = am4core.color("#181818");
        chart.scrollbarX.thumb.background.fill = am4core.color("#181818");
        chart.scrollbarX.startGrip.background.fill = am4core.color("#181818");
        chart.scrollbarX.endGrip.background.fill = am4core.color("#181818");
        chart.scrollbarX.stroke = am4core.color("#181818");
        chart.scrollbarX.strokeWidth = .4;

        chart.scrollbarY.background.fill = am4core.color("#181818");
        chart.scrollbarY.thumb.background.fill = am4core.color("#181818");
        chart.scrollbarY.startGrip.background.fill = am4core.color("#181818");
        chart.scrollbarY.endGrip.background.fill = am4core.color("#181818");
        chart.scrollbarY.stroke = am4core.color("#181818");
        chart.scrollbarY.strokeWidth = .4;

        chart.scrollbarX.thumb.background.states.getKey('hover').properties.fill = am4core.color("#121212");
        chart.scrollbarX.thumb.background.states.getKey('down').properties.fill = am4core.color("#121212");
        chart.scrollbarX.startGrip.background.states.getKey('hover').properties.fill = am4core.color("#121212");
        chart.scrollbarX.endGrip.background.states.getKey('hover').properties.fill = am4core.color("#121212");

        chart.scrollbarY.thumb.background.states.getKey('hover').properties.fill = am4core.color("#121212");
        chart.scrollbarY.thumb.background.states.getKey('down').properties.fill = am4core.color("#121212");
        chart.scrollbarY.startGrip.background.states.getKey('hover').properties.fill = am4core.color("#121212");
        chart.scrollbarY.endGrip.background.states.getKey('hover').properties.fill = am4core.color("#121212");

        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "zoomY";

        
        for (let adversity of adversities) {
            let data = [];
            for (let recognition of adversity.recognitions) {
                 let obj = {title: adversity.title, recognition: recognition}
                 data.push(obj)
            }
            let series = chart.series.push(new am4charts.LineSeries());
            series.name = "Adversity";
            series.dataFields.dateX = "recognition";
            series.dataFields.categoryY = "title";
            series.strokeWidth = 3;
            series.sequencedInterpolation = true;
            series.bullets.create(am4charts.CircleBullet);
            series.data = data;
        }
    }

    componentDidMount() {
        this.renderChart();
    }

    componentDidUpdate(prevProps) {
        if (!equal(prevProps.adversities, this.props.adversities)) {
            this.renderChart();
        }
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        
        const { redirect } = this.state;

        if (redirect) {
            this.chart.dispose();
            return <Redirect to="/input" />
        }

        return (
            <div id="chartdiv" style={{ width: "1000px", height: "500px" }}></div>
        );
    }
}

export default Chart;