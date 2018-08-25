import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_USER } from './types';

export const login = (email, password) => dispatch => {
    Meteor.loginWithPassword(email, password, (err) => {
        if (err) {
          console.log(err);
        } else {
            FlowRouter.redirect("/dashboard");
        }
    });
}

export const logout = () => dispatch => {
    Meteor.logout((err) => {
        if (err) {
          console.log(err);
        } else {
            FlowRouter.redirect("/");
        }
    });
}

export const getUser = () => dispatch => {
    Tracker.autorun(() => {
        dispatch({
            type: AUTH_USER,
            payload: Meteor.user()
        });
    })
}