import React from 'react';

import AdversityTrackerContainer from "./AdversityTrackerContainer";
import Tab from "./NavTab";
import './AdversityDataInput.css';

class AdversityDataInput extends React.Component {
    constructor(props) {
        super(props);

        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(e) {
        const currentTab = e.target.innerText;
        debugger
        const selected = document.querySelector(".nav-selected");
        if (selected) {
            selected.classList.remove("nav-selected");
        }
        e.target.classList.add("nav-selected");
        this.setState(state => {
            return { currentTab: currentTab };
        });
    }

    render() {
        return (
            <div>
                <div className="AdversityDataInput">
                    <div className="navigation">
                        <Tab
                            section="Recognition"
                            handleTabClick={this.handleTabClick}
                            selected={true}
                        />
                        <Tab section="Introspection" handleTabClick={this.handleTabClick} />
                        <Tab section="Retrospection" handleTabClick={this.handleTabClick} />
                    </div>
                    { this.props ? 
                    <AdversityTrackerContainer />
                    : null }
                    <div className="logout-btn">
                        <button onClick={this.props.logout}>LOG OUT</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdversityDataInput;