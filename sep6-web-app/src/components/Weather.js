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
import { Bar, Bubble, Line, Pie } from 'react-chartjs-2'
import watch from 'redux-watch'
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
  const [bubbleDataJFK, setbubbleData] = React.useState([]);
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
        return  <Bubble
        data = {popData}
        label= {'Mean Daily temperature for origin'}
        width={600}
        height={400}
        options={{
          responsive: true,
            scales: {
              xAxes: [{
                  type: 'time',
                  time: {
                      unit: 'month',
                      format: timeFormat,
                      tooltipFormat: timeFormat,
                      displayFormats: {
                        quarter: 'MMM YYYY'
                    }
                  },
              }]
          },
        }}
    />;
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
      console.log("btn");
      store.dispatch(retrieveWeatherData(dataChange));
      setSelectedBtn(dataChange);
  };
  var timeFormat = 'YYYY-MM-DDTHH:mm:ssZ';
  const classes = useStyles();

  /** GRAPHS */
  var popData = {
    datasets: [{
      label: ['JFK temperatures'],
      data: weatherData.JFK,
      backgroundColor: "#52FF9966",
      borderColor: "#FF9966"
    },
    {
      label: ['EWR temperatures'],
      data: weatherData.EWR,
      backgroundColor: "#520083c9",
      borderColor: "#0083c9"
    },
    {
      label: ['LBA temperatures'],
      data: weatherData.LGA,
      backgroundColor: "#5200c928",
      borderColor: "#00c928"
    },]
  };
  /*let w = watch(store.getState, 'weatherData')
  store.subscribe(w((newVal, oldVal, objectPath) => {
    console.log("data new arrived");
  destData(newVal);
  // admin.name changed from JP to JOE
  }))

  const destData = (newVal) => {

  //var tempObj = JSON.parse(newVal);
  console.log(newVal.JFK);
  /**NEEDS TO BE JSON 
  setbubbleData(newVal.JFK);
}*/

  
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