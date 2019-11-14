import React from 'react';
//import * as am4core from "@amcharts/amcharts4/core";
//import * as am4charts from "@amcharts/amcharts4/charts";
//import { Redirect } from 'react-router-dom';


import CylinderGauge from '../dataVisualModules/CylinderGauge';
//import { displayMonth } from '../../util/date_util';


export const Retrospection = () => {
  return(
    <div>
      <h1>Energy Data </h1>
      <div className="chart-container">
          <CylinderGauge />
      </div>
    </div>
  )
};
