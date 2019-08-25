import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import Navbar from './NavBar';
import {Header, Button } from 'semantic-ui-react'
import Grafica from './Grafica';
import UserService from '../services/users'

const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))

const userService = new UserService()

export default function Balance() {
  const [gastos, setGastos] = useState({})
  const [ingresos, setIngresos] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    userService
      .gastos(gastos)
      .then(({data}) => {
        setGastos(prevState => {
          return {
            ...prevState,
            ...data.transaction
          }
        })
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  },[])
  useEffect(() => {
    userService
      .ingresos(ingresos)
      .then(({ data }) => {
        setIngresos(prevState => {
          return {
            ...prevState,
            ...data.transaction
          }
        })
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  
  const sumGastos = (gastos) =>{
    let suma = 0
    for(let key in gastos ){
      suma += gastos[key].monto||0
    } 
    return suma
  }
  const sumIngresos = (ingresos) => {
    let suma2 = 0
    for (let key in ingresos) {
      suma2 += ingresos[key].monto||0
    }
    return suma2
  }
  console.log(ingresos ,'puto daniel')
  console.log(gastos)
  let gastitos = sumGastos(gastos)
  let ingresitos = sumIngresos(ingresos)

  const credit = (gastito, ingresito)=>{
   return ((ingresito - gastito ) / 4 * 52 )/ Math.pow(1.01153,52)
    
  }
  console.log(credit(gastitos, ingresitos))

  
  return (
    
    <div>
      <Navbar></Navbar>

      <div style={{ marginTop: '7em' }}>
      <Header textAlign="center" style={{fontFamily:'Lato'}} as="h2" >Balance mensual</Header>
      <br/>
      <center>
      
          <Button style={{ backgroundColor: 'rgba(184, 35, 36, 0.43)', color: 'black', width: '145px', height: '79px' }}> GASTOS <p>${!loading ?  sumGastos(gastos) : ''}</p></Button>  
          <Button style={{ backgroundColor: 'rgba(23, 165, 77, 0.38)', color: 'black', width: '145px', height: '79px' }}> INGRESOS <p>${!loading ? sumIngresos(ingresos) : ''}</p></Button>
       </center>
       <br/>

      <div><Grafica/></div>
      <br/><br/>
      <center>
        <h4>RESULTADO DE INGRESOS: {true?<span>POSITIVO</span>:<span> NEGATIVO</span>}</h4>
        <br/>
        <br/>
        <span>Actualmente tienes un crédito pre aprobado de:
           <b><p>${credit(gastitos, ingresitos).toFixed(2)}</p></b> 
        </span>
        <br/>
          <Link to={'/credito'}><Button style={{ backgroundColor: '#17a54d', color: 'white' }} >Solicítalo </Button></Link>
      </center>

      </div>
      <Link to="/credito">
        <footer className="footer">
            <center>
              <h3>Estatus del credito</h3>
            </center>
          </footer>
        </Link>
    </div>
  )
}
