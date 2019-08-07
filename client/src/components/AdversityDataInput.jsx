import React from 'react';

import AdversityTracker from "./AdversityTracker";
import Tab from "./NavTab";
import DisplayValues from "../util/DisplayValues";
import './AdversityDataInput.css';

import { createAdversity } from '../actions/adversity_actions';
import { createFeeling } from '../util/feeling_api_util';

class AdversityDataInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: "Recognition",
            recognition: {
                title: "",
                story: "",
                feelings: [{ feeling: "", sliderVal: 0 }]
            },
            introspection: {},
            retrospection: {}
        };
        this.handleTitle = this.handleTitle.bind(this);
        this.handleStory = this.handleStory.bind(this);
        this.handleAddSlider = this.handleAddSlider.bind(this);
        this.handleSliderChange = this.handleSliderChange.bind(this);
        this.handleFeelingChange = this.handleFeelingChange.bind(this);
        this.handleTabClick = this.handleTabClick.bind(this);
        this.handleAccept = this.handleAccept.bind(this);
    }

    componentDidMount() {
        DisplayValues(this.state.recognition);
    }

    componentDidUpdate() {
        DisplayValues(this.state.recognition);
    }

    handleSliderChange(evt, val, idx) {
        const { feelings } = this.state.recognition;
        feelings[idx].sliderVal = val;
        this.setState(state => {
            return {
                feelings: feelings
            };
        });
    }

    handleFeelingChange(evt, idx) {
        const { feelings } = this.state.recognition;
        feelings[idx].feeling = evt.target.value;
        this.setState(state => {
            return { feelings: feelings };
        });
    }

    handleTitle(title) {
        this.setState(state => {
            const recognitionState = state.recognition;
            recognitionState["title"] = title;
            return { recognition: recognitionState };
        });
    }

    handleStory(story) {
        this.setState(state => {
            const recognitionState = state.recognition;
            recognitionState["story"] = story;
            return { recognition: recognitionState };
        });
    }

    handleAddSlider() {
        this.setState(state => {
            const recognitionState = state.recognition;
            recognitionState["feelings"] = recognitionState["feelings"].concat({
                feeling: "",
                sliderVal: 0
            });
            return {
                recognition: recognitionState
            };
        });
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

    handleAccept(e) {
        e.preventDefault();
        const { title, story, feelings } = this.state.recognition;
        const user_id = this.props.currentUser.id;
        // const user_id = 1;
        this.props.createAdversity({ title, story, user_id })
        .then(() => {
            this.setState({
                recognition: {
                    title: "",
                    story: "",
                    feelings: [{ feeling: "", sliderVal: 0 }]
                }
            })
        });
        // createAdversity({ title, story, user_id }).then(adversity => {
        //     const adversity_id = adversity.id
        //     feelings.forEach(feeling => {
        //         let { feeling: name, sliderVal: intensity } = feeling;
        //         createFeeling({ name, intensity, adversity_id })
        //     })
        //     return adversity;
        // }).then(adversity => {
        //     this.setState({
        //         recognition: {
        //             title: "",
        //             story: "",
        //             feelings: [{ feeling: "", sliderVal: 0 }]
        //         }
        //     })
        // })
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
                    <AdversityTracker
                        state={this.state}
                        handleTitle={this.handleTitle}
                        handleStory={this.handleStory}
                        handleAddSlider={this.handleAddSlider}
                        handleSliderChange={this.handleSliderChange}
                        handleFeelingChange={this.handleFeelingChange}
                        handleAccept={this.handleAccept}
                    />
                    <div className="logout-btn">
                        <button onClick={this.props.logout}>LOG OUT</button>
                    </div>
                </div>
                <div className="input-data">
                    <div className="title">Title:</div>
                    <div className="story">Story:</div>
                    <div className="feelings">Feelings:</div>
                </div>
            </div>
        );
    }
}

export default AdversityDataInput;