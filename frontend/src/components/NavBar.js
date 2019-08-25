import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Container,Dropdown,Image,Menu} from 'semantic-ui-react'
import AuthService from '../services/auth';


const Navbar = (props) => {
const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))

const authService = new AuthService()

  
  const handleLogout = () => {
    authService
      .logout()
      .then(() => {
        localStorage.removeItem('loggedUser')
        props.history.push('/login')
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <Menu fixed='top' inverted={false}>
        <Container>
          <Link to="/dashboard">
            <Menu.Item  >
              <Image size='small' src='img/bancoazteca@2x.png' style={{ marginRight: '1.5em' }} />
            </Menu.Item>
          </Link>        
          <Dropdown item simple text='Menú'>
          <Dropdown.Menu>
            
            <Dropdown.Item><Link to={`/${loggedUser._id}/ingresos`}>Ingresos</Link></Dropdown.Item>
            <Dropdown.Item><Link to={`/${loggedUser._id}/gastos`}>Gastos</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/credito">Crédito</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/balance">Balance</Link></Dropdown.Item>
            
          
          </Dropdown.Menu>
        </Dropdown>
         <Menu.Menu position='right'>
          <Dropdown.Item><a href="/" onClick={handleLogout}>Cerrar Sesión</a></Dropdown.Item>

            <a href="https://www.aprendeycrece.mx/Articulos/TusFinanzas/19">
              <Menu.Item  >           
                <Image size='medium' src='img/arbolicon.png' style={{ marginRight: '1.5em' }} />
              </Menu.Item>
            </a>
          </Menu.Menu>
        </Container>
      </Menu>


    </>
  )
}

export default withRouter(Navbar)
