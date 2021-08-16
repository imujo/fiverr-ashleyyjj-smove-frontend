import {
  Switch,
  Route,
} from "react-router-dom";
import Signup from './pages/Signup'
import RatingSetup from './pages/RatingSetup'
import UserSetup from './pages/UserSetup'
import SetupCongrats from './pages/SetupCongrats'

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


      </Switch>
      <div className="alert">
        <p>There has been an error</p>
      </div>
    </div>
  );
}

export default App;
