export type Action = CounterAction | StyleAction;

export enum ActionsTypes {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    MULTIPLY_COUNTER,
    CHANGE_COLOR,
}

interface CounterAction {
    type: ActionsTypes.INCREMENT_COUNTER |
          ActionsTypes.DECREMENT_COUNTER |
          ActionsTypes.MULTIPLY_COUNTER,
    amount: number,
}

interface StyleAction {
    type: ActionsTypes.CHANGE_COLOR,
    color?: string
}

export function incrementCounter(amount: number): CounterAction {
    return {
        type: ActionsTypes.INCREMENT_COUNTER,
        amount: amount,
    };
}

export function decrementCounter(amount: number): CounterAction {
    return {
        type: ActionsTypes.DECREMENT_COUNTER,
        amount: amount,
    };
}

export function multiplyCounter(amount: number): CounterAction {
    return {
        type: ActionsTypes.MULTIPLY_COUNTER,
        amount: amount,
    };
}

export function changeColor(color: string): StyleAction {
    return {
        type: ActionsTypes.CHANGE_COLOR,
        color: color,
    };
}