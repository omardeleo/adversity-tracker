import React from "react";

import AdversityTitle from "./AdversityTitle";
import Recognition from "./Recognition";
import { Reflection } from "./reflection/Reflection";
import { Retrospection } from "./retrospection/Retrospection";
import { createRecognition } from "../util/recognition_api_util";
import { createFeeling } from "../util/feeling_api_util";
import { getPastDateValue, validatePastDate } from "../util/date_util";
import './AdversityTracker.css';

class AdversityTracker extends React.Component {

    handleAccept(e) {
        e.preventDefault();
        const { title, story, feelings, adding, currentUser } = this.props;
        const pastDate = getPastDateValue();
        const user_id = currentUser.id;

        // let isValidDate;

        // if (pastDate) {
        //     isValidDate = validatePastDate(pastDate);
        // }

        if (adding) {
            createRecognition(this.props.adversity_id, story, pastDate)
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
            .then(() => this.props.history.push("/analyzer"));
        } else {
            this.props
            .createAdversity({ title, user_id, adversity_date: pastDate })
            .then(({ adversity }) => {
                return createRecognition(adversity.id, story, pastDate);
            })
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
            .then(() => this.props.history.push("/analyzer"));
        }

        
    }

    generateFormButtons(actions) {
        const {accept, clear} = actions;
        
        return (
            <div className="button-container">
                <div className="accept-button" onClick={accept}>accept</div>
                <div className="clear-button" onClick={clear}>clear</div>
            </div>
        )
    }

    handleCheck(e) {
        const dateInput = document.querySelector('.date-input');
        dateInput.classList.toggle('date-hidden');
    }

    generateInputFields() {
        const { story, feelings, subtab } = this.props;
        
        if (subtab === 'Recognition') {
            const { adding, title, updateTitle } = this.props;
            let action = { accept: this.handleAccept.bind(this), clear: this.props.clearForm };
            let formButtons = this.generateFormButtons(action);

            return <div className="tracker-container"> 
                <div className="header-wrapper">
                    <AdversityTitle adding={adding} title={title} handleTitle={updateTitle} />
                    {formButtons}
                </div>
                <div className="date-check">
                    <input 
                        id="past-check" 
                        type="checkbox"
                        onClick={this.handleCheck.bind(this)}
                    >
                    </input> 
                    <label htmlFor="past-check">This adversity occurred in the past</label>
                </div>
                <div className="date-input date-hidden">
                    <label htmlFor="past-date">Past adversity date: </label>
                    <input id="past-date" placeholder="ex: 12/13/2017" />
                </div>
                <Recognition 
                    handleStory={this.props.updateStory}
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