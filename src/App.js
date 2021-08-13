import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Hire from "./components/pages/Hire";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/hireme">
            <Hire />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
