
import './App.css';
import FlightsPage from './components/FlightsPage';
import Home from './components/Home';
import Weather from './components/Weather';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/FlightsPage" component={FlightsPage} />
        <Route exact path="/Weather" component={Weather} />

      </Switch>
    </Router>
  );
}

export default App;
