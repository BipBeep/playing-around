import { createStore } from 'redux'
import counterApp from './reducers'

export interface AppState {
    counter: number,
    color: string,
}

const initialState: AppState = {
    counter: 1,
    color: 'black'
};

const store = createStore(counterApp, initialState);
export default store;