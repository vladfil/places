import {FC} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from 'components/pages/Home'
import SignIn from 'components/pages/SignIn'
import SignUp from 'components/pages/SignUp'
import TopBar from 'components/general/TopBar'

export const Routes: FC = () => {
  return (
    <>
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <p>Page not found</p>
          </Route>
        </Switch>
      </Router>
    </>
  )
}
