import {FC} from 'react'
import {useQuery} from 'react-query'
import {useForm, FieldValues, useWatch} from 'react-hook-form'
import {
  Container,
  Grid,
  FormControl,
  TextField,
  FormHelperText,
  Typography,
} from '@mui/material'
import {LoadingButton} from '@mui/lab'
import {Link} from 'react-router-dom'
import axios, {AxiosError} from 'axios'
import {useAppContext} from 'store/context'
import {ActionTypes, Response, Toast, UserResponse} from 'utils/types'
import {setLocalStorage} from 'utils/localStorage'

const fetchUser = async (data: FieldValues) => {
  const {data: respData} = await axios.post<Response<UserResponse>>(
    '/user/login',
    {...data},
  )
  setLocalStorage('token', respData.data.token)
  setLocalStorage('user', respData.data.user)

  return respData
}

const Login: FC = () => {
  const {dispatch} = useAppContext()
  const {
    register,
    handleSubmit,
    formState: {errors},
    control,
  } = useForm()

  const fields = useWatch({
    control,
  })

  const {isLoading, refetch} = useQuery('user', () => fetchUser({...fields}), {
    enabled: false,
    onSuccess: (data: Response<UserResponse>) => {
      dispatch({
        payload: {
          token: data.data.token,
          user: data.data.user,
          auth: true,
          toast: {
            isOpen: true,
            message: 'Account authorized',
            type: 'success',
          },
        },
        type: ActionTypes.UPDATE_ALL,
      })
    },
    onError: (error: Error | AxiosError<Response<UserResponse>>) => {
      const toast: Toast = {isOpen: true, message: '', type: 'error'}
      if (axios.isAxiosError(error) && error?.response) {
        toast.message = error.response.data.message
      } else {
        toast.message = error.message
      }

      dispatch({
        payload: {
          toast,
        },
        type: ActionTypes.UPDATE_ALL,
      })
    },
  })

  const onSubmit = () => refetch()

  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item alignItems="center" xs={6}>
          <Typography variant="h3" component="h3" align="center" gutterBottom>
            Sign In
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl margin="dense" fullWidth>
              <TextField
                required
                label="Email"
                variant="outlined"
                error={!!errors?.email}
                helperText={errors?.email?.message}
                {...register('username', {
                  required: true,
                  minLength: {
                    value: 5,
                    message: 'Minimal Name length is 5 characters',
                  },
                })}
              />
            </FormControl>

            <FormControl margin="dense" fullWidth>
              <TextField
                required
                label="Password"
                variant="outlined"
                error={!!errors?.password}
                helperText={errors?.password?.message}
                type="password"
                {...register('password', {
                  required: true,
                  minLength: {
                    value: 6,
                    message: 'Minimal Name length is 6 characters',
                  },
                })}
              />
            </FormControl>

            <FormHelperText id="component-helper-text">
              Don't have account? <Link to="/sign-up">Sign-up</Link>
            </FormHelperText>

            <FormControl margin="dense" fullWidth>
              <LoadingButton
                loading={isLoading}
                color="primary"
                variant="contained"
                type="submit"
              >
                Login
              </LoadingButton>
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login
