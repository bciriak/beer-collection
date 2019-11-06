import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import AddBeerPage from '../components/AddBeerPage';
import BeerEditPage from '../components/BeerEditPage';
import BeerDirectoryPage from '../components/BeerDirectoryPage'
import NotFoundPage from '../components/NotFoundPage';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={DashboardPage} exact={true}/>
        <Route path="/beers/new" component={AddBeerPage}/>
        <Route path="/edit/:id" component={BeerEditPage}/>
        <Route path="/beer-directory" component={BeerDirectoryPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>

  </Router>
);

export default AppRouter;
