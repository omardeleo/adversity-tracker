import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { Redirect } from "react-router-dom";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { getDateRange } from "../util/date_util";
import './Chart.css';

const equal = require("deep-equal");

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  renderChart() {
    am4core.useTheme(am4themes_animated);
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    this.chart = chart;
    const { adversities } = this.props;
    chart.data = adversities;
    chart.background.fill = "#181818";
    chart.paddingRight = 50;

    // create y axis
    let yAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    yAxis.dataFields.category = "title";
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
    xAxis.baseInterval = {
      timeUnit: "minute",
      count: 1
    };
    xAxis.strictMinMax = true;
    xAxis.dateFormats.setKey("hour", "hh:mm a");
    xAxis.dateFormats.setKey("minute", "hh:mm a");
    yAxis.renderer.labels.template.fill = am4core.color("#a9a9a9");
    yAxis.renderer.labels.template.cursorOverStyle =
      am4core.MouseCursorStyle.pointer;
    yAxis.renderer.labels.template.events.on(
      "hit",
      function (ev) {
        const title = ev.target.currentText;
        let id;

        for (let adversity of adversities) {
          if (adversity.title === title) {
            id = adversity.adv_id;
            break;
          }
        }

        this.props.onTitleClick(title, id);
        this.setState({ redirect: true });
      },
      this
    );

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
    chart.scrollbarX.strokeWidth = 0.4;

    chart.scrollbarY.background.fill = am4core.color("#181818");
    chart.scrollbarY.thumb.background.fill = am4core.color("#181818");
    chart.scrollbarY.startGrip.background.fill = am4core.color("#181818");
    chart.scrollbarY.endGrip.background.fill = am4core.color("#181818");
    chart.scrollbarY.stroke = am4core.color("#181818");
    chart.scrollbarY.strokeWidth = 0.4;

    chart.scrollbarX.thumb.background.states.getKey(
      "hover"
    ).properties.fill = am4core.color("#121212");
    chart.scrollbarX.thumb.background.states.getKey(
      "down"
    ).properties.fill = am4core.color("#121212");
    chart.scrollbarX.startGrip.background.states.getKey(
      "hover"
    ).properties.fill = am4core.color("#121212");
    chart.scrollbarX.endGrip.background.states.getKey(
      "hover"
    ).properties.fill = am4core.color("#121212");

    chart.scrollbarY.thumb.background.states.getKey(
      "hover"
    ).properties.fill = am4core.color("#121212");
    chart.scrollbarY.thumb.background.states.getKey(
      "down"
    ).properties.fill = am4core.color("#121212");
    chart.scrollbarY.startGrip.background.states.getKey(
      "hover"
    ).properties.fill = am4core.color("#121212");
    chart.scrollbarY.endGrip.background.states.getKey(
      "hover"
    ).properties.fill = am4core.color("#121212");

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomXY";

      for (let adversity of adversities) {
          let data = [];
          for (let recognition of adversity.recognitions) {

              // REFACTOR THIS
              function extractFeelings(feelings) {
                  return feelings.map(feeling => {
                      return {name: feeling.name, intensity: feeling.intensity}
                  })
              }
              let dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
              
              let timestamp = recognition.recognition_date ? recognition.recognition_date : recognition.timestamp;

              let obj = {
                  title: adversity.title, 
                  timestamp: timestamp,
                  displayDate: new Date(timestamp).toLocaleString('en-US', dateOptions),
                  story: recognition.story,
                  story_trunc: recognition.story.length > 140 ? recognition.story.slice(0, 140) + "..." : recognition.story.slice(0,140),
                  feelings: extractFeelings(recognition.feelings)
              }

              data.push(obj)
          }

          let series = chart.series.push(new am4charts.LineSeries());
          series.name = "Adversity";
          series.dataFields.dateX = "timestamp";
          series.dataFields.categoryY = "title";
          series.strokeWidth = 1;
          series.strokeOpacity = 0.8;
          series.strokeDasharray = 12;
          series.sequencedInterpolation = true;

          let circleBullet = series.bullets.create(am4charts.CircleBullet);
          circleBullet.interactionsEnabled = true;
          circleBullet.circle.radius = 7;
          circleBullet.tooltipHTML = `
              <div class="tooltip-date">{displayDate}</div>
              <div class="tooltip-story">{story_trunc}</div> 
              <input type="button" value="Click for more" />
          `;
          series.tooltip.keepTargetHover = true
          series.tooltip.pointerOrientation = "vertical";
          series.tooltip.label.interactionsEnabled = true;

          series.tooltip.events.on("hit", function (ev) {
              const { title, story, timestamp, feelings } = ev.target.dataItem.dataContext
              let dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
              const displayDate = new Date(timestamp).toLocaleString('en-US', dateOptions)
              if (ev.event.target.tagName !== 'INPUT') return;

              function generateFeelingsHtml(feelings) {
                  let markup = '';
                  feelings.forEach(feeling => {
                      markup += `
                          <div class="feeling-container">
                              <div class="score">${feeling.intensity}</div>
                              <div class="feeling">${feeling.name}</div>   
                          </div>
                      `
                  })
                  return markup;
              }

              let feelingsHtml = generateFeelingsHtml(feelings)
              let modalHtml = `
                  <div class="modal">
                      <div class="info-container">
                          <div><h2>${title}</h2></div>
                          <div>${displayDate}</div>
                          <div>
                              <h3>Story</h3>
                              <div class="story-container">
                                  ${story}
                              </div>
                          </div>
                      </div>
                      <div class="feelings-container">
                          <div class="feeling-header">
                              <div><h3>I notice I'm feeling</h3></div>
                          </div>
                          ${feelingsHtml}
                      </div>
                  </div>
              `;
              let closeModalIcon = document.createElement('i');
              closeModalIcon.className = 'material-icons ampopup-close';
              closeModalIcon.innerHTML = 'close';
              closeModalIcon.addEventListener("click", () => chart.modal.close())
              this.chart.openModal(modalHtml);
              let closeModalDiv = document.querySelector('.modal')
              closeModalDiv.append(closeModalIcon)
          }, this);
          series.data = data;
          series.showOnInit = false;
        }

    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";
    let dateOffset = getDateRange().tzOffset;
    chart.dateFormatter.timezoneOffset = dateOffset;
    chart.events.on("ready", function() {
      xAxis.zoomToDates(getDateRange().zoom, getDateRange().end);
    });
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
            <div id="chartdiv" style={{ width: "940px", height: "500px" }}></div>
        );
    }
}

export default Chart;
