import React from 'react';

import Tab from "./NavTab";
import AdversityInput from './AdversityDataInputContainer';
import Visualization from './VisualizationContainer';

import './Main.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     currentTab: "Adversity Data Input",
        //     title: ""
        // }
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(e) {
        function selectTab(tab, setTab) {
            setTab(tab)
            const selected = document.querySelector(".nav-selected");
            if (selected) {
                selected.classList.remove("nav-selected");
            }
            e.target.classList.add("nav-selected");
        }
        
        let targetTab = e.target.innerText;
        let currentPath = this.props.history.location.pathname;

        if (targetTab === "Adversity Data Input") {
            if (currentPath !== '/input') {
                this.props.history.push('/input');
                selectTab(targetTab, this.props.setMainTab);
            }            
        } else if (targetTab === "Adversity Analyzer") {
            if (currentPath !== '/analyzer') {
                this.props.history.push('/analyzer');
                selectTab(targetTab, this.props.setMainTab);
            }
        }
    }

    displayComponent = () => {
        const tab = this.props.location.pathname;
        if (tab === "/input" || tab === "/") {
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
                        section="Adversity Data Input"
                        handleTabClick={this.handleTabClick}
                        selected={true}
                    />
                    <Tab
                        section="Adversity Analyzer"
                        handleTabClick={this.handleTabClick}
                    />
                </div>
                {this.displayComponent()}
            </div>
        )
    }
}

export default Main;