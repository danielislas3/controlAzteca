import React,{ useEffect } from 'react'
import {Link} from 'react-router-dom'
import {Container,Dropdown,Image,Menu} from 'semantic-ui-react'
// import AuthService from '../services/auth';

const Navbar = (props) => {
  // const authService = new AuthService()

  // useEffect(() => {
  //   const loggedUser = localStorage.getItem("loggedUser");
  //   if (!loggedUser) return props.history.push("/login");
  // }, [props.history]);  
  
  // const handleLogout = () => {
  //   authService
  //     .logout()
  //     .then(() => {
  //       localStorage.removeItem('loggedUser')
  //       //te desloguea y te redirige a:
  //       alert("Fin de sesion")
  //       props.history.push('/')
       
  //     })
  //     .catch(err => console.log(err))
  // }
  return (
    <>
    
      <Menu fixed='top' inverted={false}>
        <Container>
          <Link to="/dashboard">
            <Menu.Item  >
              <Image size='small' src='img/bancoazteca@2x.png' style={{ marginRight: '1.5em' }} />
            </Menu.Item>
          </Link>

     
        
          <Dropdown item simple text='opciones'>
          <Dropdown.Menu>
            
            <Dropdown.Item><Link to="/lugares">Lugares  </Link></Dropdown.Item>
         
            <Dropdown.Divider />
            <Dropdown.Item><Link to="/fotografos">Fotografos  </Link></Dropdown.Item>
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
         <Menu.Menu position='right'>
          <Menu.Item>
          <Link to="/profile" > Profile</Link>
          
          </Menu.Item> 
          <a href="https://www.aprendeycrece.mx/Articulos/TusFinanzas/19">
              <Menu.Item  >           
                <Image size='small' src='img/arbolicon.png' style={{ marginRight: '1.5em' }} />
              </Menu.Item>
            </a>
          </Menu.Menu>
        </Container>
      </Menu>


    </>
  )
}

export default Navbar
