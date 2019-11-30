import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from 'react-router-dom';
import Layout from '../layout/Layout';
import ConsoleRoute from './ConsoleRoute';


function myAuthRouter(props) {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={pro => (<Component {...pro} />)}
    />
  );
}
myAuthRouter.prototype = {
  component: PropTypes.element
};
const AuthRouter = withRouter(myAuthRouter);

function consoleComponent() {
  return (
    <Layout>
      <ConsoleRoute />
    </Layout>
  );
}
export default function appRoute() {
  return (
    <Router>
      <Switch>
        <AuthRouter path="/list" component={consoleComponent} />
      </Switch>
    </Router>
  );
}
