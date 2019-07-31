import React from "react";

import AdversityStory from "./AdversityStory";
import AdversityFeeling from "./AdversityFeeling";

class Recognition extends React.Component {
    render() {
        return (
            <div>
                <AdversityStory handleStory={this.props.handleStory} />
                <AdversityFeeling />
            </div>
        );
    }
}

export default Recognition;