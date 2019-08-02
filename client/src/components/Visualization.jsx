import React from 'react';

import ChartContainer from './ChartContainer';

class Visualization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adversities: {}
        }
    }

    render() {
        return (
            <div>
                <h1>Adversity Data for Dean Dibbert</h1>
                <div className="chart-container">
                    <ChartContainer />
                </div>
            </div>
        )
    }
}

export default Visualization;

// <h1>Adversity Data for {this.props.currentUser.name}</h1>