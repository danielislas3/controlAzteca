import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Form, Container } from 'semantic-ui-react'
import AuthService from '../../services/auth'
const authService = new AuthService()


class Login extends Component {
  state = {}
  componentDidMount(props) {
    const loggedUser = localStorage.getItem('loggedUser')
    if (loggedUser) return this.props.history.push('/dashboard')
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
        authService
          .login(this.state)
          .then(response => {
            //aquí deberia ir una notificacion o un swal o un toaster
            localStorage.setItem('loggedUser', JSON.stringify(response.data.user)) 
              this.props.history.push(`/dashboard`)
            
          })
          .catch(err => {
            alert('Usuario o Contraseña Incorrecta')
          })
      
  }

  render() {
    
    return (
      <Container>
        
        <br/>
        <br/>
        <h2>Inicia Sesión</h2>
        <br/>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input fluid name="telephone" label="Número de Teléfono" placeholder="Ingresa el número que registraste" onChange={this.handleInput} />
          <br/>
          <Form.Input type="password" name="password" fluid label="Escribe tu contraseña" placeholder="Ingresa tu contraseña" onChange={this.handleInput}/>
          <br/>
          <Form.Button color="green" fluid size="large">Ingresar</Form.Button>
        </Form>
        <br/>
        <p>¿Aún no tienes cuenta?<Link to="/signup">Registrate</Link></p>
      </Container>
    )
  }
}

export default Login
