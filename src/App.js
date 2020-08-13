import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector} from 'react-redux';

import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Logout from './containers/Login/Logout/Logout';
import Widgets from './containers/Widgets/Widgets';

function App() {
  const isAuthenticated = useSelector(state => {
    return state.auth.token !== null;
  });

  const routes = isAuthenticated ? (
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/logout" component={Logout}/>
      <Route path="/widgets" component={Widgets}/>
      <Redirect to="home" />
    </Switch>
  ) : (
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/login" component={Login}/>
      <Redirect to="login" />
    </Switch>
  );
  
  return (
    <BrowserRouter>
      <Layout>
        {routes}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
