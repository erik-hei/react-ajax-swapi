
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Starships from './components/Starships';
import ShipDetail from './components/ShipDetail';

function App() {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/starships/')
    .then(response => {
      console.log(response)
      setShips(response.data.results)
    })
  }, [])
  
  return (
    <div className="App">
      <Router>
        <header>
          <h1>STAR WAR</h1>
        </header>
        <Switch>
          <Route exact path="/" render={() => <Starships ships={ships} />} />
          <Route path="/:id" render={({location}) => <ShipDetail location={location} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
