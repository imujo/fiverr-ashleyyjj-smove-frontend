import {
  Switch,
  Route,
} from "react-router-dom";
import Signup from './pages/Signup'
import RatingSetup from './pages/RatingSetup'
import UserSetup from './pages/UserSetup'

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


      </Switch>
      <div className="alert">
        <p>There has been an error</p>
      </div>
    </div>
  );
}

export default App;
