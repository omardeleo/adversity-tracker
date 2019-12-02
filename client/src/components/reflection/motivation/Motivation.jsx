import React from "react";
import { connect } from "react-redux";
import JournalNav from "../../ui/nav/JournalNav";
import Beliefs from "./beliefs/BeliefsContainer";
import Values from "./values/ValuesContainer";

const Motivation = props => {

  const generateJournalPage = () => {
    switch (props.journalTab) {
      case "Motivation":
        return <Beliefs />;
      case "Values":
        return <Values />
      default:
        return <div className="place-holder">Module in Development</div>;
    }
  };

  const journalPage = generateJournalPage();

  return (
    <div className="form-wrapper">
      <div className="sub-tab-wrapper">

        <JournalNav />

        {journalPage}

      </div>
    </div>
  );
};

const mapStateToProps = ({ ui }) => ({
  journalTab: ui.journal_tab
});

export default connect(mapStateToProps, null)(Motivation)
