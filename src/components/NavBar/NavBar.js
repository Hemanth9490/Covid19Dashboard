import {Link} from 'react-router-dom'
import {Component} from 'react'
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <nav
        className="covid-navbar navbar navbar-expand-lg navbar-dark"
        id="custom-navbar"
      >
        <div className="container">
          <Link to="/" className="nav-link custom-navbar-brand">
            COVID19<span className="navbar-india-text">INDIA</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon " id="custom-toggler-icon">
              {' '}
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
export default NavBar
