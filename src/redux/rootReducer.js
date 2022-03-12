import {combineReducers} from 'redux';

import counter1 from "./reducers/counter1";
import counterRedux from "./reducers/counter-redux";

// Объединяем редьюсеры
export default combineReducers({
    counter1,
    counterRedux
});