import React from 'react'
import { Link } from 'react-router-dom'
import {ProgressBar} from 'react-bootstrap'

export default function Signup() {
  return (
    <div>
      <h1>Signup</h1>

      <ProgressBar variant="success" now={40} />
      <Link to="/dashboard">PICALE AQUI CULERO</Link>


    </div>
  )
}
