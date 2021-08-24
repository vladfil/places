import {FC} from 'react'
import {Route, Redirect} from 'react-router-dom'

interface Props {
  auth: boolean
  children: JSX.Element
  rest: never
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
