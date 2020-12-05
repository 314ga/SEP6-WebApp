import React, { useState } from "react";


//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import AppNavbar from './AppNavbar'
import { Bar, Line, Pie } from 'react-chartjs-2'
import store from '../store';
import { retrieveFlightData } from '../reducers/flightData';
import { useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';



const Home = () => {
    const [chartData, setCharData] = useState({});
    const [retrievedData, setRetrievedData] = useState([]);
    //data reducers
    const flightData = useSelector(state => state.flightData);
    const onBtnChangeHandler = () => {
        store.dispatch(retrieveFlightData("flights-per-month"));
    }


    return (

        <div>
            <AppNavbar />
            <Button onClick={() => onBtnChangeHandler()}>Weather per month</Button>
            {flightData.map(flightData => <div>{flightData.month_flights_origins}</div>)}
        </div>

    );
};

export default Home;