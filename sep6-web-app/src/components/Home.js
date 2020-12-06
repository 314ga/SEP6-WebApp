import React, { useState } from "react";


//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import AppNavbar from './AppNavbar'
import { Bar, Line, Pie } from 'react-chartjs-2'
import store from '../store';
import { retrieveFlightData } from '../reducers/flightData';
import { useSelector } from 'react-redux';
import watch from 'redux-watch'



const Home = () => {
    const [destinations, setDestinations] = useState([1000, 800, 1500, 59, 80, 81, 56, 55, 40, 700], [1000, 800, 1500, 59, 80, 81, 56, 55, 40, 700]);
    const [retrievedData, setRetrievedData] = useState([]);
    let dest = [];
    let d_freq = [];

    //data reducers
    const flightData = useSelector(state => state.flightData);
    const onBtnChangeHandler = () => {
        store.dispatch(retrieveFlightData("top-dest"));

    }
    let w = watch(store.getState, 'flightData')
    store.subscribe(w((newVal, oldVal, objectPath) => {
        destData();
        // admin.name changed from JP to JOE
    }))
    const destData = () => {
        let xaxis = [];
        let indexer = 0;
        flightData.map(flightData => {
            if (flightData.origin.localeCompare('JFK')) {
                xaxis[indexer] = flightData.result_table_dest;
                indexer++;

            }
        })


        console.log(xaxis);
        setRetrievedData(xaxis);
    }



    const data = {
        labels: retrievedData,
        datasets: [
            {
                label: 'Number Of Flight Per Destination',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 255, 1)',

                ],
                borderWidth: 1,
                options: [{ maintainAspectRatio: false }],
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: destinations,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
            }
        ],
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    };

    return (
        <div>
            <AppNavbar />
            <Button onClick={() => onBtnChangeHandler()}>Weather per month</Button>
            {flightData.map(flightData => <div>{flightData.dest}</div>)}
            <div>
                <h2>Bar Example (custom size)</h2>
                <Bar
                    data={data}
                    width={600}
                    height={400}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>

        </div>

    );
};

export default Home;