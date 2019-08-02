import React from 'react';

import Chart from './Chart';

class ChartData extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAdversities(1);
        // this.props.fetchAdversities(this.props.currentUser.id);
    }


    render() {
        const { adversities } = this.props;
        let chartDiv = adversities.length > 0 ? <Chart adversities={adversities} /> : "";
        return chartDiv;
    }
}

export default ChartData;