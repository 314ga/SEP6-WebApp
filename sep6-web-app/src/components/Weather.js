import React from "react";
import AppNavbar from '../components/AppNavbar'
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import store from '../store';
import { retrieveWeatherData } from '../reducers/weatherData';
import BubbleChartTemps from './charts/BubbleChartTemps'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TableObservationsPerOrigin from "./tables/TableObservationsPerOrigin";

  const StyledToggleButtonGroup = withStyles((theme) => ({
    grouped: {
      margin: theme.spacing(0.5),
      border: 'none',
    background: 'linear-gradient(240deg, #abe9cd 0%, #3eadcf 74%)',
    boxShadow: '0 3px 5px 2px #BDD4E7',
      '&:not(:first-child)': {
        borderRadius: theme.shape.borderRadius,
      },
      '&:first-child': {
        borderRadius: theme.shape.borderRadius,
      },
    },
  }))(ToggleButtonGroup);

const Weather = () => 
{
  const useStyles = makeStyles((theme) => ({
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
  const renderSwitch = param => 
  {
    switch(param) {
      case 'wo-origins':
        return <TableObservationsPerOrigin/>

      case 'temp-attributes':
        return <BubbleChartTemps/>
      case 'temp-jfk':
        return 'temp-jfk';
      case 'avgtemp-jfk':
        return 'avgtemp-jfk';
      case 'avgtemp-origin':
        return 'avgtemp-origin';
      default:
        return <TableObservationsPerOrigin/>
    }
  };
  
  /* TOOGLE**/
  const [selectedBtn, setSelectedBtn] = React.useState('wo-origins');

  const handleDataChange = (event, dataChange) => 
  {
      console.log("btn");
      store.dispatch(retrieveWeatherData(dataChange));
      setSelectedBtn(dataChange);
  };
  
    return (

        <div>
            <AppNavbar />


            <Paper elevation={0} className={classes.paper}>
        <StyledToggleButtonGroup
          size="small"
          exclusive
          onChange={handleDataChange}
          aria-label="text alignment"
        >
          <ToggleButton value="wo-origins" aria-label="left aligned" selected>
            Weather observation for origin
          </ToggleButton>
          <ToggleButton value="temp-attributes" aria-label="centered">
            Temperatures
          </ToggleButton>
          <ToggleButton value="avgtemp-jfk" aria-label="justified">
            Mean temperatures
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>

      {renderSwitch(selectedBtn)}
        </div>
    );
};

export default Weather;