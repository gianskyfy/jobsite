import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_USER } from './actions/types';

const initiateState = {};

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
        case AUTH_USER:
            return {
                ...state,
                userInfo: {
                    email: action.payload && action.payload.username,
                    name: action.payload && action.payload.profile.name,
                    userid: action.payload && action.payload._id
                }
            }
        default:
            return state;
    }
}