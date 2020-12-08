import tempReducer from './tempReducer';
import tempAvgReducer from './tempAvgReducer';
import dewpTempReducer from './dewpTempReducer';
import observationsReducer from './observationsReducer';
import flightDataReducer from './flightData';
import manufacturerDataReducer from './manufacturerData';
import { combineReducers } from 'redux';

/**
 * this class is merging all reducers into one reducer
 */
const allReducers = combineReducers({
    tempData: tempReducer,
    dewpTempData: dewpTempReducer,
    observData: observationsReducer,
    tempAvgData: tempAvgReducer,
    flightData: flightDataReducer,
    manufacturerData: manufacturerDataReducer
});

export default allReducers;