
import './App.css';
import FlightsPage from './components/FlightsPage';
import Manufacturer from './components/Manufacturer';
import Weather from './components/Weather';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Manufacturer" component={Manufacturer} />
        <Route exact path="/" component={FlightsPage} />
        <Route exact path="/Weather" component={Weather} />

      </Switch>
    </Router>
  );
}

export default App;
