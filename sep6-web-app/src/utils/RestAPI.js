import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://sep6-ua-weather.azurewebsites.net/'
});