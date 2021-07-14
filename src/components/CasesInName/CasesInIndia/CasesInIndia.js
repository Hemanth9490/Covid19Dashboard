import {Component} from 'react'
import '../CasesInName.css'

class CasesInIndia extends Component {
  render() {
    const {covidData, stateName} = this.props
    const confrimed = Object.keys(covidData)
      .filter(state => state === stateName)
      .map(e => covidData[e].total.confirmed)

    const deceased = Object.keys(covidData)
      .filter(state => state === stateName)
      .map(e => covidData[e].total.deceased)

    const recovered = Object.keys(covidData)
      .filter(state => state === stateName)
      .map(e => covidData[e].total.recovered)

    const active = confrimed - recovered - deceased

    return (
      <div className="india-cases container mt-5">
        <div className="row justify-content-center">
          <div className="india-confirmed col-5 col-lg-2 cases-confirmed card-name confirmed">
            <h1 className="card-name-tittle">Confirmed</h1>
            <img
              className="card-name-image"
              src="https://res.cloudinary.com/dfpnsmzzg/image/upload/v1625976788/samples/covid-19/Group_l5hjgx_pnrpdy.png"
              alt="confirmed"
            />
            <p className="card-name-value">{confrimed}</p>
          </div>
          <div className="india-active col-5 col-lg-2 cases-active card-name active">
            <h1 className="card-name-tittle">Active</h1>
            <img
              className="card-name-image"
              src="https://res.cloudinary.com/dfpnsmzzg/image/upload/v1625976787/samples/covid-19/protection_1_lmcx9l_opctg3.png"
              alt="confirmed"
            />
            <p className="card-name-value">{active}</p>
          </div>
          <div className="india-recovered col-5 col-lg-2 cases-recovered card-name recovered">
            <h1 className="card-name-tittle">Recoverd</h1>
            <img
              className="card-name-image"
              src="https://res.cloudinary.com/dfpnsmzzg/image/upload/v1625976786/samples/covid-19/recovered_1_qs1y8f_tlshd6.png"
              alt="confirmed"
            />
            <p className="card-name-value">{recovered}</p>
          </div>
          <div className="india-deceased col-5 col-lg-2 cases-deceased card-name deceased">
            <h1 className="card-name-tittle">Deceased</h1>
            <img
              className="card-name-image"
              src="https://res.cloudinary.com/dfpnsmzzg/image/upload/v1625976787/samples/covid-19/Outline_qoly2o_vyqewd.png"
              alt="confirmed"
            />
            <p className="card-name-value">{deceased}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CasesInIndia
