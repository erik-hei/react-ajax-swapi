import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Starships(props) {


  let shipList = !props.ships.length ? "" : (
    props.ships.map((ship, i) => {
      return (
        <Link 
          to={{
            pathname: '/' + i,
            state: ship
          }} 
          key={i + "ship"}
        >
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