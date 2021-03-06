import React, { Fragment, useEffect, useState } from 'react';
import { Container, Header, List } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { Route, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {
  const location = useLocation();
  return (
    <Fragment>
      <Route exact path='/' component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <>
          <NavBar />
          <Container style={{ marginTop: "7em" }}>
            <Route exact path='/' component={HomePage}></Route>
            <Route exact path='/activities' component={ActivityDashboard}></Route>
            <Route path='/activities/:id' component={ActivityDetails}></Route>
            <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm}></Route>
          </Container>
        </>
      )} />
    </Fragment>
  );
}

export default observer(App);
