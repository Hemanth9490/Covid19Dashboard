import {Component} from 'react'

import {format} from 'date-fns'
import CasesInName from '../CasesInName/CasesInName'
import './CovidState.css'
import Districts from './Districts/Districts'
import CovidGraphs from '../CovidGraphs/CovidGraphs'

const objectPath = require('object-path')

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

class CovidState extends Component {
  state = {
    covidData: {},
    stateFullName: '',
    stateNameId: '',
    distNames: [],
    allDistsData: {},
    casesType: 'confirmed',
    activeCaseType: false,
    lastUpdatedDateVal: '',
    testedCountVal: '',

    forBarGraph: {},
    forLineGraphs: {},
  }

  componentDidMount() {
    this.getCovidData()
    this.getDatesData()
  }

  getDatesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(
      'https://api.covid19india.org/v4/min/timeseries.min.json',
    )
    const fetchedData = await response.json()
    const data = fetchedData[id].dates
    this.getBargraphsData(data)
    this.getLineGraphsData(data)
  }

  getBargraphsData = data => {
    const datesKeysList = Object.keys(data)

    const allDatesLabels = []
    datesKeysList.forEach(item =>
      allDatesLabels.push(format(new Date(item), 'd MMM').toString()),
    )
    const allTendatesLabels = allDatesLabels.reverse().splice(0, 10)

    const dateCountConfirmedList = []
    const dateCountRecoveredList = []
    const dateCountDeceasedList = []
    const dateCountActiveList = []

    allTendatesLabels.reverse().forEach(label => {
      datesKeysList.forEach(item => {
        if (format(new Date(item), 'd MMM').toString() === label) {
          if (format(new Date(item), 'y').toString() === '2021') {
            dateCountConfirmedList.push(data[item].delta.confirmed)
            if (
              Number.isNaN(data[item].delta.deceased) ||
              data[item].delta.deceased === undefined
            ) {
              dateCountDeceasedList.push(0)
            } else {
              dateCountDeceasedList.push(data[item].delta.deceased)
            }
            if (
              Number.isNaN(data[item].delta.recovered) ||
              data[item].delta.recovered === undefined
            ) {
              dateCountRecoveredList.push(0)
            } else {
              dateCountRecoveredList.push(data[item].delta.recovered)
            }
            dateCountActiveList.push(
              data[item].total.confirmed -
                data[item].total.recovered -
                data[item].total.deceased,
            )
          }
        }
      })
    })

    const barGraphsDataObject = {
      forDateLabels: allTendatesLabels,
      forConfirmedCases: dateCountConfirmedList,
      forRecoveredCases: dateCountRecoveredList,
      forDeceasedCases: dateCountDeceasedList,
      forActiveCases: dateCountActiveList,
    }
    this.setState({forBarGraph: barGraphsDataObject})
  }

  getLineGraphsData = data => {
    const datesKeysList = Object.keys(data)
    const allMonthsLabels = []
    datesKeysList.forEach(item =>
      allMonthsLabels.push(format(new Date(item), 'MMM Y').toString()),
    )
    const confirmedList = []
    const recoveredList = []
    const activeList = []
    const deceasedList = []
    const testedList = []
    const vaccinatedOneList = []
    const vaccinatedTwoList = []

    const allUniQueMonthlabels = [...new Set(allMonthsLabels)]

    allUniQueMonthlabels.forEach(label => {
      datesKeysList.forEach(item => {
        if (format(new Date(item), 'MMM Y').toString() === label) {
          if (
            format(new Date(item), 'd').toString() ===
            new Date(
              new Date(item).getFullYear(),
              new Date(item).getMonth() + 1,
              0,
            )
              .getDate()
              .toString()
          ) {
            deceasedList.push(data[item].total.deceased)
            confirmedList.push(data[item].total.confirmed)
            recoveredList.push(data[item].total.recovered)
            vaccinatedOneList.push(
              (data[item].total.confirmed / data[item].total.tested).toFixed(2),
            )
            if (
              Number.isNaN(data[item].total.vaccinated1) ||
              data[item].total.vaccinated1 === undefined
            ) {
              vaccinatedTwoList.push(0)
            } else {
              vaccinatedTwoList.push(data[item].total.vaccinated1)
            }

            testedList.push(data[item].total.tested)
            activeList.push(
              data[item].total.confirmed -
                data[item].total.recovered -
                data[item].total.deceased,
            )
          }
        }
      })
    })
    allUniQueMonthlabels.splice(10, 1)
    console.log('NEW', allUniQueMonthlabels)
    console.log('NEW', confirmedList)
    const LineGraphsDataObject = {
      forMonthLabels: allUniQueMonthlabels,
      forConfirmedCases: confirmedList,
      forRecoveredCases: recoveredList,
      forDeceasedCases: deceasedList,
      forActiveCases: activeList,
      forTestedCases: testedList,
      forVaccinatedOneCases: vaccinatedOneList,
      forVaccinatedTwoCases: vaccinatedTwoList,
    }
    this.setState({forLineGraphs: LineGraphsDataObject})
  }

  onchangeTopDisticts = casesTypeChnage => {
    if (casesTypeChnage === 'active') {
      this.setState({activeCaseType: true})
    } else {
      this.setState({casesType: casesTypeChnage, activeCaseType: false})
    }
  }

  getCovidData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(
      'https://api.covid19india.org/v4/min/data.min.json',
    )
    const data = await response.json()

    const distData = data[id].districts
    const newDistNamesList = Object.keys(distData)

    const value = statesList.find(
      eachStateObject => eachStateObject.state_code === id,
    )
    const answer = objectPath.get(value, `state_name`)

    const lastUpdatedDate = data[id].meta.last_updated
    const testedCount = data[id].delta7.tested

    this.setState({
      covidData: data,
      stateFullName: answer,
      stateNameId: id,
      distNames: newDistNamesList,
      allDistsData: distData,
      lastUpdatedDateVal: lastUpdatedDate,
      testedCountVal: testedCount,
    })
  }

  render() {
    const {
      covidData,
      stateFullName,
      stateNameId,
      distNames,
      allDistsData,
      activeCaseType,
      casesType,
      lastUpdatedDateVal,
      testedCountVal,
      forBarGraph,
      forLineGraphs,
    } = this.state
    const date = new Date(lastUpdatedDateVal)
    return (
      <div className="covid-state-container covid-state-component">
        <div className="state-name-container name-container container ">
          <div className="state-container row pt-5 justify-content-between">
            <div className="state-full-name-container col-3">
              <p className="state-full-name mt-1">{stateFullName}</p>
            </div>
            <div className="test-numbers-container col-3 mr-5 text-right">
              <p className="tested-text">Tested</p>
              <p className="tested-number">{testedCountVal}</p>
            </div>
          </div>
          <p className="update-status">
            Last update on{' '}
            {`${date.toLocaleString('default', {
              month: 'long',
            })} ${date.getDate()}th ${date.getFullYear()}`}
          </p>
          <div className="state-cases-container row ">
            <CasesInName
              covidData={covidData}
              stateName={stateNameId}
              onchangeTopDisticts={this.onchangeTopDisticts}
            />
          </div>
          <div className="distict-cases-container row">
            <h1 className="top-districts-heading text-danger">Top Districts</h1>
            <Districts
              distData={allDistsData}
              distNames={distNames}
              casesType={casesType}
              activeCaseType={activeCaseType}
            />
          </div>
          <div className="covid-graphs-main-container">
            <CovidGraphs
              forBarGraph={forBarGraph}
              forLineGraphs={forLineGraphs}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CovidState
