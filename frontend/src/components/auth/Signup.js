import React, { Component } from 'react'
import { Form, Container } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import AuthService from '../../services/auth'
const authService = new AuthService()

class FormExampleSubcomponentControl extends Component {
  state = {
  }
  componentDidMount(props) {
    const loggedUser = localStorage.getItem('loggedUser')
    if (loggedUser) return this.props.history.push('/')
  }
  handleInput = e => {
    e.persist()
    this.setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  handleSubmit = e => {
    e.preventDefault()
        authService
          .signup(this.state)
          .then(response => {
            //aquí deberia ir una notificacion o un swal o un toastr
            this.props.history.push('/login')
          })
          .catch(err => {
            //aquí deberia ir una notificacion o un swal o un toastr
            console.log(err.response)
            alert(err.response.data.msg || err.response.data.err.message)
          })
      
    
  }

  render() {
    
    return (
      <Container>
        
          <br />
          <br />
          
          <h2>Registro de Usuarios</h2>

          <Form  onSubmit={this.handleSubmit} size="small">
            <Form.Group widths="equal">
              <Form.Input name="name" fluid label="Nombre(s)" placeholder="" onChange={this.handleInput}/>
              <Form.Input name="apellido" fluid label="Apellidos" placeholder="" onChange={this.handleInput} />
            </Form.Group>
            <Form.Input type="date" name="fechaNac" fluid label="Fecha de Nacimiento" placeholder="" onChange={this.handleInput}/>
            <Form.Input type="number"  name="telephone" fluid label="Número de Teléfono" placeholder="" onChange={this.handleInput}/>
            <Form.Input type="password" name="password" fluid label="Escribe tu contraseña" placeholder="" onChange={this.handleInput}/>

            <b><label>He leído y comprendido</label></b>
            <Form.Checkbox label="Aviso de Privacidad" required />
            <Form.Checkbox label="Términos y Condiciones" required />
            <Form.Checkbox label="Contratos" required />
            <Form.Button fluid color="green" size="large">Registrar</Form.Button>
            <br/>
            <p>¿Ya tienes cuenta? <Link to="/login">Inicia Sesión</Link></p>
          </Form>
     
      </Container>
    )
  }
}

export default FormExampleSubcomponentControl
