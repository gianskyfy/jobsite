import { HEAD_MAIN } from './actions/types';

const initiateState = {
};

export default function(state = initiateState, action)
{
    switch(action.type)
    {
        case HEAD_MAIN:
            return {
                ...state,
                showMenu: action.payload
            }
        default:
            return state;
    }
}