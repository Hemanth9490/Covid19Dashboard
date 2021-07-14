import {Component} from 'react'

import {Line} from 'react-chartjs-2'

class EachLineGraph extends Component {
  render() {
    const {forMonthLabels, forConfirmedCases, labelName} = this.props
    const dataForConfirmedCases = {
      labels: forMonthLabels,
      datasets: [
        {
          label: labelName,
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#FF073A',
          color: '#FF073A',
          borderColor: '#FF073A',
          borderWidth: 2,
          pointHoverBorderColor: '#ffffff',
          data: forConfirmedCases,
        },
      ],
    }
    return (
      <div className="col-12 col-lg-8 mt-5 line-chart">
        <Line
          data={dataForConfirmedCases}
          options={{
            title: {
              display: true,
              text: 'Average Confirmed per month',
              fontSize: 20,
            },
            legend: {
              display: true,
              position: 'right',
            },
          }}
        />
      </div>
    )
  }
}
export default EachLineGraph
