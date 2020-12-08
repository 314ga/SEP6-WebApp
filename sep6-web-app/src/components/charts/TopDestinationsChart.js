import { Bar } from 'react-chartjs-2'
import { retrieveFlightData } from '../../reducers/flightData';
import React from "react";
import { useSelector } from 'react-redux';



const topDest = {
    labels: ["lsdkf", "ksf", "sldkfj", "dfkslfk"],
    datasets: [
        {
            label: 'EWR',
            backgroundColor: 'rgba(153, 102, 255, 1)',
            data: [3, 4, 20, 34]
        },
        {
            label: 'JFK',
            backgroundColor: 'rgba(255, 99, 132, 1)',
            data: [34, 72, 4, 456]
        },
        {
            label: 'LGA',
            backgroundColor: 'rgba(54, 162, 235, 1)',
            data: [{ lsdkf: 94, ksf: 7, sldkfj: 66, dfkslfk: 323 }]
        },

    ],


};


const TopDestinationChart = () => {
    const [destinations, setDestinations] = React.useState([]);

    const destinationData = useSelector(state => state.topDestData);
    const onBtnClick = () => {
        console.log(destinationData);

    }
    return (
        <div>
            <button onClick={onBtnClick()}>Click me</button>

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