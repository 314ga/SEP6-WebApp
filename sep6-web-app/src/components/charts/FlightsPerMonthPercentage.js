import { Bar, Line, Pie } from 'react-chartjs-2'
import { useSelector } from 'react-redux';



const FlightsPerMonthPercentage = () => {
    let percewr = [],perclga = [],perclfg = [];
    const flightData = useSelector(state => state.flightsStackedData);
    if(flightData.ewr != undefined)
    {
        for(let a = 0;flightData.ewr.length>a;a++)
        {
            let tot = flightData.ewr[a]+flightData.lga[a]+flightData.jfk[a];
            percewr.push(flightData.ewr[a]/tot*100);
            perclga.push(flightData.lga[a]/tot*100);
            perclfg.push(flightData.jfk[a]/tot*100);
        }
    }
 
    
    const flightsPerMonthStacked = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
        {
            label: 'EWR',
            backgroundColor: 'rgba(153, 102, 255, 1)',
            data: percewr
        },
        {
            label: 'JFK',
            backgroundColor: 'rgba(255, 99, 132, 1)',
            data: perclfg
        },
        {
            label: 'LGA',
            backgroundColor: 'rgba(54, 162, 235, 1)',
            data: perclga
        },


    ],

}
    return (
        <div>
            <h2>Flights Per Month Percentage</h2>
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

export default FlightsPerMonthPercentage;