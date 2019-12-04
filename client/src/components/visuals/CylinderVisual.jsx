import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

export const CylinderVisual = props => {
  useEffect(() => {
    renderCylinderGauge();
    // return function cleanup() {
    //   am4core.Disposer();
    // };
  }, [props.value]);

  function renderCylinderGauge() {
    let chart = [];
    chart[props.id] = am4core.create(props.cName, am4charts.XYChart3D);
    chart[props.id].background.fill = "#181818";

    let val1 = 100 - props.value;
    let val2 = 100 - val1;

    chart[props.id].data = [
      {
        category: props.name,
        value1: val1,
        value2: val2
      }
    ];

    // Create axes
    var categoryAxis = chart[props.id].xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.labels.template.fill = am4core.color("#a9a9a9");

    var valueAxis = chart[props.id].yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.renderer.labels.template.fill = am4core.color("#a9a9a9");
    valueAxis.min = -10;
    valueAxis.max = 110;
    valueAxis.strictMinMax = true;
    valueAxis.renderer.baseGrid.disabled = true;
    valueAxis.renderer.labels.template.adapter.add("text", function (text) {
      if (text > 100 || text < 0) {
        return "";
      } else {
        return text + "%";
      }
    });

    // Create series
    var series1 = chart[props.id].series.push(new am4charts.ConeSeries());
    series1.dataFields.valueY = "value1";
    series1.dataFields.categoryX = "category";
    series1.columns.template.width = am4core.percent(80);
    series1.columns.template.fillOpacity = 1;
    series1.columns.template.strokeOpacity = 1;
    series1.columns.template.strokeWidth = 2;

    var series2 = chart[props.id].series.push(new am4charts.ConeSeries());
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
      return chart[props.id].colors.getIndex(target.dataItem.index);
    });

    // Add distinctive colors for each column using adapter
    series1.columns.template.adapter.add("stroke", function (stroke, target) {
      return chart[props.id].colors.getIndex(target.dataItem.index);
    });

    // Add distinctive colors for each column using adapter
    series2.columns.template.adapter.add("fill", function (fill, target) {
      return chart[props.id].colors.getIndex(target.dataItem.index);
    });
  }

  return <div id={props.id} className={props.cName}></div>;
}