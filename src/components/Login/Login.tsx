import {useForm, FieldValues} from 'react-hook-form'
import {
  Container,
  Grid,
  FormControl,
  TextField,
  Button,
} from '@material-ui/core'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const onSubmit = (data: FieldValues) => console.log(data)

  return (
    <Container>
      <Grid container justify="center">
        <Grid item alignItems="center" xs={6}>
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
                  minLength: {value: 30, message: 'error message'},
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
                  minLength: {value: 30, message: 'error message'},
                })}
              />
            </FormControl>

            <FormControl margin="dense" fullWidth>
              <Button color="primary" variant="contained" type="submit">
                Login
              </Button>
            </FormControl>
          </form>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login
