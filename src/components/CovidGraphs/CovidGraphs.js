import {Component} from 'react'
import './CovidGraphs.css'
import BarGraphs from './BarGraphs/BarGraphs'
import LineGraphs from './Linegraphs/Linegraphs'

class CovidGraphs extends Component {
  state = {barGraphs: true, lineGraphs: false}

  getBarGraphs = () => {
    this.setState({barGraphs: true, lineGraphs: false})
  }

  getLineGraphs = () => {
    this.setState({barGraphs: false, lineGraphs: true})
  }

  render() {
    const {forBarGraph, forLineGraphs} = this.props
    const {barGraphs, lineGraphs} = this.state
    return (
      <div className="graphs-container container">
        <div className="row justify-content-center">
          <div className="toggler-container mt-5">
            <h1 className="spread-heading text-white">Spread Trends</h1>
            <div className="toggles text-center">
              <button
                className="get-bar-graphs btn toggler-button"
                type="button"
                onClick={this.getBarGraphs}
              >
                Daily
              </button>
              <button
                className="get-line-graphs btn toggler-button "
                type="button"
                onClick={this.getLineGraphs}
              >
                Cumulative
              </button>
            </div>
          </div>
        </div>
        <div className="bar-and-line-graphs">
          {barGraphs && <BarGraphs forBarGraph={forBarGraph} />}
          {lineGraphs && <LineGraphs forLineGraphs={forLineGraphs} />}
        </div>
      </div>
    )
  }
}
export default CovidGraphs
