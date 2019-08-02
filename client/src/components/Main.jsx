import React from 'react';

import Tab from "./NavTab";
import AdversityInput from './AdversityDataInputContainer';
import Visualization from './VisualizationContainer';

import './Main.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: "Adversity Data Input"
        }
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(e) {
        const currentTab = e.target.innerText;
        const selected = document.querySelector(".nav-selected");
        if (selected) {
            selected.classList.remove("nav-selected");
        }
        e.target.classList.add("nav-selected");
        this.setState(state => {
            return { currentTab: currentTab };
        });
    }
    displayComponent = tab => {
        if (tab === "Adversity Data Input") {
            return <AdversityInput />
        } else {
            return <Visualization />
        }
    }
    render() {
        return (
            <div className="main-container">
                <div className="main-navigation">
                    <Tab
                        section="Adversity Analyzer"
                        handleTabClick={this.handleTabClick}
                    />
                    <Tab
                        section="Adversity Data Input"
                        handleTabClick={this.handleTabClick}
                        selected={true}
                    />
                </div>
                {this.displayComponent(this.state.currentTab)}
            </div>
        )
    }
}

export default Main;