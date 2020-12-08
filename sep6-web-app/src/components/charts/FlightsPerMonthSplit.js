import { Bar } from 'react-chartjs-2';
import React from "react";
import { useSelector } from 'react-redux';

const FlightsPerMonthSplit = () => {
    const flightData = useSelector(state => state.flightsStackedData);
    const flightsPerMonthSplit = {


        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'EWR',
                backgroundColor: 'rgba(153, 102, 255, 1)',
                data: flightData.ewr
            },
            {
                label: 'JFK',
                backgroundColor: 'rgba(255, 99, 132, 1)',
                data: flightData.jfk
            },
            {
                label: 'LGA',
                backgroundColor: 'rgba(54, 162, 235, 1)',
                data: flightData.lga
            },


        ],

    }
    return (
        <div>
            <h2>Flights Per Flights Per Month  For EWR, JFK, LGA</h2>
            <Bar
                data={flightsPerMonthSplit}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }}

            />
        </div>
    );
};

export default FlightsPerMonthSplit;