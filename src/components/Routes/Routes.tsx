import {FC} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {useAppContext} from 'store/context'
import {Typography} from '@mui/material'

import Home from 'components/pages/Home'
import SignIn from 'components/pages/SignIn'
import SignUp from 'components/pages/SignUp'
import Posts from 'components/pages/Posts'
import SinglePage from 'components/pages/SinglePage'
import Profile from 'components/pages/Profile'
import MyPosts from 'components/pages/MyPosts'
import NewPost from 'components/pages/NewPost'
import TopBar from 'components/general/TopBar'
import Toast from 'components/general/Toast'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

export const Routes: FC = () => {
  const {state} = useAppContext()

  return (
    <>
      <Toast />
      <Router>
        <TopBar />
        <Switch>
          <PublicRoute auth={state.auth} exact path="/sign-in">
            <SignIn />
          </PublicRoute>
          <PublicRoute auth={state.auth} exact path="/sign-up">
            <SignUp />
          </PublicRoute>
          <PublicRoute auth={state.auth} exact path="/posts">
            <Posts />
          </PublicRoute>
          <PublicRoute auth={state.auth} exact path="/posts/:id">
            <SinglePage />
          </PublicRoute>
          <PrivateRoute auth={state.auth} exact path="/profile">
            <Profile />
          </PrivateRoute>
          <PrivateRoute auth={state.auth} exact path="/my-posts">
            <MyPosts />
          </PrivateRoute>
          <PrivateRoute auth={state.auth} exact path="/new-post">
            <NewPost />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <Typography variant="h1" component="h2" align="center">
              Page not found
            </Typography>
          </Route>
        </Switch>
      </Router>
    </>
  )
}
