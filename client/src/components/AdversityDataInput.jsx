import React from 'react';
import SubTabNav from './ui/nav/SubTabNav';
import AdversityTrackerContainer from "./AdversityTrackerContainer";
import './AdversityDataInput.css';

const AdversityDataInput = props => {


        return (
            <div>
                <div className="AdversityDataInput">
                    <SubTabNav />
                    { props ? 
                    <AdversityTrackerContainer />
                    : null }
                    <div className="logout-btn">
                        <button onClick={props.logout}>LOG OUT</button>
                    </div>
                </div>
            </div>
        );

}

export default AdversityDataInput;