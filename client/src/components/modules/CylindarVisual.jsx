import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { Redirect } from 'react-router-dom';

const equal = require('deep-equal');

class CylinderGauge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  renderCylinderGauge() {
    let chart = am4core.create("chartdiv", am4charts.XYChart3D);

    chart.data = [{
      "category": "Coping with \n Negative \n Feelings",
      "value1": 30,
      "value2": 70
    }, {
      "category": "Self-Control, \n Focus, \n Will-Power",
      "value1": 15,
      "value2": 85
    }, {
      "category": "Empathizing",
      "value1": 60,
      "value2": 40
    }, {
      "category": "Discovery and \n Exposure \n to Novelty",
      "value1": 80,
      "value2": 20
    }, {
      "category": "Decision \n Making",
      "value1": 50,
      "value2": 50
    }, {
      "category": "Physical and \n Metabolic",
      "value1": 70,
      "value2": 30
    }];

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.labels.template.fill = am4core.color("#a9a9a9");

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.renderer.labels.template.fill = am4core.color("#a9a9a9");
    valueAxis.min = -10;
    valueAxis.max = 110;
    valueAxis.strictMinMax = true;
    valueAxis.renderer.baseGrid.disabled = true;
    valueAxis.renderer.labels.template.adapter.add("text", function (text) {
      if ((text > 100) || (text < 0)) {
        return "";
      }
      else {
        return text + "%";
      }
    })

    // Create series
    var series1 = chart.series.push(new am4charts.ConeSeries());
    series1.dataFields.valueY = "value1";
    series1.dataFields.categoryX = "category";
    series1.columns.template.width = am4core.percent(80);
    series1.columns.template.fillOpacity = 1;
    series1.columns.template.strokeOpacity = 1;
    series1.columns.template.strokeWidth = 2;


    var series2 = chart.series.push(new am4charts.ConeSeries());
    series2.dataFields.valueY = "value2";
    series2.dataFields.categoryX = "category";
    series2.stacked = true;
    series2.columns.template.width = am4core.percent(80);
    series2.columns.template.fill = am4core.color("#75777B");
    series2.columns.template.fillOpacity = 0.1;
    series2.columns.template.stroke = am4core.color("#000");
    series2.columns.template.strokeOpacity = 0.2;
    series2.columns.template.strokeWidth = 2;


    // Add distinctive colors for each column using adapter
    series1.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });
    series1.columns.template.adapter.add("stroke", function (stroke, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Add distinctive colors for each column using adapter
    series2.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });
  }

  componentDidMount() {
    this.renderCylinderGauge();
  }

  componentDidUpdate(prevProps) {
    if (!equal(prevProps.adversities, this.props.adversities)) {
      this.renderCylinderGauge();
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
      <div id="chartdiv" style={{ width: "940px", height: "500px" }}></div>
    );
  }
}

export default CylinderGauge;