import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import CovidHome from './components/CovidHome/CovidHome'
import Footer from './components/Footer/Footer'
import './App.css'
import CovidAbout from './components/CovidAbout/CovidAbout'
import NotFound from './components/NotFound/NotFound'
import CovidState from './components/CovidState/CovidState'

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={CovidHome} />
      <Route exact path="/about" component={CovidAbout} />
      <Route exact path="/state/:id" component={CovidState} />
      <Route component={NotFound} />
    </Switch>

    <Footer />
  </BrowserRouter>
)

export default App
