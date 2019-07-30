import React from "react";

import AdversityTitle from "./AdversityTitle";
import Initialize from "./Initialize";

class AdversityTracker extends React.Component {
    render() {
        return (
            <div className="tracker-container">
                <div className="accept-container">
                    <div className="accept-button">accept</div>
                </div>
                <AdversityTitle handleTitle={this.props.handleTitle} />
                <Initialize />
            </div>
        );
    }
}

export default AdversityTracker;