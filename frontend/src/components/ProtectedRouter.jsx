// import {Outlet, Navigate} from 'react-router-dom'


// function ProtectedRouter() {

//     const token = localStorage.getItem('token')

//   return (
//     token ? <Outlet/> : <Navigate to="/"/>
//   )
// }

// export default ProtectedRouter


import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default ProtectedRoute;
