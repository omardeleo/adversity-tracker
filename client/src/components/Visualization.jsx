import React from 'react';

import ChartContainer from './ChartContainer';

class Visualization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adversities: {}
        }
    }

    componentDidMount() {
        this.props.getUser(this.props.currentUser.id);
    }

    render() {
        console.log(this.props.currentUser.name);
        return (
            <div>
                <h1>Adversity Data for {this.props.currentUser.name}</h1>
                <div className="chart-container">
                    <ChartContainer />
                </div>
            </div>
        )
    }
}

export default Visualization;