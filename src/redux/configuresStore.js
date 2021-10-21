import { createStore  } from 'redux';
import { Reducer, initialState } from './reducer';

export const ConfiguresStore =() =>{
    const store = createStore(
        Reducer,
        initialState
    );
    return store;
}


