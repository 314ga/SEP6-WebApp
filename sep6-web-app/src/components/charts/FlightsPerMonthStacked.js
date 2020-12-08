import { Bar, Line, Pie } from 'react-chartjs-2'



const flightsPerMonthStacked = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
        {
            label: 'EWR',
            backgroundColor: 'rgba(153, 102, 255, 1)',
            data: [3, 4, 20, 34, 343, 23, 34, 45]
        },
        {
            label: 'JFK',
            backgroundColor: 'rgba(255, 99, 132, 1)',
            data: [34, 72, 4, 456, 67, 34, 32, 34]
        },
        {
            label: 'LGA',
            backgroundColor: 'rgba(54, 162, 235, 1)',
            data: [24, 7, 66, 323, 56, 23, 56, 76]
        },


    ],

}

const FlightsPerMonthStacked = () => {
    return (
        <div>
            <h2>Flights Per Month Stacked</h2>
            <Bar
                data={flightsPerMonthStacked}

                options={{
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            stacked: true
                        }],
                        yAxes: [{
                            stacked: true
                        }]
                    }
                }}

            />
        </div>
    );
};

export default FlightsPerMonthStacked;