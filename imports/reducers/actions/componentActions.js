import { HEAD_MAIN } from './types';

export const isHeadMain = () => dispatch => {
    let isAuth = FlowRouter._current.route.options.authenticated == true;
    let show;

    if(isAuth && Meteor.userId())
    {
        show = false;
    }
    else if(!isAuth && Meteor.userId())
    {
        show = true;
    }
    else{
        show = true;
    }

    dispatch({
        type: HEAD_MAIN,
        payload: show
    });
}