import { combineReducers } from 'redux';

import users from './users_reducer';
import adversities from './adversities_reducer';
import reflections from './reflections_reducer';

const entitiesReducer = combineReducers({
    users,
    adversities,
    reflections
});

export default entitiesReducer;