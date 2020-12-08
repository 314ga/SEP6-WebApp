/** this index.js describes the actions for reducers*/
export const setFlightData = (data) =>
{
    return {
        type: 'SETFLIGHTDATA',
        payload: data
    };
};
export const setTempData = (data) =>
{
    return {
        type: 'SETTEMPDATA',
        payload: data
    };
};
export const setDewpTempData = (data) =>
{
    return {
        type: 'SETDEWPTEMPDATA',
        payload: data
    };
};
export const setObservationData = (data) =>
{
    return {
        type: 'SETOBSERVATIONDATA',
        payload: data
    };
};
export const setAvgTempData = (data) =>
{
    return {
        type: 'SETAVGTEMPDATA',
        payload: data
    };
};
export const setManufacturerData = (data) =>
{
    return {
        type: 'SETMANUFACTURERDATA',
        payload: data
    };
};
