
import React from "react";
import MUIDataTable from "mui-datatables";
import { useSelector } from 'react-redux'



const TopDestinationsTable = () => {
    const destinationObsCol = [
        {
            name: "dest",
            label: "Destinations",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "number_of_flights",
            label: "Number",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];
    const options = {
        filterType: 'checkbox',
    };
    const destinationDataT = useSelector(state => state.topDestTableData);


    return (
        <div>
            <h2>Top 10 Destinations Table</h2>
            <MUIDataTable
                title={"Top 10 Destinations and Number of Flights"}
                data={destinationDataT}
                columns={destinationObsCol}
                options={options}
            />
        </div>
    );
};

export default TopDestinationsTable;