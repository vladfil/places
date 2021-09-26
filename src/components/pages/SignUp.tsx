import {FC, useContext} from 'react'
import {useForm, FieldValues} from 'react-hook-form'
import {useMutation} from 'react-query'
import {
  Alert,
  Container,
  Grid,
  FormControl,
  TextField,
  Button,
  FormHelperText,
  Typography,
  CircularProgress,
} from '@mui/material'
import {Link} from 'react-router-dom'
import axios, {AxiosResponse} from 'axios'
import {Context} from 'store/context'
import {ActionTypes} from 'store/reducer'

type Obj = {
  [x: string]: any
}

const SignUp: FC = () => {
  const {dispatch} = useContext(Context)
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const mutation = useMutation<AxiosResponse<any>, Obj, FieldValues, Obj>(
    newUser => axios.post('/sign-up', newUser),
    {
      onSuccess: () =>
        dispatch({
          payload: {isOpen: true, message: 'User created!'},
          type: ActionTypes.UPDATE_TOAST,
        }),
    },
  )

  const onSubmit = (newUser: FieldValues) => {
    mutation.mutate(newUser)
  }

  let errorMessage: string = ''
  if (mutation?.error && typeof mutation.error === 'object') {
    if (mutation.error.response) {
      errorMessage = mutation.error.response.data
    }
  }

  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Typography variant="h3" component="h3" align="center" gutterBottom>
            Sign up
            {mutation.isLoading ? (
              <span style={{marginLeft: 20}}>
                <CircularProgress />
              </span>
            ) : null}
          </Typography>

          {mutation.isError ? (
            <Alert onClick={() => mutation.reset()} severity="error">
              {errorMessage}
            </Alert>
          ) : null}

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl margin="dense" fullWidth>
              <TextField
                required
                label="Name"
                variant="outlined"
                error={!!errors?.name}
                helperText={errors?.name?.message}
                {...register('name', {
                  required: true,
                  minLength: {
                    value: 4,
                    message: 'Minimal Name length is 4 characters',
                  },
                })}
              />
            </FormControl>

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
                    message: 'Minimal Email length is 6 characters',
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
                    message: 'Minimal Password length is 6 characters',
                  },
                })}
              />
            </FormControl>

            <FormHelperText id="component-helper-text">
              Have account? <Link to="/sign-in">Sign-in</Link>
            </FormHelperText>

            <FormControl margin="dense" fullWidth>
              <Button
                disabled={mutation.isLoading}
                color="primary"
                variant="contained"
                type="submit"
              >
                Sign up
              </Button>
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SignUp
