import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

export default function NeedsGaugeModule(props) {
  useEffect(() => {
    renderNeedsGauge();
    // return function cleanup() {
    //   am4core.Disposer();
    // };
  }, [props]);

  function renderNeedsGauge() {
    let chart = [];
    chart[props.id] = am4core.create(props.cName, am4charts.RadarChart);
    chart[props.id].background.fill = "#181818";

    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);

    // Add data
    chart[props.id].data = [
      {
        category: "to feel seen",
        value: 90,
        full: 100
      },
      {
        category: "for challenge",
        value: 90,
        full: 100
      },
      {
        category: "for growth",
        value: 90,
        full: 100
      },
      {
        category: "for novelty",
        value: 90,
        full: 100
      },
      {
        category: props.newNeed,
        value: props.value,
        full: 100
      }
    ];

    // Make chart not full circle
    chart[props.id].startAngle = -90;
    chart[props.id].endAngle = 0;
    chart[props.id].innerRadius = am4core.percent(20);

    // Set number format
    chart[props.id].numberFormatter.numberFormat = "#.#'%'";

    // Create axes
    var categoryAxis = chart[props.id].yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    //categoryAxis.renderer.labels.template.fontWeight = 10;
    categoryAxis.renderer.labels.template.adapter.add("fill", function(
      fill,
      target
    ) {
      return target.dataItem.index >= 0
        ? chart[props.id].colors.getIndex(target.dataItem.index)
        : fill;
    });
    categoryAxis.renderer.minGridDistance = 10;

    var valueAxis = chart[props.id].xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;

    valueAxis.renderer.labels.template.fill = am4core.color("#A9A9A9");
    valueAxis.renderer.labels.template.fontSize = 13;

    // Create series
    var series1 = chart[props.id].series.push(new am4charts.RadarColumnSeries());
    series1.dataFields.valueX = "full";
    series1.dataFields.categoryY = "category";
    series1.clustered = false;
    series1.columns.template.fill = new am4core.InterfaceColorSet().getFor(
      "alternativeBackground"
    );
    series1.columns.template.fillOpacity = 0.08;
    series1.columns.template.cornerRadiusTopLeft = 20;
    series1.columns.template.strokeWidth = 0;
    series1.columns.template.radarColumn.cornerRadius = 20;

    var series2 = chart[props.id].series.push(new am4charts.RadarColumnSeries());
    series2.dataFields.valueX = "value";
    series2.dataFields.categoryY = "category";
    series2.clustered = false;
    series2.columns.template.strokeWidth = 0;
    series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series2.columns.template.radarColumn.cornerRadius = 20;

    series2.columns.template.adapter.add("fill", function(fill, target) {
      return chart[props.id].colors.getIndex(target.dataItem.index);
    });

    // Add cursor
    chart[props.id].cursor = new am4charts.RadarCursor();
  }

  return <div id={props.id} className={props.cName}></div>;
}
