import "./App.css";
import HomePage from "./jobs/pages/HomePage";
// import MovieDetails from "./pages/MovieDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/movies" component={HomePage} />
          {/* <Route path="/movie-details/:id" component={MovieDetails} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
