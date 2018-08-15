import { AUTH_LOGIN, AUTH_LOGOUT } from './types';

export const login = (email, password) => dispatch => {
    Meteor.loginWithPassword(email, password, (err) => {
        if (err) {
          console.log(err);
        } else {
          dispatch({
              type: AUTH_LOGIN,
              payload: true
          });
        }
    });
}

export const logout = () => dispatch => {
    Meteor.logout((err) => {
        if (err) {
          console.log(err);
        } else {
            dispatch({
                type: AUTH_LOGOUT,
                payload: true
            });
        }
    });
}