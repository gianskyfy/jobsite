import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_USER } from './types';

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

export const getUser = () => dispatch => {
    let user = Meteor.user();
    dispatch({
        type: AUTH_USER,
        payload: user
    });
}