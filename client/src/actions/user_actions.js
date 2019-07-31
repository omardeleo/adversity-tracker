import * as APIUtil from '../util/user_api_util';

import { receiveCurrentUser } from './session_actions'

export const getUser = user => dispatch => {
    return APIUtil.getUser(user).then(user => {
        return dispatch(receiveCurrentUser(user))
    })
};