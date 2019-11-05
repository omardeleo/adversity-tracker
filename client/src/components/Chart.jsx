import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { Redirect } from 'react-router-dom';

import { getDateRange } from '../util/date_util';
import './Chart.css';
const equal = require('deep-equal');

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
        // this.bulletClick = this.bulletClick.bind(this);
        // this.openPopup = this.openPopup.bind(this);
    }

    renderChart() {
        let chart = am4core.create("chartdiv", am4charts.XYChart);
        this.chart = chart;

        const { adversities } = this.props;
        // console.log('Chart.jsx', adversities);
        chart.data = adversities;
        chart.background.fill = "#282828";
        chart.paddingRight = 50;

        // create y axis
        let yAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        yAxis.dataFields.category = "title"
        yAxis.renderer.grid.template.disabled = true;
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
        xAxis.renderer.labels.template.fill = am4core.color("#a9a9a9");
        xAxis.renderer.grid.template.stroke = am4core.color("#a9a9a9");
        xAxis.renderer.line.strokeOpacity = 1;
        xAxis.renderer.line.strokeWidth = 2;
        xAxis.renderer.line.stroke = am4core.color("#a9a9a9");

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

        for (let adversity of adversities) {
            // console.log('adversity', adversity)
            let data = [];
            // let { story } = adversity;
            for (let recognition of adversity.recognitions) {
                // console.log('recognition', recognition)
                console.log('length', recognition.story.length)
                let obj = {
                    title: adversity.title, timestamp: recognition.timestamp,
                    story: recognition.story,
                    story_trunc: recognition.story.length > 140 ? recognition.story.slice(0, 140) + "..." : recognition.story.slice(0,140)
                }
                data.push(obj)
            }
            let series = chart.series.push(new am4charts.LineSeries());
            series.name = "Adversity";
            series.dataFields.dateX = "timestamp";
            series.dataFields.categoryY = "title";
            series.strokeWidth = 3;
            series.sequencedInterpolation = true;
            let circleBullet = series.bullets.create(am4charts.CircleBullet);
            circleBullet.interactionsEnabled = true;
            circleBullet.tooltipHTML = `<p class="tooltip">{story_trunc}</p><input type="button" value="Click for more" />`;
            series.tooltip.keepTargetHover = true
            series.tooltip.pointerOrientation = "vertical";
            series.tooltip.label.interactionsEnabled = true;
            series.tooltip.events.on("hit", function (ev) {
                const { title, story, timestamp } = ev.target.dataItem.dataContext
                const displayDate = new Date(timestamp).toLocaleString()
                // console.log("clicked on ", ev.target);
                // if (ev.target.tagName !== 'INPUT') return;
                // console.log('ev', ev.target.dataItem.dataContext)
                if (ev.event.target.tagName !== 'INPUT') return;
                

                let htmll = `
                    <div class="modal">
                        <div class="info-container">
                            <div><strong>Adversity: </strong>${title}</div>
                            <div><strong>Date</strong>: ${displayDate}</div>
                            <div><strong>Recognition:</strong> ${story}</div>
                        </div>
            
                        <div class="feelings-container">
                        <div class="feeling-header">
                        <div><strong>Feeling</strong></div>
                        <div><strong>Intensity</strong></div>
                        </div>
                            <div class="feeling-container">
                            <div class="feeling">Eager</div>
                            <div class="score">moderately</div>
                        </div>
                        <div class="feeling-container">
                        <div class="feeling">Confused</div>
                        <div class="score">moderately</div>
                        </div>
                        <div class="feeling-container">
                        <div class="feeling">Bemused</div>
                        <div class="score">extremely</div>
                        </div>
                        <div class="feeling-container">
                        <div class="feeling">Eager</div>
                        <div class="score">moderately</div>
                        </div>
                        <div class="feeling-container">
                        <div class="feeling">Confused</div>
                        <div class="score">moderately</div>
                        </div>
                        <div class="feeling-container">
                        <div class="feeling">Bemused</div>
                        <div class="score">extremely</div>
                        </div>
                        <div class="feeling-container">
                        <div class="feeling">Eager</div>
                        <div class="score">moderately</div>
                        </div>
                        <div class="feeling-container">
                        <div class="feeling">Confused</div>
                        <div class="score">moderately</div>
                        </div>
                        <div class="feeling-container">
                        <div class="feeling">Bemused</div>
                        <div class="score">extremely</div>
                        </div>
                        <div class="feeling-container">
                        <div class="feeling">Eager</div>
                        <div class="score">moderately</div>
                        </div>
                        <div class="feeling-container">
                        <div class="feeling">Confused</div>
                        <div class="score">moderately</div>
                        </div>
                        <div class="feeling-container">
                        <div class="feeling">Bemused</div>
                        <div class="score">extremely</div>
                        </div>
                        <div class="feeling-container">
                        <div class="feeling">Eager</div>
                        <div class="score">moderately</div>
                        </div>
                        <div class="feeling-container">
                        <div class="feeling">Confused</div>
                        <div class="score">moderately</div>
                        </div>
                        <div class="feeling-container">
                        <div class="feeling">Bemused</div>
                        <div class="score">extremely</div>
                        </div>
                        <div class="feeling-container">
                        <div class="feeling">Eager</div>
                        <div class="score">moderately</div>
                        </div>
                        <div class="feeling-container">
                        <div class="feeling">Confused</div>
                        <div class="score">moderately</div>
                        </div>
                        <div class="feeling-container">
                        <div class="feeling">Bemused</div>
                        <div class="score">extremely</div>
                        </div>
                        <div class="feeling-container">
                        <div class="feeling">Confused</div>
                        <div class="score">moderately</div>
                        </div>
                        <div class="feeling-container">
                        <div class="feeling">Bemused</div>
                        <div class="score">extremely</div>
                        </div>
            </div>
            </div>
                `
                // this.chart.openModal(`
                //     <div><strong>Adversity</strong>: ${title}</div>
                //     <div><strong>Recognition</strong>: ${story}</div>
                //     <div><strong>Date</strong>: ${displayDate}</div>
                // `);
                this.chart.openModal(htmll);
                // if (ev.target.tagName == 'INPUT') {
                //     
                // }
                // this.chart.openPopup("Hello there!");
            }, this);
            series.data = data;
        }
    }

    // openPopup(e, chart) {
    //     if (e.target.tagName !== 'INPUT') return;
    // }

    // bulletClick(e) {
    //     // console.log('this.state', this.state)
    //     // console.log('CLICKING ON CIRCLE');
    //     // console.log('targ', e.target.tagName)
    //     if (e.target.tagName !== 'INPUT') return;
    //     alert("open modal")
    //     // console.log('targ', e.target.tagName)
    //     // var closest = e.target.closest('div');
    //     // var pp = closest.querySelector('p');

    //     // console.log('pp',pp)
    //     // pp.innerHTML = "HAHAHAHAHAHA"
    //     // this.setState({isStoryExpanded: true});

    // }

    componentDidMount() {
        this.renderChart();
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log('prevPros', prevProps)
        // console.log(this.state);
        // console.log('prevState', prevState)
        if (!equal(prevProps.adversities, this.props.adversities) ||
            !equal(prevState.isStoryExpanded, this.state.isStoryExpanded)) {
            this.chart.dispose();
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