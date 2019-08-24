import React from 'react';

import Chart from './Chart';

class ChartData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loadChart: false}
    }

    componentDidMount() {     
        this.props.fetchAdversities(this.props.currentUser.id);
    }

    render() {
        const { adversities } = this.props;
        const adversityData = [];
        for (let adversity of adversities) {
            let recognitions = [];
            for (let recognition of adversity.recognitions) {
                recognitions.push(recognition.created_at) 
            }
            let point = { adv_id: adversity.id, title: adversity.title, recognitions: recognitions }
            adversityData.push(point);
        }
        let chartDiv = adversityData.length > 0 ? 
            <Chart 
                adversities={adversityData} 
                onTitleClick={this.props.setTitle} 
            /> : "";
        return chartDiv;
    }
}

export default ChartData;