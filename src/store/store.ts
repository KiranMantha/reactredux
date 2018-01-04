import { createStore } from 'redux';
import { todoApp } from './reducers/todos_reducers'

export const configureStore = () => {
    const store = createStore(todoApp);
    store.subscribe(() =>
        console.log(store.getState())
    );
    return store;
}