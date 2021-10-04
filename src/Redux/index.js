import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { mealReducer } from './reducer/favorite';

export const rootReducer=combineReducers(
    { 
        mealReducer,
    }
)

export const store =createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk))
    // +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )