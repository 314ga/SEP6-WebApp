
import React from "react";
import MUIDataTable from "mui-datatables";
import { useSelector } from 'react-redux'



const AvgAirtime = () => {
    const avgAirtimeObsCol = [
        {
            name: "origin",
            label: "Origin",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "airtime",
            label: "Airtime",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];
    const options = {
        filterType: 'checkbox',
    };
    const avgAirtimeData = useSelector(state => state.avgAirtimeData);


    return (
        <div>
            <h2>Top 10 Destinations Table</h2>
            <MUIDataTable
                title={"Average Airtime"}
                data={avgAirtimeData}
                columns={avgAirtimeObsCol}
                options={options}
            />
        </div>
    );
};

export default AvgAirtime;