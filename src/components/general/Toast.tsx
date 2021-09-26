import {Snackbar, Alert} from '@mui/material'
import {useContext} from 'react'
import {Context} from 'store/context'
import {ActionTypes} from 'store/reducer'

const Toast = () => {
  const {state, dispatch} = useContext(Context)
  const toast = state && state.toast

  const handleClose = () => {
    dispatch({
      payload: null,
      type: ActionTypes.UPDATE_TOAST,
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
