import { Action, ActionsTypes } from "./actions";
import { combineReducers } from "redux";

function counter(state: number = 1, action: Action): number {
    switch(action.type) {
        case ActionsTypes.INCREMENT_COUNTER:
            return state + action.amount;
        case ActionsTypes.DECREMENT_COUNTER:
            return state - action.amount;
        case ActionsTypes.MULTIPLY_COUNTER:
            return state * action.amount;
        default:
            return state;
    }
}

function color(state: string = 'black', action: Action): string {
    switch(action.type) {
        case ActionsTypes.CHANGE_COLOR:
            return action.color;
        default:
            return state;
    }
}

const counterApp = combineReducers({
    counter,
    color
});

export default counterApp;