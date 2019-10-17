import React from 'react';

import ChartContainer from './ChartContainer';
import { displayMonth } from '../util/date_util';

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
        return (
            <div>
                <h1>Adversity Data for { this.props.currentUser.first_name } - { displayMonth() }</h1>
                <div className="chart-container">
                    <ChartContainer />
                </div>
            </div>
        )
    }
}

export default Visualization;