import React, { useState } from "react";
import { useSelector } from 'react-redux';
import store from '../store';
import { retrieveFlightData } from '../reducers/flightData';

//chart component imports
import TopDestinationChart from "./charts/TopDestinationsChart";
import FlightsPerMonthFrequency from "./charts/FlightsPerMonthFrequency";
import FlightsPerMonthStacked from './charts/FlightsPerMonthStacked'
import FlightsPerMonthPercentage from './charts/FlightsPerMonthPercentage'
import FlightsPerMonthSplit from './charts/FlightsPerMonthSplit'
//table component import
import TopDestinationsTable from "./tables/TopDestinationsTable";
import AvgAirtime from "./tables/AvgAirtime";
import Delays from "./tables/Delays";


import AppNavbar from '../components/AppNavbar'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import { retrieveData } from '../utils/StoreHandler';
// retrieveData('flights', 'top-dest');
// retrieveData('flights', 'top-dest-table');
// retrieveData('flights', "avg-airtime");
// retrieveData('flights', "flights-per-month");
// retrieveData('flights', "flights-per-month-stacked");
// retrieveData('flights', "delays");

//material UI tabs panel functions
//Handles what view to render when a tab is clicked on
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
        // switch (newValue) {
        //     case 0: store.dispatch(retrieveFlightData("top-dest"));
        //             store.dispatch(retrieveFlightData("top-dest-table"));
        //         break;
        //     case 1: store.dispatch(retrieveFlightData("flights-per-month"));
        //         break;
        //     case 2: store.dispatch(retrieveFlightData("avg-airtime"));
        //         break;
        //     case 3: store.dispatch(retrieveFlightData("arival-delay"));
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
                        <Tab label="Top 10 destinations" />
                        <Tab label="Flights Per Month" />
                        <Tab label="Average airtime" />
                        <Tab label="Delays" />
                    </Tabs>
                </AppBar>
                {/* TOP 10 DESTINATIONS */}
                <TabPanel value={tabValue} index={0}>
                    <Box p={3}>
                        <TopDestinationChart />
                    </Box>
                    <Box p={3}>
                        <TopDestinationsTable />
                    </Box>
                </TabPanel>
                {/* FLIGHTS PER MONTH */}
                <TabPanel value={tabValue} index={1}>
                    <Box p={3}>
                        <FlightsPerMonthFrequency />
                    </Box>
                    <Box p={3}>
                        <FlightsPerMonthStacked />
                    </Box>
                    <Box p={3}>
                        <FlightsPerMonthPercentage />
                    </Box>
                    <Box p={3}>
                        <FlightsPerMonthSplit />
                    </Box>


                </TabPanel>

                <TabPanel value={tabValue} index={2}>
                    <AvgAirtime />
                </TabPanel>
                <TabPanel value={tabValue} index={3}>
                    <Delays />
                </TabPanel>
            </div>
        </div>
    );
};

export default FlightsPage;