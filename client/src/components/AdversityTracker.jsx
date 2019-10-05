import React from "react";

import AdversityTitle from "./AdversityTitle";
import Recognition from "./Recognition";
import { Reflection } from "./Reflection";
import { createRecognition } from "../util/recognition_api_util";
import { createFeeling } from "../util/feeling_api_util";
import './AdversityTracker.css';

class AdversityTracker extends React.Component {

    handleAccept(e) {
        e.preventDefault();
        const { title, story, feelings, adding, currentUser } = this.props
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
                    return createRecognition(adversity.id, story)
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

    generateInputFields() {

        const { story, feelings, subtab } = this.props;
        
        if (subtab === 'Recognition') {
            return <Recognition handleStory={this.props.updateStory}
                story={story}
                feelings={feelings}
                handleAddSlider={this.props.addSlider}
                handleFeelingTextChange={this.props.updateFeelingText}
                handleSliderChange={this.props.updateFeelingValue}
                />
        } else if (subtab === 'Reflection') {
            return <Reflection />;
        } else {
            return <div>RETROSPECTION</div>
        }

    }

    render() {
        const { adding, title, updateTitle } = this.props;
        const inputFields = this.generateInputFields();
        
        return (
            <div className="tracker-container">
                <div className="accept-container">
                    <div className="accept-button" onClick={this.handleAccept.bind(this)}>accept</div>
                </div>
                <div className="clear-container">
                    <div className="clear-button" onClick={this.props.clearForm}>clear</div>
                </div>
                <AdversityTitle adding={adding} title={title} handleTitle={updateTitle} />
                {inputFields}
            </div>
        );
    }
}

export default AdversityTracker;