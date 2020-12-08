
import './App.css';
import FlightsPage from './components/FlightsPage';
import ManufacturerPage from './components/ManufacturerPage';
import WeatherPage from './components/WeatherPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/WeatherPage" component={WeatherPage} />
        <Route exact path="/" component={FlightsPage} />
        <Route exact path="/ManufacturerPage" component={ManufacturerPage} />

      </Switch>
    </Router>
  );
}

export default App;
