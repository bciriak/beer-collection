import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <Redirect to="/dashboard"/>
    ) : (
      <Component {...props}/>
    )
  )
  }/>
);

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(PublicRoute);
