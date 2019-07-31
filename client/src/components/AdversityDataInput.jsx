import React from 'react';

import AdversityTracker from "./AdversityTracker";
import Tab from "./NavTab";
import './AdversityDataInput.css';

class AdversityDataInput extends React.Component {
    render() {
        return (
            <div>
                <div className="AdversityDataInput">
                    <div className="navigation">
                        <Tab
                            section="Recognition"
                            selected={true}
                        />
                        <Tab section="Introspection" />
                        <Tab section="Retrospection" />
                    </div>
                </div>
                <AdversityTracker />
            </div>
        )
    }
}

export default AdversityDataInput;