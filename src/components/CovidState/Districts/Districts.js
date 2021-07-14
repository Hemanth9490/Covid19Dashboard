import {Component} from 'react'
import './Districts.css'

const objectPath = require('object-path')

class Districts extends Component {
  getTopDirstictActiveCases = () => {
    const {distData, distNames} = this.props

    const formate = distNames.map(element => ({
      stateName: element,
      value:
        objectPath.get(distData, `${element}.total.confirmed`) -
        objectPath.get(distData, `${element}.total.deceased`) -
        objectPath.get(distData, `${element}.total.recovered`),
    }))

    formate.sort((a, b) => b.value - a.value)

    const distElement = formate.map(eachState => (
      <p className="each-dist col-6 col-md-3" key={eachState.stateName}>
        {eachState.value}
        <span className="dist-name ml-1">{eachState.stateName}</span>
      </p>
    ))
    return distElement
  }

  getTopDirstict = () => {
    const {casesType} = this.props
    const {distData, distNames} = this.props

    const formate = distNames.map(element => ({
      distName: element,
      value: objectPath.get(distData, `${element}.total.${casesType}`),
    }))

    formate.sort((a, b) => b.value - a.value)
    const removeNonValues = formate.filter(eachDist => eachDist.value > 0)
    const distElement = removeNonValues.map(eachDist => (
      <p className="each-dist col-6 col-md-3" key={eachDist.stateName}>
        {eachDist.value}
        <span className="dist-name ml-1"> {eachDist.distName}</span>
      </p>
    ))
    return distElement
  }

  render() {
    const {activeCaseType} = this.props
    return (
      <div className="container">
        <div className="row  ml-5">
          {activeCaseType
            ? this.getTopDirstictActiveCases()
            : this.getTopDirstict()}
        </div>
      </div>
    )
  }
}
export default Districts
