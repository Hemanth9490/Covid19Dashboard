import {Component} from 'react'
import './CovidHome.css'
import SearchBar from '../SearchBar/SearchBar'
import CasesInIndia from '../CasesInName/CasesInIndia/CasesInIndia'
import AllStatesCases from '../AllStatesCases/AllStatesCases'
import SearchSuggestions from '../SearchSuggestion/SearchSuggestion'

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

class CovidHome extends Component {
  state = {
    searchBarInput: '',
    covidData: [],
  }

  componentDidMount() {
    this.getCovidData()
  }

  getCovidData = async () => {
    const response = await fetch(
      'https://api.covid19india.org/v4/min/data.min.json',
    )
    const data = await response.json()
    this.setState({covidData: data})
  }

  onChangeSearchBarInput = event => {
    this.setState({searchBarInput: event.target.value})
  }

  getHomeComponent = () => {
    const {searchBarInput} = this.state
    const {covidData} = this.state

    const TT = 'TT'

    const searchSuggestionList = statesList.filter(eachStateObject =>
      eachStateObject.state_name
        .toLowerCase()
        .includes(searchBarInput.toLowerCase()),
    )
    if (searchBarInput === '') {
      return (
        <>
          <CasesInIndia covidData={covidData} stateName={TT} />
          <AllStatesCases statesList={statesList} covidData={covidData} />
        </>
      )
    }
    return <SearchSuggestions statesList={searchSuggestionList} />
  }

  render() {
    return (
      <div className="covid-home-container">
        <SearchBar onChangeSearchBarInput={this.onChangeSearchBarInput} />
        {this.getHomeComponent()}
      </div>
    )
  }
}
export default CovidHome
