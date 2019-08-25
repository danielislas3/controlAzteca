import React, {Component} from 'react';
import Navbar from './NavBar';
import { Line } from 'react-chartjs-2';
import Calculadora from './Calculadora';
import { Button} from 'semantic-ui-react'

const data = {
  labels: [1,2,3,4,5,6,7,8,9,10],
  datasets: [
    {
      label: 'Promedio',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,17,42,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.5,
      borderJoinStyle: 'miter',
      pointBackgroundColor: "rgb(255, 255, 255)",
      pointBorderWidth: 2,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: "rgb(0, 0, 0)",
      pointHoverBorderColor: "rgba(220, 220, 220, 1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3000,3000,3000,3000,3000,3000,3000,3000,3000,3000]
    },
    {
      label: 'Votesprmedio',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.5,
      borderJoinStyle: 'miter',
      pointBackgroundColor: "rgb(255, 255, 255)",
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgb(0, 0, 0)",
      pointHoverBorderColor: "rgba(220, 220, 220, 1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [150,300,3500,600,800,20,344]
    },

  ]
};
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
            <div className="divGrafica">  <Line ref="chart" data={data}  options={{ responsive: true }} /></div>
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

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}