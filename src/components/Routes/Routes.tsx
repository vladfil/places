import {useContext, FC} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Login from 'components/Login/Login'
import Context from 'store/context'
declare module 'react-router-dom'

export const Routes: FC = () => {
  const [state, dispatch] = useContext(Context)

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route>
          <p>Page not found</p>
        </Route>
      </Switch>
    </Router>
  )
}
