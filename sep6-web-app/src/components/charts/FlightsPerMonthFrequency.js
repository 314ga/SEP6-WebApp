import { Bar, Line, Pie } from 'react-chartjs-2'


const flightsPerMonth = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45]
    }],

}
const FlightsPerMonthFrequency = () => {
    return (
        <div>
            <h2>Flights Per Flights Per Month Frequency For JFK, EWR, SSS</h2>
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