import {Component} from 'react'
import './EachStateCases.css'

const objectPath = require('object-path')

class EachStateCases extends Component {
  render() {
    const {covidData, eachState, statesList} = this.props
    const fullNameValue = statesList.find(
      eachStateObject => eachStateObject.state_code === eachState,
    )

    const answer = objectPath.get(fullNameValue, `state_name`)
    return (
      <ul className="table-state-list">
        <li className="state-name"> {answer}</li>
        <li className="text-danger ">{covidData[eachState].total.confirmed}</li>
        <li className="text-primary">
          {covidData[eachState].total.confirmed -
            covidData[eachState].total.recovered -
            covidData[eachState].total.deceased}
        </li>
        <li className="text-success">{covidData[eachState].total.recovered}</li>
        <li className="text-secondary">
          {covidData[eachState].total.deceased}
        </li>
        <li className="text light">{covidData[eachState].meta.population}</li>
      </ul>
    )
  }
}

export default EachStateCases
