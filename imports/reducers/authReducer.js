import { AUTH_LOGIN, AUTH_LOGOUT } from './actions/types';

const initiateState = {
    userInfo: {}
};

export default function(state = initiateState, action)
{
    switch(action.type)
    {
        case AUTH_LOGIN:
            return {
                ...state,
                isLoggedIn: action.payload
            }
        case AUTH_LOGOUT:
            return {
                ...state,
                isLoggedOut: action.payload
            }
        default:
            return state;
    }
}