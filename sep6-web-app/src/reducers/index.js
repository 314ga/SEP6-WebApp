import weatherDataReducer from './flightData';
import flightDataReducer from './flightData';
import manufacturerDataReducer from './manufacturerData';
import {combineReducers} from 'redux';

/**
 * this class is merging all reducers into one reducer
 */
const allReducers = combineReducers({
    weatherData: weatherDataReducer,
    flightData: flightDataReducer,
    manufacturerData: manufacturerDataReducer
});

export default allReducers;