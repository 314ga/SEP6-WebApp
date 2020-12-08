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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
    table: {
        minWidth: 650,
    },
}));
//Top 10 Destination table data
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

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

    const flightsPerMonth = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }],

    }
    const flightsPerMonthStacked = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'EWR',
                backgroundColor: 'rgba(153, 102, 255, 1)',
                data: [3, 4, 20, 34, 343, 23, 34, 45],

            },
            {
                label: 'JFK',
                backgroundColor: 'rgba(255, 99, 132, 1)',
                data: [34, 72, 4, 456, 67, 34, 32, 34],

            },
            {
                label: 'LGA',
                backgroundColor: 'rgba(54, 162, 235, 1)',
                data: [24, 7, 66, 323, 56, 23, 56, 76]
            },

        ]
    }


    // Label formatter function
    const formatter = (value, ctx) => {
        const otherDatasetIndex = ctx.datasetIndex === 0 ? 1 : 0;
        const total =
            ctx.chart.flightsPerMonthPercentage.datasets[otherDatasetIndex].flightsPerMonthPercentage[ctx.dataIndex] + value;

        return `${(value / total * 100).toFixed(0)}%`;
    };

    const flightsPerMonthPercentage = [{
        // stack: 'test',
        label: "New",
        backgroundColor: "#1d3f74",
        data: [6310, 5742, 4044, 5564],
        // Change options only for labels of THIS DATASET
        datalabels: {
            color: "white",
            formatter: formatter
        }
    },
    {
        // stack: 'test',
        label: "Repeat",
        backgroundColor: "#6c92c8",
        data: [11542, 12400, 12510, 11450],
        // Change options only for labels of THIS DATASET
        datalabels: {
            color: "yellow",
            formatter: formatter
        }
    }
    ];

    const options = {
        maintainAspectRatio: false,
        spanGaps: false,
        responsive: true,
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#fff",
                boxWidth: 14,
                fontFamily: "proximanova"
            }
        },
        tooltips: {
            mode: "label",
            callbacks: {
                label: function (tooltipItem, data) {
                    const type = flightsPerMonthPercentage.datasets[tooltipItem.datasetIndex].label;
                    const value =
                        flightsPerMonthPercentage.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    let total = 0;
                    for (let i = 0; i < flightsPerMonthPercentage.datasets.length; i++)
                        total += flightsPerMonthPercentage.datasets[i].flightsPerMonthPercentage[tooltipItem.index];
                    if (tooltipItem.datasetIndex !== flightsPerMonthPercentage.datasets.length - 1) {
                        return (
                            type + " : " + value.toFixed(0).replace(/(\d)(?=(\d{3})+\.)/g, "1,")
                        );
                    } else {
                        return [
                            type +
                            " : " +
                            value.toFixed(0).replace(/(\d)(?=(\d{3})+\.)/g, "1,"),
                            "Overall : " + total
                        ];
                    }
                }
            }
        },
        plugins: {
            // Change options for ALL labels of THIS CHART
            datalabels: {
                color: "#white",
                align: "center"
            }
        },
        scales: {

            xAxes: [{
                stacked: true,
                gridLines: {
                    display: false
                },
                ticks: {
                    fontColor: "#fff"
                }
            },
            {
                type: 'category',
                offset: true,
                position: 'top',
                ticks: {
                    fontColor: "#fff",
                    callback: function (value, index, values) {
                        return flightsPerMonthPercentage[0].flightsPerMonthPercentage[index] + flightsPerMonthPercentage[1].flightsPerMonthPercentage[index]
                    }
                }
            }
            ],
            yAxes: [{
                stacked: true,
                display: false,
                ticks: {
                    fontColor: "#fff"
                }
            }]
        }
    };
    const flightsPerMonthSplit = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'May', 'June', 'July'],
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

    }

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
                {/* TOP 10 DESTINATIONS */}
                <TabPanel value={tabValue} index={0}>
                    <div>
                        <h2>Top 10 Destinations</h2>
                        <Bar
                            data={topDest}
                            options={{
                                aspectRatio: 1,
                                borderWidth: 1,
                                responsive: true,
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
                    <div>
                        <h2>Top 10 Destinations Table</h2>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Dessert (100g serving)</TableCell>
                                        <TableCell align="right">Calories</TableCell>
                                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </TabPanel>
                {/* FLIGHTS PER MONTH */}
                <TabPanel value={tabValue} index={1}>
                    <div>
                        <h2>Flights Per Month</h2>
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
                    <div>
                        <h2>Flights Per Month Split</h2>
                        <Bar
                            data={flightsPerMonthStacked}

                            options={{
                                maintainAspectRatio: false,
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
                    <div>
                        <h2>Flights Per Month Stacked Percentage</h2>
                        <Bar id="myChart"
                            data={flightsPerMonthPercentage}

                            options={{ options }}


                        />
                    </div>
                    <div>
                        <h2>
                            Flights Per Month Stacked</h2>
                        <Bar
                            data={flightsPerMonthSplit}
                            options={{
                                aspectRatio: 1,
                                responsive: true,
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