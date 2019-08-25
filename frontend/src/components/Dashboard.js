import React, {Component} from 'react';
import Navbar from './NavBar';
import {Link} from 'react-router-dom'
import Calculadora from './Calculadora';
import { Button} from 'semantic-ui-react'
import Grafica from './Grafica';


let today = new Date();
const hora = today.getHours() 
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0!

const yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
} 
if (mm < 10) {
  mm = '0' + mm;
} 
today = dd + '/' + mm + '/' + yyyy;
console.log(today,hora)

export default class Dashboard extends Component {
  render() {
    return (
      <div>
      <Navbar></Navbar>
      <br/>
        <div>
            {(hora>1 && hora<=12)?  <h2 style={{ marginTop: '25%', marginLeft:'1em'}}>¡Buenos dias!</h2>:<h2 style={{ marginTop: '25%', marginLeft:'1em'}}>¡Buenas tardes!</h2>}
          
            <span style={{ marginLeft:'2em'}} > {today}</span>
          <div className="paddding">
          <Calculadora />
          <br/>
          </div>
          <center>
            <Link to="/balance">
            <div > <Grafica/> </div>
            </Link>
          </center>
          <br/>
         <center>
           <br/>
           <span className="registro-de">Registro de </span>
         </center>
        </div>
        <br/><br/>
        <center>
          <Button style={{backgroundColor:'#b82324', color:'white'}}> Gasto</Button>    
          <Button  style={{backgroundColor:'#17a54d', color:'white',marginLeft:'2vw'}}> Ingreso</Button>
        </center>
      </div>
    );
  }


}