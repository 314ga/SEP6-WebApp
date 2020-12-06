import React from "react";
import AppNavbar from '../components/AppNavbar'
import MUIDataTable from "mui-datatables";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import store from '../store';
import {useSelector} from 'react-redux'
import { retrieveWeatherData } from '../reducers/weatherData';
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
  const renderSwitch = param => 
  {
    switch(param) {
      case 'wo-origins':
        return <MUIDataTable
        title={"Weather observation for origins"}
        data={weatherData}
        columns={weatherObsCol}
        options={options}
        />

      case 'temp-attributes':
        return 'temp-attributes';
      case 'temp-jfk':
        return 'temp-jfk';
      case 'avgtemp-jfk':
        return 'avgtemp-jfk';
      case 'avgtemp-origin':
        return 'avgtemp-origin';
      default:
        return <MUIDataTable
        title={"Weather observation for origins"}
        data={weatherData}
        columns={weatherObsCol}
        options={options}
        />;
    }
  };
    const weatherObsCol = [
        {
         name: "origin",
         label: "Origin",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "weather_obs_origin",
         label: "Observations for origin",
         options: {
          filter: true,
          sort: false,
         }
        },
       ];
       const options = {
         filterType: 'checkbox',
       };
       //weatherData.map(weatherData => <div>{weatherData.key}</div>)
       const weatherData = useSelector(state =>  state.weatherData);
       /* TOOGLE**/
       const [selectedBtn, setSelectedBtn] = React.useState('wo-origins');

        const handleDataChange = (event, dataChange) => 
        {
            store.dispatch(retrieveWeatherData(dataChange));
            setSelectedBtn(dataChange);
        };

        const classes = useStyles();

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
            Origin temperatures
          </ToggleButton>
          <ToggleButton value="temp-jfk" aria-label="right aligned">
            JFK temperature
          </ToggleButton>
          <ToggleButton value="avgtemp-jfk" aria-label="justified">
            Mean temperature JFK
          </ToggleButton>
          <ToggleButton value="avgtemp-origin" aria-label="justified">
            Mean temperature origins
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>

      {renderSwitch(selectedBtn)}
        </div>
    );
};

export default Weather;