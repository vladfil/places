import {FC} from 'react'
import {Route, Redirect, RouteProps} from 'react-router-dom'

interface Props extends RouteProps {
  auth: boolean
  children: JSX.Element
}

const PublicRoute: FC<Props> = ({auth, children, ...rest}) => {
  return (
    <Route
      {...rest}
      render={({location}) =>
        auth ? (
          <Redirect
            to={{
              pathname: '/',
              state: {from: location},
            }}
          />
        ) : (
          children
        )
      }
    />
  )
}

export default PublicRoute
