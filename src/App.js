import {
  Switch,
  Route,
} from "react-router-dom";
import Signup from './pages/Signup'
import RatingSetup from './pages/RatingSetup'
import UserSetup from './pages/UserSetup'

function App() {
  return (
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
  );
}

export default App;
