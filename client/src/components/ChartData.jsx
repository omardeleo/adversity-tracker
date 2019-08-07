import React from 'react';

import Chart from './Chart';
import { isObject } from '@amcharts/amcharts4/core';

class ChartData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loadChart: false}
    }

    componentDidMount() {     
        // console.log('user id', this.props.currentUser.id)
        this.props.fetchAdversities(this.props.currentUser.id);
    }

    componentDidUpdate(prevProps) {
        // if (prevProps.adversities.length !== this.props.adversities.length) {
        //     this.setState({ loadChart: true });
        // }
    }

    render() {
        const { adversities } = this.props;
        console.log('chartData adv', adversities)
        let chartDiv = adversities.length > 0 ? <Chart adversities={adversities} /> : "";
        return chartDiv;
    }
}

export default ChartData;