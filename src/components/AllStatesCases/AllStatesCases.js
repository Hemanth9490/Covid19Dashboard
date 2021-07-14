import {Component} from 'react'
import './AllStatesCases.css'
import EachStateCases from './EachStateCases/EachStateCases'

class AllStatesCases extends Component {
  render() {
    const {covidData, statesList} = this.props
    const keys = Object.keys(covidData)

    return (
      <div className="all-states-cases-component">
        <div className="all-states-cases-container">
          <div className="table-heading">
            <ul className="table-unorder-head-list">
              <li>States/UI</li>
              <li>Conformed</li>
              <li>Active</li>
              <li>Recovered</li>
              <li>Deceased</li>
              <li>Population</li>
            </ul>
          </div>
          <hr className="hr-line" />
          {keys.map(eachState => (
            <EachStateCases
              covidData={covidData}
              key={eachState}
              eachState={eachState}
              statesList={statesList}
            />
          ))}
        </div>
      </div>
    )
  }
}
export default AllStatesCases
