import { createStore } from 'redux';
import { todoApp } from './reducers/todos_reducers';
import STORE_CONSTANTS from './constants';

const configureStore = () => {
    const store = createStore(todoApp, STORE_CONSTANTS.initialState);
    store.subscribe(() =>
        console.log(store.getState())
    );
    return store;
}

export default configureStore;