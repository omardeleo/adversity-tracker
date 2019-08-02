import React from "react";

import AdversityTitle from "./AdversityTitle";
import Recognition from "./Recognition";
import './AdversityTracker.css';

class AdversityTracker extends React.Component {
    displayComponent = state => {
        const currentTab = state.currentTab;
        if (currentTab === "Recognition") {
            return (
                <Recognition
                    handleStory={this.props.handleStory}
                    feelings={this.props.state.recognition.feelings}
                    handleAddSlider={this.props.handleAddSlider}
                    handleFeelingChange={this.props.handleFeelingChange}
                    handleSliderChange={this.props.handleSliderChange}
                />
            );
        } else {
            return <h1>{currentTab}</h1>;
        }
    };
    render() {
        return (
            <div className="tracker-container">
                <div className="accept-container">
                    <div className="accept-button" onClick={this.props.handleAccept}>accept</div>
                </div>
                <AdversityTitle handleTitle={this.props.handleTitle} />
                {this.displayComponent(this.props.state)}
            </div>
        );
    }
}

export default AdversityTracker;