
import './App.css';
import FlightsPerMonth from './components/FlightsPerMonth';
import Home from './components/Home';
import Weather from './components/Weather';
import Page1 from './components/Page1';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/FlightsPerMonth" component={FlightsPerMonth} />
        <Route exact path="/Weather" component={Weather} />
        <Route exact path="/Page1" component={Page1} />

      </Switch>
    </Router>
  );
}

export default App;
