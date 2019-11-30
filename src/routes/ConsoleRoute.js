import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import List from '../pages/List';
import Detail from '../pages/Detail';

export default function ConsoleRoute() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/edit/:id`} component={Detail} />
      <Route path={`${path}`} component={List} />
    </Switch>
  );
}
