import {Component} from 'react'
import './CovidAbout.css'
import Faqs from './Faqs/Faqs'
import CustomLoader from '../Loading/Loader'

class CovidAbout extends Component {
  state = {
    faqsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getFAQs()
  }

  getFAQs = async () => {
    const response = await fetch(
      'https://api.covid19india.org/website_data.json',
    )
    const data = await response.json()
    this.setState({faqsList: data.faq, isLoading: false})
  }

  render() {
    const {faqsList, isLoading} = this.state
    return (
      <div className="covid-about-component">
        {isLoading ? (
          <CustomLoader />
        ) : (
          <div className="covid-about-conatiner">
            <h1 className="about-main-heading ml-5">About</h1>
            <p className="update-date ml-5">Last update on march 28th 2021.</p>
            <h2 className="update-info ml-5">
              COVID-19 vaccines be ready for distribution
            </h2>
            <hr className="hr-line ml-5" />
            <ul className="faqs-container ml-1">
              {faqsList.map(eachFaq => (
                <Faqs eachFaq={eachFaq} key={eachFaq.qno} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default CovidAbout
