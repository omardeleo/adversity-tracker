import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import ui from './ui_reducer';
import form from './form_reducer';
import modal from './modal_reducer';

export default combineReducers({ entities, form, session, ui, modal, errors });