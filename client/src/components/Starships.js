import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Starships() {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/starships/')
    .then(response => {
      console.log(response)
      setShips(response.data.results)
    })
  }, [])

  let shipList = !ships.length ? "" : (
    ships.map((ship, i) => {
      let shipId = ship.url.split('/')
      shipId = shipId[shipId.length - 2]
      return (
        <Link to={`/${shipId}`} key={i + "ship"}>
          <li key={i}>{ship.name}</li>
        </Link>
      )
    })
  )

  return (
    <ul>
      {shipList}
    </ul>
  )
}