import {createStore, combineReducers} from "redux";
import defaultReducer from "./reducers/defaultReducer"

export default ()=>createStore(combineReducers({
    state: defaultReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())