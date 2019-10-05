import { combineReducers } from 'redux';

import users from './users_reducer';
import adversities from './adversities_reducer';

const entitiesReducer = combineReducers({
    users,
    adversities
});

export default entitiesReducer;