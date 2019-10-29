import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import forms from './forms_reducer';

export default combineReducers({ entities, forms, session, ui, errors });