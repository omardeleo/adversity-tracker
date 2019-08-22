import React from "react";

import AdversityStory from "./AdversityStory";
import AdversityFeeling from "./AdversityFeeling";

class Recognition extends React.Component {
    render() {
        const { 
            feelings, 
            handleAddSlider, 
            handleFeelingTextChange, 
            handleSliderChange,
            handleStory,
            story
        } = this.props;
        return (
            <div>
                <AdversityStory 
                    story={story} 
                    handleStory={handleStory} 
                />
                <AdversityFeeling
                    feelings={feelings}
                    handleAddSlider={handleAddSlider}
                    handleFeelingTextChange={handleFeelingTextChange}
                    handleSliderChange={handleSliderChange}
                />
            </div>
        );
    }
}

export default Recognition;

