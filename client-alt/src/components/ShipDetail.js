import { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

export default function ShipDetail(props) {

  console.log(props.location.state)
  let detail = !props.location.state? "" : (
    <div>
      <h2>Name: {props.location.state.name}</h2>
      <p>Model: {props.location.state.model}</p>
      <Link to="/">Home</Link>
    </div>
  )

  return (
    <>
    {detail}
    </>
  )
}