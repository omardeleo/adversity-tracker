import React from "react";

import AdversityTitle from "./AdversityTitle";
import Recognition from "./Recognition";
import './AdversityTracker.css';

class AdversityTracker extends React.Component {

    render() {
        const { adding, title, updateTitle, story, feelings } = this.props;
        return (
            <div className="tracker-container">
                <div className="accept-container">
                    <div className="accept-button" onClick={this.props.handleAccept}>accept</div>
                </div>
                <AdversityTitle adding={adding} title={title} handleTitle={updateTitle} />
                <Recognition
                    handleStory={this.props.updateStory}
                    story={story}
                    feelings={feelings}
                    handleAddSlider={this.props.handleAddSlider}
                    handleFeelingTextChange={this.props.updateFeelingText}
                    handleSliderChange={this.props.updateFeelingValue}
                />
            </div>
        );
    }
}

export default AdversityTracker;
// {this.displayComponent(this.props.state)}