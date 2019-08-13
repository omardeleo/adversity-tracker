import React from 'react';

import Chart from './Chart';

class ChartData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loadChart: false}
    }

    componentDidMount() {     
        // console.log('cdM', this.props.currentUser.id)
        this.props.fetchAdversities(this.props.currentUser.id);
    }

    render() {
        const { adversities } = this.props;
        // console.log(this.props)
        const adversityData = [];
        for (let adversity of adversities) {
            for (let recognition of adversity.recognitions) {
                let point = {adv_id: adversity.id, title: adversity.title, recognition: recognition.created_at}
                adversityData.push(point);
            }
        }
        // console.log('adv in ch', adversities)
        let chartDiv = adversityData.length > 0 ? <Chart adversities={adversityData} onTitleClick={this.props.setTitle} /> : "";
        return chartDiv;
    }
}

export default ChartData;