import {Component} from 'react'
import './Linegraphs.css'
import {Line} from 'react-chartjs-2'

class LineGraphs extends Component {
  render() {
    const {forLineGraphs} = this.props
    const {forMonthLabels} = forLineGraphs

    const {
      forConfirmedCases,
      forRecoveredCases,
      forDeceasedCases,
      forActiveCases,
      forTestedCases,
      forVaccinatedOneCases,
      forVaccinatedTwoCases,
    } = forLineGraphs

    const dataForConfirmedCases = {
      labels: forMonthLabels,
      datasets: [
        {
          label: 'Confirmed',
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
    const dataForActiveCases = {
      labels: forMonthLabels,
      datasets: [
        {
          label: 'Total Active',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#007BFF',
          color: '#007BFF',
          borderColor: '#007BFF',
          borderWidth: 2,
          pointHoverBorderColor: '#ffffff',
          data: forActiveCases,
        },
      ],
    }
    const dataForRecoveredCases = {
      labels: forMonthLabels,
      datasets: [
        {
          label: 'Recovered',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#27A243',
          color: '#27A243',
          borderColor: '#27A243',
          borderWidth: 2,
          pointHoverBorderColor: '#ffffff',
          data: forRecoveredCases,
        },
      ],
    }
    const dataForDeceasedCases = {
      labels: forMonthLabels,
      datasets: [
        {
          label: 'Deceased',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#6C757D',
          color: '#6C757D',
          borderColor: '#6C757D',
          borderWidth: 2,
          pointHoverBorderColor: '#ffffff',
          data: forDeceasedCases,
        },
      ],
    }
    const dataForTestedCases = {
      labels: forMonthLabels,
      datasets: [
        {
          label: 'Tested',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#9673B9',
          color: '#9673B9',
          borderColor: '#9673B9',
          pointHoverBorderColor: '#ffffff',
          borderWidth: 2,
          data: forTestedCases,
        },
      ],
    }
    const dataForTestRatioCases = {
      labels: forMonthLabels,
      datasets: [
        {
          label: 'Test Positivity Ratio (confirmed/tested)',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#FD7E14',
          color: '#FD7E14',
          borderColor: '#FD7E14',
          pointHoverBorderColor: '#ffffff',
          borderWidth: 2,
          data: forVaccinatedOneCases,
        },
      ],
    }
    const dataForVaccinatedCases = {
      labels: forMonthLabels,
      datasets: [
        {
          label: 'Total Vaccinated',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#F95581',
          color: 'white',
          borderColor: '#F95581',
          borderWidth: 2,
          pointHoverBorderColor: '#ffffff',
          data: forVaccinatedTwoCases,
        },
      ],
    }

    return (
      <div className="line-chart-container container mt-5">
        <div className="row justify-content-center">
          <div className="red-confirmed-chart col-12 col-lg-8 mt-5">
            <Line
              data={dataForConfirmedCases}
              options={{
                title: {
                  display: true,
                  text: 'Average Active per month',
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: 'right',
                },
              }}
            />
          </div>
          <div className="blue-active-chart col-12 col-lg-8 mt-5">
            <Line
              data={dataForActiveCases}
              options={{
                title: {
                  display: true,
                  text: 'Average Active per month',
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: 'right',
                },
              }}
            />
          </div>
          <div className="green-recovered-chart col-12 col-lg-8 mt-5">
            <Line
              data={dataForRecoveredCases}
              options={{
                title: {
                  display: true,
                  text: 'Average Recovered per month',
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: 'right',
                },
              }}
            />
          </div>
          <div className="grey-deceased-chart col-12 col-lg-8 mt-5">
            <Line
              data={dataForDeceasedCases}
              options={{
                title: {
                  display: true,
                  text: 'Average Deceased per month',
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: 'right',
                },
              }}
            />
          </div>
          <div className="voilet-tested-chart col-12 col-lg-8 mt-5">
            <Line
              data={dataForTestedCases}
              options={{
                title: {
                  display: true,
                  text: 'Average Tested per month',
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: 'right',
                },
              }}
            />
          </div>
          <div className="pink-tested-ratio-chart col-12 col-lg-8 mt-5">
            <Line
              data={dataForTestRatioCases}
              options={{
                title: {
                  display: true,
                  text: 'Test Positivity per Month',
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: 'right',
                },
              }}
            />
          </div>
          <div className="light-pink-vaccinated-chart col-12 col-lg-8 mt-5">
            <Line
              data={dataForVaccinatedCases}
              options={{
                title: {
                  display: true,
                  text: 'Average Vaccinated ( One Dose) per month',
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
export default LineGraphs
