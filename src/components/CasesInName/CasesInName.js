import {Component} from 'react'
import './CasesInName.css'

class CasesInName extends Component {
  state = {
    confirmedButton: false,
    activeButton: false,
    recoveredButton: false,
    deceseadButton: false,
  }

  render() {
    const {
      confirmedButton,
      activeButton,
      deceseadButton,
      recoveredButton,
    } = this.state
    const {covidData, stateName, onchangeTopDisticts} = this.props
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
    const onChangeCasesToConfirmed = () => {
      onchangeTopDisticts('confirmed')

      this.setState({
        confirmedButton: true,
        activeButton: false,
        deceseadButton: false,
        recoveredButton: false,
      })
    }
    const onChangeCasesToActive = () => {
      onchangeTopDisticts('active')

      this.setState({
        confirmedButton: false,
        activeButton: true,
        deceseadButton: false,
        recoveredButton: false,
      })
    }
    const onChangeCasesToRecovered = () => {
      onchangeTopDisticts('recovered')

      this.setState({
        confirmedButton: false,
        activeButton: false,
        deceseadButton: false,
        recoveredButton: true,
      })
    }
    const onChangeCasesToDeceased = () => {
      onchangeTopDisticts('deceased')
      this.setState({
        confirmedButton: false,
        activeButton: false,
        deceseadButton: true,
        recoveredButton: false,
      })
    }
    const confirmedButtonClass = confirmedButton ? 'confirmed' : 'card'
    const activeButtonClass = activeButton ? 'active' : 'card'
    const deceseadButtonClass = deceseadButton ? 'deceased' : 'card'
    const recoveredButtonClass = recoveredButton ? 'recovered' : 'card'
    return (
      <div className="state-cases container mt-5">
        <div className="state-cases-row row justify-content-center">
          <button
            type="button"
            className={`state-cases-confirmed card-name cases-confirmed col-5 col-lg-2 ${confirmedButtonClass}`}
            onClick={onChangeCasesToConfirmed}
          >
            <h1 className="card-name-tittle">Confirmed</h1>
            <img
              className="card-name-image"
              src="https://res.cloudinary.com/dfpnsmzzg/image/upload/v1625976788/samples/covid-19/Group_l5hjgx_pnrpdy.png"
              alt="confirmed"
            />
            <p className="card-name-value">{confrimed}</p>
          </button>
          <button
            type="button"
            className={`state-cases-active cases-active card-name col-5 col-lg-2 ${activeButtonClass}`}
            onClick={onChangeCasesToActive}
          >
            <h1 className="card-name-tittle">Active</h1>
            <img
              className="card-name-image"
              src="https://res.cloudinary.com/dfpnsmzzg/image/upload/v1625976787/samples/covid-19/protection_1_lmcx9l_opctg3.png"
              alt="confirmed"
            />
            <p className="card-name-value">{active}</p>
          </button>
          <button
            type="button"
            className={`state-cases-recovered cases-recovered card-name col-5 col-lg-2 ${recoveredButtonClass}`}
            onClick={onChangeCasesToRecovered}
          >
            <h1 className="card-name-tittle">Recoverd</h1>
            <img
              className="card-name-image"
              src="https://res.cloudinary.com/dfpnsmzzg/image/upload/v1625976786/samples/covid-19/recovered_1_qs1y8f_tlshd6.png"
              alt="confirmed"
            />
            <p className="card-name-value">{recovered}</p>
          </button>
          <button
            type="button"
            className={`state-cases-deceased cases-deceased card-name col-5 col-lg-2 ${deceseadButtonClass}`}
            onClick={onChangeCasesToDeceased}
          >
            <h1 className="card-name-tittle">Deceased</h1>
            <img
              className="card-name-image"
              src="https://res.cloudinary.com/dfpnsmzzg/image/upload/v1625976787/samples/covid-19/Outline_qoly2o_vyqewd.png"
              alt="confirmed"
            />
            <p className="card-name-value">{deceased}</p>
          </button>
        </div>
      </div>
    )
  }
}

export default CasesInName
