import {Component} from 'react'
import './BarGraphs.css'
import {Bar} from 'react-chartjs-2'

class BarGraphs extends Component {
  render() {
    const {forBarGraph} = this.props
    const {forDateLabels} = forBarGraph
    const {
      forConfirmedCases,
      forRecoveredCases,
      forDeceasedCases,
      forActiveCases,
    } = forBarGraph

    const dataForConfirmedCases = {
      labels: forDateLabels,
      datasets: [
        {
          label: 'Confirmed Cases',
          fill: false,
          backgroundColor: '#9A0E31',
          color: '#9A0E31',
          borderColor: '#9A0E31',
          borderWidth: 2,
          borderRadius: 10,
          data: forConfirmedCases,
        },
      ],
    }
    const dataForActiveCases = {
      labels: forDateLabels,
      datasets: [
        {
          label: 'Active Cases',
          fill: false,
          backgroundColor: '#0A4FA0',
          color: '#0A4FA0',
          borderColor: '#0A4FA0',
          borderWidth: 2,
          borderRadius: 10,
          data: forActiveCases,
        },
      ],
    }
    const dataForRecoveredCases = {
      labels: forDateLabels,
      datasets: [
        {
          label: 'Recovered Cases',
          fill: false,
          backgroundColor: '#216837',
          color: '#216837',
          borderColor: '#216837',
          borderRadius: 10,
          data: forRecoveredCases,
        },
      ],
    }
    const dataForDeceasedCases = {
      labels: forDateLabels,
      datasets: [
        {
          label: 'Deceased Cases',
          fill: false,
          backgroundColor: '#474C57',
          color: '#474C57',
          borderColor: '#474C57',
          borderRadius: 10,
          data: forDeceasedCases,
        },
      ],
    }

    return (
      <div className="bar-graphs-container container mt-5">
        <div className="row justify-content-around">
          <div className="confirmed-chart col-12 col-lg-8 mt-5">
            <Bar
              data={dataForConfirmedCases}
              options={{
                title: {
                  display: true,
                  text: 'Confirmed Cases',
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: 'right',
                },
              }}
            />
          </div>
          <div className="active-chart col-12 col-lg-8 mt-5">
            <Bar
              data={dataForActiveCases}
              options={{
                title: {
                  display: true,
                  text: 'Active Cases',
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: 'right',
                },
              }}
            />
          </div>
          <div className="recoverd-chart col-12 col-lg-8 mt-5">
            <Bar
              data={dataForRecoveredCases}
              options={{
                title: {
                  display: true,
                  text: 'Recovered Cases',
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: 'right',
                },
              }}
            />
          </div>
          <div className="deceased-chart col-12 col-lg-8 mt-5">
            <Bar
              data={dataForDeceasedCases}
              options={{
                title: {
                  display: true,
                  text: 'Deceased Cases',
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: 'right',
                },
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default BarGraphs
