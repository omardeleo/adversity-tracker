import { combineReducers } from 'redux';

import users from './users_reducer';
import adversities from './adversities_reducer';
import ui from './ui_reducer';

const entitiesReducer = combineReducers({
    users,
    adversities,
    ui
});

export default entitiesReducer;