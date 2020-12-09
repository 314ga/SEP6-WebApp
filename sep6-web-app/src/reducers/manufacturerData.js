import { setPlanesPerManufact, setFlightsPerManufact, setairbusPerManufact } from '../actions';
import { api } from '../utils/RestAPI'



//retrieve data with REST API and set it to the store - described more in weatherData
/**
 * 
 * @param {*} type is ending of the base URL from axios, eg. base: 'https://sep6-ua-weather.azurewebsites.net/' type: 'forecast'
 * @param {*} filter if filter is set - if not startDate & endDate == null
 * @param {*} startDate filter start date
 * @param {*} endDate filter end date
 */
export function retrieveManufacturerData(type) {
    return async function fetchManufacturerData(dispatch, getState) {
        const data = await api.get("manufacturer?requestBody=" + type)
            .then(({ data }) => data)
            .catch((err) => {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                    console.log(err.config);
                }
                else if (err.request) {
                    console.log(err.request);
                    console.log(err.config);
                }
                else {
                    console.log('Error', err.message);
                    console.log(err.config);
                }
            });

        if (data != undefined) {

            switch (type) {
                case "flights-per-manufacturer":
                    dispatch(setFlightsPerManufact(data));
                    break;
                case "planes-per-manufacturer":
                    dispatch(setPlanesPerManufact(data));
                    break;

                case "airbus-per-manufaturer":
                    console.log(data);
                    dispatch(setairbusPerManufact(data));
                    break;
                default: console.log("case NOT FOUND");



            }
        }

    }
}
