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
        this.state = {
            loadChart: false
        }
    }

    componentDidMount() {
        this.props.fetchAdversities(this.props.currentUser.id);
    }
    

    convertIntensityValue(value) {
        if (value < 34) {
            return "mildly";
        } else if (value > 34 && value < 67) {
            return "moderately";
        } else {
            return "intensely";
        }
    }

    mapIntensityValues(feelings) {
        feelings.forEach(feeling => {
            feeling.intensity = this.convertIntensityValue(feeling.intensity);
        })
        return feelings;
    }

    render() {
        const { adversities } = this.props;
        const adversityData = [];
        
        for (let adversity of adversities) {
            let recognitions = [];
            for (let recognition of adversity.recognitions) {
                let { feelings, story } = recognition;
                recognitions.push({
                    recognition_date: recognition.recognition_date, 
                    timestamp: recognition.created_at, 
                    story, 
                    feelings: this.mapIntensityValues(feelings)
                })
            }
            let point = { adv_id: adversity.id, title: adversity.title, recognitions }
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