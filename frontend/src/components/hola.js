import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Container, Button } from 'react-bootstrap'

export default function hola() {
  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <center>
        <Image
          src="img/bancoazteca.png"
          
          fluid
        />
        <br />
        <br />
        <p>
          ¡BIENVENID@ a Guarda Azteca! Guarda Azteca es la aplicación de Banco Azteca que te ayudará a manejar tus
          gastos y ahorros, obtener créditos y levantar tu negocio.
        </p>
        <br />
        <br />
        <p>¿Tienes cuenta en Guarda Azteca?</p>
        <Link to="/login">
          <Button variant="outline-success">Sí, empezar</Button>
        </Link>
        &nbsp;&nbsp;
        <Link to="/signup">
          <Button variant="outline-success">No, registrarme</Button>
        </Link>
      </center>
    </Container>
  )
}
