import {FC} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from 'components/Login/Login'
declare module 'react-router-dom'

export const Routes: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}
