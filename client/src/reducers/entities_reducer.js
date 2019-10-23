import { combineReducers } from 'redux';

import users from './users_reducer';
import adversities from './adversities_reducer';
import beliefs from './beliefs_reducer';

const entitiesReducer = combineReducers({
    users,
    adversities,
    beliefs
});

export default entitiesReducer;