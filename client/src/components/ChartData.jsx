import React from 'react';

import Chart from './Chart';
import AdversityTitle from './AdversityTitle';
import AdversityDataInput from './AdversityDataInput';

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
            // console.log('ad', adversity)
            // adversityData.push({title: adversity.title, })
            for (let recognition of adversity.recognitions) {
                let point = {title: adversity.title, recognition: recognition.created_at}
                adversityData.push(point);
            }
        }
        console.log('aD', adversityData);
        let chartDiv = adversityData.length > 0 ? <Chart adversities={adversityData} /> : "";
        return chartDiv;
    }
}

export default ChartData;