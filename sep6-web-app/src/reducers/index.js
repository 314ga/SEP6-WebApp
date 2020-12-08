import tempReducer from './tempReducer';
import tempAvgReducer from './tempAvgReducer';
import dewpTempReducer from './dewpTempReducer';
import observationsReducer from './observationsReducer';
//flight data reducers
import topDestReducer from './topDestReducer';
import flightsPerMonthReducer from './flightsPerMonthReducer';
import avgAirtimeReducer from './avgAirtimeReducer';
import arrivalDelayReducer from './arrivalDelayReducer';
//manufacturer data reducers
import airbusPerManufacturerReducer from './airbusPerManufacturerReducer';
import flightsPerManufacturerReducer from './flightsPerManufacturerReducer';
import planesPerManufacturerReducer from './planesPerManufacturerReducer';



import { combineReducers } from 'redux';

/**
 * this class is merging all reducers into one reducer
 */
const allReducers = combineReducers({
    tempData: tempReducer,
    dewpTempData: dewpTempReducer,
    observData: observationsReducer,
    tempAvgData: tempAvgReducer,
    topDestData: topDestReducer,
    flightsPerMonthData: flightsPerMonthReducer,
    avgAirtimeData: avgAirtimeReducer,
    arrivalDelayData: arrivalDelayReducer,
    airbusManfactData: airbusPerManufacturerReducer,
    flightsManufactData: flightsPerManufacturerReducer,
    planesManufactData: planesPerManufacturerReducer
});

export default allReducers;