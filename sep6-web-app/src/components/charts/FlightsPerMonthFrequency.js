import { Bar } from 'react-chartjs-2'
import React from "react";
import { useSelector } from 'react-redux';


const FlightsPerMonthFrequency = () => {
    const flightData = useSelector(state => state.flightsPerMonthData);
    const flightsPerMonth = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{

            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: flightData.flights,
        }],
    }
    return (
        <div>
            <h2>Number Of Flights Per Month</h2>
            <Bar
                data={flightsPerMonth}
                options={{
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

export default FlightsPerMonthFrequency;