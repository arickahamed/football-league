import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import NotMatched from './components/NotMatched/NotMatched';
import TeamDetails from "./components/TeamDetails/TeamDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/Details/:idTeam">
          <TeamDetails />
        </Route>
        <Route path="*">
          <NotMatched/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
