import { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

export default function ShipDetail() {
  const [ship, setShip] = useState(null)

  const {id} = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/${id}`)
    .then(response => {
      console.log(response)
      setShip(response.data)
      /*
      data:
MGLT: "60"
cargo_capacity: "36000000"
consumables: "2 years"
cost_in_credits: "150000000"
created: "2014-12-10T15:08:19.848000Z"
crew: "47,060"
edited: "2014-12-20T21:23:49.870000Z"
films: (3) ["http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/"]
hyperdrive_rating: "2.0"
length: "1,600"
manufacturer: "Kuat Drive Yards"
max_atmosphering_speed: "975"
model: "Imperial I-class Star Destroyer"
name: "Star Destroyer"
passengers: "n/a"
pilots: []
starship_class: "Star Destroyer"
url: "http://swapi.dev/api/starships/3/"
*/
    })
  }, [])


  return (
    <div>
      <h2>Name: {ship? ship.name : ""}</h2>
      <p>Model: {ship? ship.model : ""}</p>
      <Link to="/">Home</Link>
    </div>
  )
}