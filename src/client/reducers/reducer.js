import { combineReducers } from 'redux';
import planetsReducer from './planetsReducer';
import vehiclesReducer from './vehiclesReducer';
import resultsReducer from './resultsReducer';
import selectedValuesReducer from "./selectedValuesReducer";

const reducers = combineReducers({
    planetsReducer,
    resultsReducer,
    vehiclesReducer,
    selectedValuesReducer
});

export default reducers;
