import React from "react";

import AdversityStory from "./AdversityStory";
import AdversityFeeling from "./AdversityFeeling";

class Recognition extends React.Component {
    render() {
        return (
            <div>
                <AdversityStory handleStory={this.props.handleStory} />
                <AdversityFeeling
                    feelings={this.props.feelings}
                    handleAddSlider={this.props.handleAddSlider}
                    handleFeelingChange={this.props.handleFeelingChange}
                    handleSliderChange={this.props.handleSliderChange}
                />
            </div>
        );
    }
}

export default Recognition;