import React from 'react';

import Tab from "./NavTab";
import AdversityInput from './AdversityDataInputContainer';
import "./Main.css";

export default function Main() {
    return (
        <div className="main-container">
            <div className="main-navigation">
                <Tab
                    section="Adversity Analyzer"
                />
                <Tab
                    section="Adversity Data Input"
                    selected={true}
                />
            </div>
            <AdversityInput />
        </div>
    )
}