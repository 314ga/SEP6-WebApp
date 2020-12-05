import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import { Provider } from 'react-redux'
import { retrieveFlightData } from './reducers/flightData'
import { retrieveWeatherData } from './reducers/weatherData'
import { retrieveManufacturerData } from './reducers/manufacturerData'

/**
 * Getting default data from the server 
 */
/*TODO: Initial load
store.dispatch(retrieveFlightData("flights-per-month"));
store.dispatch(retrieveWeatherData("weather/init"));
store.dispatch(retrieveManufacturerData("flight/init-man"));*/
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
