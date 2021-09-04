import {FC} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignIn from 'components/SignIn/SignIn'
import SignUp from 'components/SignUp/SignUp'
import {Typography} from '@material-ui/core'
declare module 'react-router-dom'

export const Routes: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/sign-in">
          <SignIn />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        <Route exact path="/">
          <Typography variant="h1" component="h2" align="center">
            Home page
          </Typography>
        </Route>
        <Route>
          <p>Page not found</p>
        </Route>
      </Switch>
    </Router>
  )
}
