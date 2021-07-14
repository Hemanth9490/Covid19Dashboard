import {Link} from 'react-router-dom'
import {Component} from 'react'
import './SearchSuggestion.css'

class SearchSuggestions extends Component {
  render() {
    const {statesList} = this.props

    return (
      <div className="covid-search-suggestion-component">
        {statesList.map(eachState => (
          <Link to={`/state/${eachState.state_code}`}>
            {' '}
            <li className="covid-search-suggestion-container">
              <p>{eachState.state_name}</p>
              <div className="button-div ">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  id="custom-button"
                >
                  {eachState.state_code}
                  <svg
                    width="6"
                    height="10"
                    className="mb-1 ml-1"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.792893 0.792893C0.402369 1.18342 0.402369 1.81658 0.792893 2.20711L3.58579 5L0.792893 7.79289C0.402369 8.18342 0.402369 8.81658 0.792893 9.20711C1.18342 9.59763 1.81658 9.59763 2.20711 9.20711L5.70711 5.70711C6.09763 5.31658 6.09763 4.68342 5.70711 4.29289L2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792893 0.792893Z"
                      fill="#FACC15"
                    />
                  </svg>
                </button>
              </div>
            </li>
          </Link>
        ))}
      </div>
    )
  }
}
export default SearchSuggestions
