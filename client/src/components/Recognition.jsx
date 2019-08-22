import React from "react";

import AdversityStory from "./AdversityStory";
import AdversityFeeling from "./AdversityFeeling";

class Recognition extends React.Component {
    render() {
        return (
            <div>
                <AdversityStory story={this.props.story} handleStory={this.props.handleStory} />
                <AdversityFeeling
                    feelings={this.props.feelings}
                    handleAddSlider={this.props.handleAddSlider}
                    handleFeelingTextChange={this.props.handleFeelingTextChange}
                    handleSliderChange={this.props.handleSliderChange}
                />
            </div>
        );
    }
}

export default Recognition;

