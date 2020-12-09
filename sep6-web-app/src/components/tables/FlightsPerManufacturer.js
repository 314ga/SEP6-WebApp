
import React from "react";
import MUIDataTable from "mui-datatables";
import { useSelector } from 'react-redux'



const FlightsPerManufacturer = () => {
    const flightManufactObsCol = [
        {
            name: "manufacturer",
            label: "Manufacturer",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "flights",
            label: "Number Of Flights",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];
    const options = {
        filterType: 'checkbox',
    };
    const flightManufactData = useSelector(state => state.flightsManufactData);


    return (
        <div>
            <MUIDataTable
                title={"Flights Per Manufacturer"}
                data={flightManufactData}
                columns={flightManufactObsCol}
                options={options}
            />
        </div>
    );
};

export default FlightsPerManufacturer;