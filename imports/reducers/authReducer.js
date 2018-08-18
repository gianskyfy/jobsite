import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_USER } from './actions/types';

const initiateState = {};

export default function(state = initiateState, action)
{
    let user = Meteor.users.find({ _id: Meteor.userId() });
      console.log(user);
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
                userInfo: action.payload
            }
        default:
            return state;
    }
}