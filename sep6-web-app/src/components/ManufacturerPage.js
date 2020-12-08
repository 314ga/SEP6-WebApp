import React, { useState } from "react";
import { useSelector } from 'react-redux';
import store from '../store';
import { retrieveFlightData } from '../reducers/flightData';

//table component import
import PlanesPerManufacturer from "./tables/PlanesPerManufacturer";
import FlightsManufacturer from "./tables/FlightsPerManufacturer";
import AirbusPerManufacturer from "./tables/AirbusPerManufacturer";

import AppNavbar from '../components/AppNavbar'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { retrieveData } from '../utils/StoreHandler';
retrieveData('manufacturer', 'planes-per-manufacturer');
retrieveData('manufacturer', 'airbus-per-manufaturer');
retrieveData('manufacturer', 'flights-per-manufacturer');
//material UI tabs panel functions
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },

}));
const ManufacturerPage = () => {
    //tab state
    const [tabValue, setTabValue] = useState(0);
    const classes = useStyles();
    //when each tab is clicked on, dispatch the responsible store and opdate the tabvalue
    const handleTabChange = (event, newValue) => {
        // switch (newValue) {
        //     case 0: store.dispatch(retrieveFlightData("planes-per-manufacturer"));
        //         break;
        //     case 1: store.dispatch(retrieveFlightData("flights-per-manufacturer"));
        //         break;
        //     case 2: store.dispatch(retrieveFlightData("airbus-per-manufacturer"));
        //         break;
        //     default:
        //         break;
        // }
        setTabValue(newValue);
        // store.dispatch(retrieveFlightData(newValue));
    };
    return (

        <div>
            <AppNavbar />
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"

                    >
                        <Tab label="Planes Per Manufacturer" />
                        <Tab label="Flights Per Manufacturer" />
                        <Tab label="Airbus Per Manufacturer" />

                    </Tabs>
                </AppBar>
                <TabPanel value={tabValue} index={0}>
                    <Box p={3}>
                        <PlanesPerManufacturer />
                    </Box>
                </TabPanel>

                <TabPanel value={tabValue} index={1}>
                    <Box p={3}>
                        <FlightsManufacturer />
                    </Box>
                </TabPanel>
                <TabPanel value={tabValue} index={2}>
                    <Box p={3}>
                        <AirbusPerManufacturer />
                    </Box>
                </TabPanel>

            </div>
        </div>
    );
};

export default ManufacturerPage;