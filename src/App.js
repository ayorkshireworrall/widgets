import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Widgets from './containers/Widgets/Widgets';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/widgets" component={Widgets}/>
          <Redirect to="home" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
