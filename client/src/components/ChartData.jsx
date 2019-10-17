import React from 'react';

import Chart from './Chart';
import './ChartData.css';

function Placeholder() {
    return (
        <div className="placeholder">
            Click on the <strong>&nbsp;Adversity Data Input&nbsp;</strong> tab to log your first adversity.
        </div>
    )
}

class ChartData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loadChart: false}
    }

    componentDidMount() {     
        this.props.fetchAdversities(this.props.currentUser.id);
        this.props.fetchBeliefs();
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
            /> : <Placeholder />;
        return chartDiv;
    }
}

export default ChartData;