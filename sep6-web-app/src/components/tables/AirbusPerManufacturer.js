
import React from "react";
import MUIDataTable from "mui-datatables";
import { useSelector } from 'react-redux'



const AirbusPerManufacturer = () => {
    const airbusObsCol = [
        {
            name: "model",
            label: "Airbus",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "airbus_model",
            label: "Model",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];
    const options = {
        filterType: 'checkbox',
    };
    const airbusData = useSelector(state => state.airbusManfactData);


    return (
        <div>

            <MUIDataTable
                title={"Airbus Per manufacturer"}
                data={airbusData}
                columns={airbusObsCol}
                options={options}
            />
        </div>
    );
};

export default AirbusPerManufacturer;