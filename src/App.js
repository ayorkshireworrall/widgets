import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';

import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Logout from './containers/Login/Logout/Logout';
import Widgets from './containers/Widgets/Widgets';
import * as actions from './store/actions'

function App() {
  const isAuthenticated = useSelector(state => {
    return state.auth.token !== null;
  });

  const dispatch = useDispatch();
  //TODO this process is a little clunky
  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(actions.attemptRefresh());
    }
  }, [dispatch])


  let routes = (
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/logout" component={Logout}/>
      <Route path="/widgets" component={Widgets}/>
      <Redirect to="home" />
    </Switch>
  );

  if (!isAuthenticated) {
    //try refresh
    //show unauthenticated routes
    routes = (
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
        <Redirect to="login" />
      </Switch>
    );
  }
  
  return (
    <BrowserRouter>
      <Layout>
        {routes}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
