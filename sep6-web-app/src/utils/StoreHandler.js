//variable imports
import store from '../store'
import { retrieveFlightData } from '../reducers/flightData'
import { retrieveWeatherData } from '../reducers/weatherData'
import { retrieveManufacturerData } from '../reducers/manufacturerData'


//function to dipatch weather forecast & weather history, function called by eventListeners for exammple
export const retrieveData = (storeType, type) => {
    switch (storeType) {
        case 'weather':
            store.dispatch(retrieveWeatherData(type));
            break;
        case 'manufacturer':
            store.dispatch(retrieveManufacturerData(type));
            break;
        case 'flights':
            store.dispatch(retrieveFlightData(type));
            break;
        default:
            break;
    }
}