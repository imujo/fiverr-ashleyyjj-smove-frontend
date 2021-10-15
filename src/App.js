import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Signup from './pages/Signup'
import RatingSetup from './pages/RatingSetup'
import UserSetup from './pages/UserSetup'
import SetupCongrats from './pages/SetupCongrats'
import Dashboard from "./components/Dashboard";
import ScrollToTop from './functions/ScrollToTop'
import PrivateRoute from "./functions/PrivateRoute";
import Login from './pages/Login'
import { ReloadStateContext } from './state/ReloadState'
import { useContext } from "react";
import useGaTracker from "./functions/useGaTracker";
import PasswordReset from "./pages/PasswordReset";


function App() {
  
  
  const { alertGlobal } = useContext(ReloadStateContext);
  const [alert,] = alertGlobal;

  useGaTracker()
  
  

  return (

    <>
      
      <ScrollToTop />
      <Switch>


      <Route path='/signup' component={Signup} />

      <Route path='/login' component={Login}/>

      <Route path='/passwordReset' component={PasswordReset}/>

      <PrivateRoute path='/usersetup' component={UserSetup} />

      <PrivateRoute path='/ratingsetup' component={RatingSetup} />
      
      <PrivateRoute path='/setupcongrats' component={SetupCongrats} />

      <PrivateRoute path='/' exact component={<Redirect to='/listings' />} />

      <PrivateRoute path='/:page?' component={Dashboard} />
      



      </Switch>
      {

        alert ?

        <div className={`alert alert-${alert.type} alert-active`}>
          <p>{alert.msg}</p>
        </div>

        : 
        undefined
        
      }
      
    </>
  );
}

export default App;
