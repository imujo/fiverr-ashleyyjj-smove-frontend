import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Signup from './pages/Signup'
import RatingSetup from './pages/RatingSetup'
import UserSetup from './pages/UserSetup'
import SetupCongrats from './pages/SetupCongrats'
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <Switch>


      <Route path='/signup' >
        <Signup />
      </Route>

      <Route path='/usersetup' >
        <UserSetup />
      </Route>

      <Route path='/ratingsetup' >
        <RatingSetup />
      </Route>
      
      <Route path='/setupcongrats' >
        <SetupCongrats />
      </Route>

      <Route path='/' exact>
        <Redirect to='/listings' />
      </Route>

      <Route path='/:page?' >
        <Dashboard />
      </Route>



      </Switch>
      <div className="alert">
        <p>There has been an error</p>
      </div>
    </div>
  );
}

export default App;
