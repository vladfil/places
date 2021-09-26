import {FC, useContext} from 'react'
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
import axios from 'axios'
import {Context} from 'store/context'
import {ActionTypes} from 'store/reducer'

const fetchTodoList = async (data: FieldValues) => {
  const response = await axios.post('/sign-in', {...data})
  return response
}

const Login: FC = () => {
  const {dispatch} = useContext(Context)
  const {
    register,
    handleSubmit,
    formState: {errors},
    control,
  } = useForm()

  const fields = useWatch({
    control,
  })

  const {isLoading, refetch, data} = useQuery(
    'token',
    () => fetchTodoList({...fields}),
    {
      enabled: false,
      staleTime: 0,
      cacheTime: 0,
      onSuccess: () =>
        dispatch({
          payload: {
            isOpen: true,
            message: 'Account authorized',
            type: 'success',
          },
          type: ActionTypes.UPDATE_TOAST,
        }),
      onError: () =>
        dispatch({
          payload: {isOpen: true, message: 'Login error', type: 'error'},
          type: ActionTypes.UPDATE_TOAST,
        }),
    },
  )

  const onSubmit = () => refetch()

  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item alignItems="center" xs={6}>
          <Typography variant="h3" component="h3" align="center" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl margin="dense" fullWidth>
              <TextField
                required
                label="Email"
                variant="outlined"
                error={!!errors?.email}
                helperText={errors?.email?.message}
                {...register('email', {
                  required: true,
                  minLength: {
                    value: 6,
                    message: 'Minimal Name length is 6 characters',
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
