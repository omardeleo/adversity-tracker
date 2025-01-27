import React from "react";

import AdversityTitle from "./AdversityTitle";
import Recognition from "./Recognition";
import { Reflection } from "./reflection/Reflection";
import { Retrospection } from "./retrospection/Retrospection";
import { createRecognition } from "../util/recognition_api_util";
import { createFeeling } from "../util/feeling_api_util";
import './AdversityTracker.css';

class AdversityTracker extends React.Component {

    handleAccept(e) {
        e.preventDefault();
        const { title, story, feelings, adding, currentUser } = this.props;
        const user_id = currentUser.id;
        
        if (adding) {
            createRecognition(this.props.adversity_id, story)
                .then(recognition => {
                    for (let feel of feelings) {
                        const { feeling, sliderVal } = feel;
                        createFeeling({
                            name: feeling,
                            intensity: sliderVal,
                            recognition_id: recognition.id
                        });
                    }
                })
                .then(() => this.props.clearForm())
                .then(() => this.props.history.push('/analyzer'));
        } else {
            
            this.props.createAdversity({ title, user_id })
                .then(({ adversity }) => {
                    
                    return createRecognition(adversity.id, story);
                }).then(recognition => {
                    for (let feel of feelings) {
                        const { feeling, sliderVal } = feel;
                        createFeeling({
                            name: feeling,
                            intensity: sliderVal,
                            recognition_id: recognition.id
                        });
                    }
                }).then(() => this.props.clearForm())
                .then(() => this.props.history.push('/analyzer'));
        }
    }

    generateFormButtons(actions) {
        let {accept, clear} = actions;
        
        return(
            <div className="button-container">
                <div className="accept-button" onClick={accept}>accept</div>
                <div className="clear-button" onClick={clear}>clear</div>
            </div>
        )
    }

    generateInputFields() {

        const { story, feelings, subtab } = this.props;
        
        if (subtab === 'Recognition') {
            const { adding, title, updateTitle } = this.props;
            let action = { accept: this.handleAccept.bind(this), clear: this.props.clearForm }
            let formButtons = this.generateFormButtons(action)
            return <div className="tracker-container"> 
                <div className="header-wrapper">
                    <AdversityTitle adding={adding} title={title} handleTitle={updateTitle} />
                    {formButtons}
                </div>
                <Recognition handleStory={this.props.updateStory}
                story={story}
                feelings={feelings}
                handleAddSlider={this.props.addSlider}
                handleFeelingTextChange={this.props.updateFeelingText}
                handleSliderChange={this.props.updateFeelingValue}
                />
                </div>
        } else if (subtab === 'Reflection') {
            return <div className="tracker-container">
                <Reflection generateFormButtons={this.generateFormButtons}/>
            </div>
        } else {
            return <Retrospection />
        }

    }

    render() {
        
        const inputFields = this.generateInputFields();
        
        return (
            <div className="tracker-container">
                {inputFields}
            </div>
        );
    }
}

export default AdversityTracker;