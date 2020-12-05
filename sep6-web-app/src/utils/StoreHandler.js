//variable imports
import store from '../store'
import { retrieveFlightData } from '../reducers/flightData'
import { retrieveWeatherData } from '../reducers/weatherData'
import { retrieveManufacturerData } from '../reducers/manufacturerData'


//function to dipatch weather forecast & weather history, function called by eventListeners for exammple
export const retrieveAllData = (type) => {
    store.dispatch(retrieveFlightData("flight/" + type));
    store.dispatch(retrieveWeatherData("weather/" + type));
    store.dispatch(retrieveManufacturerData("flight/" + type));
}