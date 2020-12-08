import React from "react";
import AppNavbar from '../components/AppNavbar';
import Paper from '@material-ui/core/Paper';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import BubbleChartAvgTemp from './charts/BubbleChartAvgTemp';
import BubbleChartTemps from './charts/BubbleChartTemps';
import BubbleChartDewTemps from './charts/BubbleChartDewTemps';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TableObservationsPerOrigin from "./tables/TableObservationsPerOrigin";
import {retrieveData} from '../utils/StoreHandler';
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
retrieveData('weather','temp-attributes');
retrieveData('weather','wo-origins');
retrieveData('weather','dewp-attributes');
retrieveData('weather','avgtemp-origin');
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
      case 'dewp-attributes':
        return <BubbleChartDewTemps/>
      case 'avgtemp-origin':
        return <BubbleChartAvgTemp/>
      default:
        return <TableObservationsPerOrigin/>
    }
  };
  
  /* TOOGLE**/
  const [selectedBtn, setSelectedBtn] = React.useState('wo-origins');

  const handleDataChange = (event, dataChange) => 
  {
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
          <ToggleButton value="dewp-attributes" aria-label="centered">
            Dewpoint temperatures
          </ToggleButton>
          <ToggleButton value="avgtemp-origin" aria-label="justified">
            Mean temperatures
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>

      {renderSwitch(selectedBtn)}
        </div>
    );
};

export default Weather;