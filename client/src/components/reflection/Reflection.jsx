import React from 'react';
import Header from '../ui/HeaderContainer';
import Motivation from "./motivation/Motivation";

import '../stylesheets/Reflection.css';
import '../stylesheets/modules.css';
import '../stylesheets/header_module.css';
import '../stylesheets/journal_nav.css';

export const Reflection = () => {
  
  return(
    <div className="form-wrapper">
      <Header />
      <Motivation />
    </div>
  );

};