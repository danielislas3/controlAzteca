import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Form, Container, Table, Button } from 'semantic-ui-react'
import UserService from '../services/users'
import Swal from 'sweetalert2'
import Navbar from './NavBar';



const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))

const userService = new UserService()


class Ingreso extends Component {
  state = {
    tipo:"Ingreso",
    transaction: []
  }
  componentDidMount(){
    userService
    .ingresos(this.state)
    .then(({ data }) => {
        this.setState(prevState => {
          return {
            ...prevState,
            ...data
          }
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  handleInput = e => {
    e.persist()
    this.setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  handleSubmit = (e, props) => {
    e.preventDefault()
        userService
          .transaction(this.state)
          .then(response => {
            
            Swal.fire('Ingreso agregado', response.data.msg, 'success')
            this.props.history.push(`/${loggedUser._id}/ingresos`)


            userService
            .ingresos(this.state)
             .then(({ data }) => {
        this.setState(prevState => {
          return {
            ...prevState,
            ...data
          }
        })
      })
      .catch(err => {
        console.log(err)
      })
               
          })
          .catch(err => {       
              console.log(err)  
          })
      
  }

  render() {
    
    return (
      
      <Container>
        <br/>
        <br/>
        <center><h2>Ingresos</h2></center>
        <br/>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input  name="concepto" fluid label="Descripción" placeholder="Breve descripción" onChange={this.handleInput}/>
          <br/>
          <Form.Input inline fluid type="number"name="monto" label="Monto de la transacción" placeholder="Cantidad de la transacción" onChange={this.handleInput} />
          <br/>
          <Form.Input type="date" name="fechaTran" fluid label="Fecha de la transacción" placeholder="" onChange={this.handleInput}/>
          <br/>
          <input name="tipo" hidden  />
          <br/>
          <center><Form.Button color="green" size="massive">Agregar</Form.Button></center>
          
        </Form>
        <br/>
        <center><Button onClick={() => this.props.history.goBack()}>Volver</Button></center>
        <br/>
        <br/>
       
      <h3>Registros anteriores</h3>
    <Table celled fixed singleLine>


    <Table.Body>
      {this.state.transaction.length === 0 ?  <b><p>Aún no tienes ingresos registrados</p></b> :
        this.state.transaction.map(e=>{
        return(
      <Table.Row key={e._id}>
        <Table.Cell><b>Descripción:</b> {e.concepto}</Table.Cell>
        <Table.Cell><b>Monto:</b> {e.monto}</Table.Cell>
        <Table.Cell><b>Fecha:</b> {e.fechaTran}</Table.Cell>
      </Table.Row>
        )  
      })}
    </Table.Body>
  </Table>
      </Container>
    )
  }
}

export default withRouter(Ingreso)