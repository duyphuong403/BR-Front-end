import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import NotFound from './NotFound'
import SignUpStep1 from '../modules/SignUp/Step1'
import SignUpStep2 from '../modules/SignUp/Step2/'
import ListAll from '../modules/ListAll'

const routes = [
  {
    path: '/sign-up-step-1',
    component: SignUpStep1
  },
  {
    path: '/sign-up-step-2',
    component: SignUpStep2
  },
  {
    path: '/list-all',
    component: ListAll
  },
]

const AppRoutes = () => {

  return (
      <Router>
        <React.Suspense fallback={"loading..."}>
          <Switch>
            {routes.map((route, i) => (
              <Route exact path={route.path} component={route.component} key={`route-${i}`} />
            ))}
            <Redirect exact from="/" to="/sign-up-step-1" />
            <Route component={NotFound} />
          </Switch>
        </React.Suspense>
      </Router>
  )
}

export default AppRoutes