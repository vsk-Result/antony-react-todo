import {applyMiddleware, createStore} from 'redux';
import { rootReducer } from './rootReducer';
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
