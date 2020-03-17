import UserActionTypes from './user.actionTypes';
export const setCurrentUser = user =>(
    {
        type:UserActionTypes.SET_CURRENT_USER,
        payload:user
    }
);