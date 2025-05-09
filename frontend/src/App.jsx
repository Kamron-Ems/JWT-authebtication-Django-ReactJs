import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom"
import {ToastContainer} from 'react-toastify'
// import {Routes, Route} from  'react-router-dom'
import Login from "./pages/Login"
import Register from './pages/Register'
import Home from './pages/Home'
import Navbar from "./components/Navbar"

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


export default function App() {
  return(
    <>
      <Router>
        <Routes/>
      </Router>
      <ToastContainer/>
    </>
  )
}




import About from "./pages/About"
import ResetPassword from "./pages/ResetPassword"
import ActivateAccount from "./pages/ActivateAccount"
// import ProtectedRoute from "./components/ProtectedRouter"

function Routes () {

  
  return (
    <Router>
      {/* Les Routes sans la Navbar */}
      <Switch>
      <Route path={'/'} exact><Login/></Route>
      <Route path={'/register'} ><Register/></Route>
      <Route path={'/resetpass'} ><ResetPassword/></Route>
      <Route path={'/activation'} ><ActivateAccount/></Route>
      <Route >
      {/* Les Routes Avec la Navbar */}
      <Navbar content={
          <Switch>
          <Route path={'/home'} component = {Home} exact/>
              {/* <ProtectedRoute path="/home" component={Home} /> */}
              <Route path={'/about'} component = {About} />
              {/* <ProtectedRoute path="/about" component={About} /> */}
              <Route path={'/home'} exact><Home/></Route>
              <Route path={"/about"}><About/></Route>
          </Switch>
        } />
      </Route>

      </Switch>
    </Router>
  )
}
















