import {Component} from 'react'

class Pratice extends Component {
  componentDidMount() {
    this.getCovidData()
  }

  getCovidData = async () => {
    const response = await fetch(
      'https://api.covid19india.org/v4/min/data.min.json',
    )
    const data = response.json()
  }

  render() {
    return <h1>hi</h1>
  }
}
export default Pratice
