/** this index.js describes the actions for reducers*/
export const setFlightData = (data) =>
{
    return {
        type: 'SETFLIGHTDATA',
        payload: data
    };
};
export const resetFlightData = () =>
{
    return {
        type: 'RESETFLIGHTDATA'
    };
};
export const setWeatherData = (data) =>
{
    return {
        type: 'SETWEATHERDATA',
        payload: data
    };
};
export const resetWeatherData = () =>
{
    return {
        type: 'RESETWEATHERDATA'
    };
};
export const setManufacturerData = (data) =>
{
    return {
        type: 'SETMANUFACTURERDATA',
        payload: data
    };
};
export const resetManufacturerData = () =>
{
    return {
        type: 'RESETMANUFACTURERDATA'
    };
};