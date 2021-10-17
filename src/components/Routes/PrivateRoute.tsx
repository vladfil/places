import {FC} from 'react'
import {Route, Redirect, RouteProps} from 'react-router-dom'

interface Props extends RouteProps {
  auth: boolean
  children: JSX.Element
}

const PrivateRoute: FC<Props> = ({auth, children, ...rest}) => {
  return (
    <Route
      {...rest}
      render={({location}) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {from: location},
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
