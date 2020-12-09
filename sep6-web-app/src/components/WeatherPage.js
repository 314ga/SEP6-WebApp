import React from "react";
import AppNavbar from '../components/AppNavbar';
import BubbleChartAvgTemp from './charts/BubbleChartAvgTemp';
import BubbleChartTemps from './charts/BubbleChartTemps';
import BubbleChartDewTemps from './charts/BubbleChartDewTemps';
import { makeStyles } from '@material-ui/core/styles';
import TableObservationsPerOrigin from "./tables/TableObservationsPerOrigin";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { retrieveData } from '../utils/StoreHandler';
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
}
// retrieveData('weather', 'wo-origins');
// retrieveData('weather', 'temp-attributes');
// retrieveData('weather', 'dewp-attributes');
// retrieveData('weather', 'avgtemp-origin');
const Weather = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    paper: {
      display: 'flex',
      textAlign: 'center',
      border: `1px solid ${theme.palette.divider}`,
      flexWrap: 'wrap',
    },
    divider: {
      margin: theme.spacing(1, 0.5),
    },
  }));
  const classes = useStyles();
  const [tabValue, setTabValue] = React.useState(0);
  const handleTabChange = (event, newValue) => {

    setTabValue(newValue);
  };
  return (

    <div>
      <div>
        <AppNavbar />
      </div>
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
            <Tab label="Weather Observations for origin" />
            <Tab label="Temperatures" />
            <Tab label="Dewpoint Temperatures" />
            <Tab label="Mean temperatures" />
          </Tabs>
        </AppBar>
        <TabPanel value={tabValue} index={0}>
          <Box p={3}>
            <TableObservationsPerOrigin />
          </Box>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Box p={3}>
            <BubbleChartTemps />
          </Box>
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <Box p={3}>
            <BubbleChartDewTemps />
          </Box>
        </TabPanel>
        <TabPanel value={tabValue} index={3}>
          <Box p={3}>
            <BubbleChartAvgTemp />
          </Box>
        </TabPanel>
      </div>


    </div>
  );
};

export default Weather;