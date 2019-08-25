import React from 'react'
import Navbar from './NavBar';
import {Link} from 'react-router-dom'
import {Container,Input, Image, Header } from 'semantic-ui-react'

export default function Documentos() {
  return (
    <div>
      <Navbar/>
      <Container text style={{ marginTop: '8em' }}>

        <Header as="h3">Para finalizar tu registro, necesitamos que 
        agregues una foto de los siguientes documentos: </Header>

        <div>
          <Header as="h4">Foto del folio en INE/ IFE</Header>
          <br/>
          <Image src="img/ife.png"/>
          <Input as="button" type="file"  size="mini" />
        </div>
        <br/>
        <div>
          <span>
            <Header as="h4">Foto de un comprobante
              de domicilio 
            (agua, luz, teléfono o predial)</Header>
            <Image src="img/luz.png"/>
            <Input as="button" type="file"  size="mini" />
            <br/>
          </span>
          <br/>
        </div>
        <Link to="/credito">
        <footer className="footer">
            <center>
              <h3>Estatus del credito</h3>
            </center>
          </footer>
        </Link>
      </Container>
    </div>
  )
}
