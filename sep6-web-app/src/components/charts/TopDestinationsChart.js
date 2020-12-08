import { Bar } from 'react-chartjs-2'
import React from "react";
import { useSelector } from 'react-redux';




const TopDestinationChart = () => {
    const destinationData = useSelector(state => state.topDestData);
    const topDest = {
        labels: destinationData.dest,
        datasets: [
            {
                label: 'EWR',
                backgroundColor: 'rgba(153, 102, 255, 1)',
                data: destinationData.EWR
            },
            {
                label: 'JFK',
                backgroundColor: 'rgba(255, 99, 132, 1)',
                data: destinationData.JFK
            },
            {
                label: 'LGA',
                backgroundColor: 'rgba(54, 162, 235, 1)',
                data: destinationData.LGA
            },

        ],


    };

    return (
        <div>
            <h2>Top 10 Destinations</h2>
            <Bar
                data={topDest}
                options={{
                    aspectRatio: 1,
                    borderWidth: 1,
                    responsive: true,
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

export default TopDestinationChart;