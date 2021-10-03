import {Snackbar, Alert} from '@mui/material'
import {useAppContext} from 'store/context'
import {ActionTypes} from 'store/reducer'

const Toast = () => {
  const {state, dispatch} = useAppContext()
  const toast = state && state.toast

  const handleClose = () => {
    dispatch({
      payload: {toast: {isOpen: false}},
      type: ActionTypes.UPDATE_ALL,
    })
  }

  return (
    <Snackbar
      open={toast && toast.isOpen}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        elevation={6}
        variant="filled"
        severity={(toast && toast.type) || 'info'}
        onClose={handleClose}
        sx={{width: '100%'}}
      >
        {toast && toast.message}
      </Alert>
    </Snackbar>
  )
}

export default Toast
