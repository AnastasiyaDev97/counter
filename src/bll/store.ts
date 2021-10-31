import {combineReducers, createStore} from "redux";
import {counterReducer} from "./reducers/counter-reducer";
import {loadState, saveState} from "../utils/local-storage utils";

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>


const persistedState = loadState();
export const store = createStore(
    rootReducer,
    persistedState
);
store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
});

/*

let preloadedState
const persistedTodosString = localStorage.getItem('counter')

if (persistedTodosString) {
    preloadedState = {
        counter: JSON.parse(persistedTodosString)
    }
}

export const store = createStore(rootReducer, preloadedState)*/
