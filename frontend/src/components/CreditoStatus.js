import React from 'react'
import Navbar from './NavBar';
import {Container,Header,List, Image, Button } from 'semantic-ui-react'

export default function CreditoStatus() {
  const documentos= false
  return (
    // 
    <div>
    <Navbar></Navbar>
      <Container text style={{ marginTop: '8em' }}>
      
        <Header textAlign="center" style={{fontFamily:'Lato'}} as="h2" >Estado del Crédito</Header>
        <br/>
        <div>
         <List verticalAlign='middle' >

          <List.Item>
             {true?  <Image src='img/monedasderbol/moneda5-vacia.png' size="tiny"/>: <Image src='img/monedasderbol/moneda5-color.png' size="tiny"/>}
            <List.Content>
              <List.Header>Acude a una sucursal </List.Header>
              <List.Header>por tu dinero</List.Header>
            </List.Content>
          </List.Item>

          <List.Item>
             {true?  <Image src='img/monedasderbol/moneda4-vacia.png' size="tiny"/>: <Image src='img/monedasderbol/moneda4-color.png' size="tiny"/>}
            <List.Content>
              <List.Header>Tu crédito está pre-aprobado </List.Header>
            </List.Content>
          </List.Item>

          <List.Item>
             {true?  <Image src='img/monedasderbol/moneda3-vacia.png' size="tiny"/>: <Image src='img/monedasderbol/moneda3-color.png' size="tiny"/>}
            <List.Content>
              <List.Header><Button style={{backgroundColor:'#17a54d', color:'white'}} disabled={documentos}>Agrega tus documentos </Button> </List.Header>
            </List.Content>
          </List.Item>

          <List.Item>
             {false?  <Image src='img/monedasderbol/moneda2-vacia.png' size="tiny"/>: <Image src='img/monedasderbol/moneda2-color.png' size="tiny"/>}
            <List.Content>
              <List.Header>Mantén tus ingresos</List.Header>
              <List.Header>en positivo </List.Header>
              <List.Header>mínimo dos meses</List.Header>
            </List.Content>
          </List.Item>

          <List.Item>
             {false?  <Image src='img/monedasderbol/moneda1-vacia.png' size="tiny"/>: <Image src='img/monedasderbol/moneda1-color.png' size="tiny"/>}
            <List.Content>
              <List.Header>Registra tus ingresos y</List.Header>
              <List.Header>gastos mínimo 2 meses</List.Header>
            </List.Content>
          </List.Item>


        </List>
      </div>
      </Container>
    </div>
  )
}
