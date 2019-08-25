import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';

let data = {
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
}

export default class Grafica extends Component {
  render() {
    return (
      <div>
        <center>
              <div className="divGrafica">  <Line ref="chart" data={data}  options={{ responsive: true }} /></div>
        </center>
      </div>
    )
  }
  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}

