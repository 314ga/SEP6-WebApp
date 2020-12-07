import React, { useState } from "react";


//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import AppNavbar from './AppNavbar'
import { Bar, Line, Pie } from 'react-chartjs-2'
import store from '../store';
import { retrieveFlightData } from '../reducers/flightData';
import { useSelector } from 'react-redux';
import watch from 'redux-watch'

//material imports
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


const Home = () => {
    const [isLoading, setLoading] = useState(true);
    //tab state
    const [tabValue, setTabValue] = useState(0);
    //data reducers
    const flightData = useSelector(state => state.flightData);
    const classes = useStyles();
    //handle what happens on each tab click
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







    const topDest = {
        labels: ["lsdkf", "ksf", "sldkfj", "dfkslfk"],
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
        borderWidth: 1,
        options: {
            maintainAspectRatio: true,
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }

    };
    function showLoading() {
        if (isLoading) {
            return <p>Loading Data...</p>
        }
        return <p>LOADED</p>
    }
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
                        <Tab label="Flights Per Manufacturer" />
                        <Tab label="Planes Per Manufacturer" />
                        <Tab label="Airbus Per Manufacturer" />
                        <Tab label="Arrival delay" />
                    </Tabs>
                </AppBar>
                <TabPanel value={tabValue} index={0}>
                    <div>
                        <h2>Top 10 Destinations</h2>
                        <Bar
                            data={topDest}
                            width={300}
                            height={200}
                            options={{
                                maintainAspectRatio: false
                            }}
                        />
                    </div>
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    Flights Per Month
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

            {showLoading()}

        </div>

    );
};

export default Home;