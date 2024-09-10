"use client"
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';




ChartJS.register(ArcElement,Tooltip,Legend)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DoughnutChart = ({ accounts }: DoughnutChartProps) => {

  const data = {
    datasets : [
      {
        label: 'Banks',
        data: [2300, 7650, 1879],
        backgroundColor: ['#2f91fa', '#0747b6', '#2265d8']
      }
    ],
    labels: ['Equity Bank', 'I&M Bank', 'Absa Bank'],
  }
  return <Doughnut 
    data={data}
    options={
      {
        cutout: '60%',
        plugins:
        {
          legend:{
            display: false
          }
        }
      }
    } />

}

export default DoughnutChart
