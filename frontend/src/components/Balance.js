import React from 'react'
import Navbar from './NavBar';
import {Header, Button } from 'semantic-ui-react'
import Grafica from './Grafica';

export default function Balance() {

  return (
    <div>
      <Navbar></Navbar>

      <div text style={{ marginTop: '7em' }}>
      <Header textAlign="center" style={{fontFamily:'Lato'}} as="h2" >Balance mensual</Header>
      <br/>
      <center>
          <Button style={{backgroundColor:'rgba(23, 165, 77, 0.38)', color:'black', width:'145px',height: '79px'}}> GASTOS <p>$45</p></Button>    
          <Button  style={{backgroundColor:'rgba(184, 35, 36, 0.43)', color:'black', width:'145px',height: '79px'}}> INGRESOS <p>$45</p></Button>
       </center>
       <br/>

      <div><Grafica/></div>
      <br/><br/>
      <center>
        <h4>RESULTADO DE INGRESOS: {true?<span>POSITIVO</span>:<span> NEGATIVO</span>}</h4>
        <br/>
        <br/>
        <span>Actualmente tienes un crédito pre aprobado de:
           <b><p>$8,000.00</p></b> 
        </span>
        <br/>
        <Button style={{backgroundColor:'#17a54d', color:'white'}} >Solicítalo </Button>
      </center>

      </div>
    </div>
  )
}
