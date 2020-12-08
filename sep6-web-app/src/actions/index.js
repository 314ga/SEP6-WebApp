/** this index.js describes the actions for reducers*/

export const setTempData = (data) => {
    return {
        type: 'SETTEMPDATA',
        payload: data
    };
};
export const setDewpTempData = (data) => {
    return {
        type: 'SETDEWPTEMPDATA',
        payload: data
    };
};
export const setObservationData = (data) => {
    return {
        type: 'SETOBSERVATIONDATA',
        payload: data
    };
};
export const setAvgTempData = (data) => {
    return {
        type: 'SETAVGTEMPDATA',
        payload: data
    };
};

//FLIGHT DATA ACTIONS
export const setDestinationData = (data) => {
    return {
        type: 'SETDESTINATIONS',
        payload: data
    };
};
export const setDestinationTableData = (data) => {
    return {
        type: 'SETDESTINATIONSTABLE',
        payload: data
    };
};
export const setFlightsPerMonthData = (data) => {
    return {
        type: 'SETFLIGHTSPERMONTH',
        payload: data
    };
};
export const setFlightsPMStackedData = (data) => {
    return {
        type: 'SETFLIGHTPERMONTHSTACKED',
        payload: data
    };
};

export const setAvgAirtime = (data) => {
    return {
        type: 'SETAVGAIRTIME',
        payload: data
    };
};
export const setArrivalDelay = (data) => {
    return {
        type: 'SETARRIVALDELAY',
        payload: data
    };
};

//MANUFACTURER DATA ACTIONS
export const setPlanesPerManufact = (data) => {
    return {
        type: 'SETPLANESPERMANUFACTURER',
        payload: data
    };
};
export const setFlightsPerManufact = (data) => {
    return {
        type: 'SETFLIGHTPERMANUFACTURER',
        payload: data
    };
};
export const setairbusPerManufact = (data) => {
    return {
        type: 'SETFAIRBUSPERMANUFACTURER',
        payload: data
    };
};