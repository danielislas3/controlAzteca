import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: [1,2,3,4,5,6,7,8,9,10],
  datasets: [
    {
      label: 'Votesprmedio',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
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

export default class Chart extends Component {
  render() {
    return (
      <div>
        <h2>Line Example</h2>
        <Line ref="chart" data={data}  options={{ responsive: true }} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}