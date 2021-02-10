
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Starships from './components/Starships';
import ShipDetail from './components/ShipDetail';

function App() {
  
  
  return (
    <div className="App">
      <Router>
        <header>
          <h1>STAR WAR</h1>
        </header>
        <Switch>
          <Route exact path="/" component={Starships} />
          <Route path="/:id" component={ShipDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
