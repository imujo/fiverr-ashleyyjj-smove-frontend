import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, path, current_path, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuth");
  
  let redirectTo = '/signup'

  if (path === '/'){
    redirectTo='/listings'
  }
 
  return (
    <Route
      path={path}
      {...restOfProps}
      render={(props) =>
        isAuthenticated && path !== '/' ? <Component {...props} /> : <Redirect to={redirectTo}/>
      }
    />
  );
}

export default PrivateRoute;
