import React, { useState } from "react";
import { useSelector } from 'react-redux';
import store from '../store';
import { retrieveFlightData } from '../reducers/flightData';

//chart component imports
import TopDestinationChart from "./charts/TopDestinationsChart";
import FlightsPerMonthFrequency from "./charts/FlightsPerMonthFrequency";
import FlightsPerMonthStacked from './charts/FlightsPerMonthStacked'
//table component import
import TopDestinationsTable from "./tables/TopDestinationsTable";

import AppNavbar from '../components/AppNavbar'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
const FlightsPage = () => {
    //tab state
    const [tabValue, setTabValue] = useState(0);
    const classes = useStyles();
    //when each tab is clicked on, dispatch the responsible store and opdate the tabvalue
    const handleTabChange = (event, newValue) => {
        console.log("tab value " + newValue);
        switch (newValue) {
            case 0: store.dispatch(retrieveFlightData("top-dest"));
                break;
            case 1: store.dispatch(retrieveFlightData("flights-per-month"));
                break;
            case 2: store.dispatch(retrieveFlightData("avg-airtime"));
                break;
            case 3: store.dispatch(retrieveFlightData("planes-per-manufacturer"));
                break;
            case 4: store.dispatch(retrieveFlightData("flights-per-manufacturer"));
                break;
            case 5: store.dispatch(retrieveFlightData("airbus-per-manufacturer"));
                break;
            case 6: store.dispatch(retrieveFlightData("arival-delay"));
                break;
            default:
                break;
        }
        setTabValue(newValue);
        // store.dispatch(retrieveFlightData(newValue));
    };
    return (

        <div>
            <AppNavbar />
            <p>Flights Page</p>

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
                        <Tab label="Top 10 destinations" />
                        <Tab label="Flights Per Month" />
                        <Tab label="Average airtime" />
                        <Tab label="Flights Per Manufacturer" />
                        <Tab label="Planes Per Manufacturer" />
                        <Tab label="Airbus Per Manufacturer" />
                        <Tab label="Arrival delay" />
                    </Tabs>
                </AppBar>
                {/* TOP 10 DESTINATIONS */}
                <TabPanel value={tabValue} index={0}>
                    <TopDestinationChart />
                    <TopDestinationsTable />
                </TabPanel>
                {/* FLIGHTS PER MONTH */}
                <TabPanel value={tabValue} index={1}>
                    <FlightsPerMonthFrequency />
                    <FlightsPerMonthStacked />
                    <div>
                        <h2>Flights Per Month Split</h2>

                    </div>
                    <div>
                        <h2>Flights Per Month Stacked Percentage</h2>

                    </div>
                    <div>
                        <h2>
                            Flights Per Month Stacked</h2>

                    </div>
                </TabPanel>
                <TabPanel value={tabValue} index={2}>
                    Average kdfjdks
            </TabPanel>
                <TabPanel value={tabValue} index={3}>
                    Planes Per man
            </TabPanel>
                <TabPanel value={tabValue} index={4}>
                    Airbus per manu
            </TabPanel>
                <TabPanel value={tabValue} index={5}>
                    Flights per manu
            </TabPanel>
                <TabPanel value={tabValue} index={6}>
                    Arival
            </TabPanel>
            </div>
        </div>
    );
};

export default FlightsPage;