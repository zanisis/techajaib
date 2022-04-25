import createReducer from 'utils/createReducer'

export const SNACKBAR_CLOSE = 'SNACKBAR_CLOSE'
export const SNACKBAR_OPEN = 'SNACKBAR_OPEN'

export interface SnacbarState {
  isAutoHide: boolean
  isOpen: boolean
  isError: boolean
  message: string
}

export const INITIAL_STATE: SnacbarState = {
  isAutoHide: true,
  isOpen: false,
  isError: false,
  message: '',
}

export default createReducer(INITIAL_STATE, {
  [SNACKBAR_CLOSE]: (state) => {
    state.isOpen = INITIAL_STATE.isOpen
    state.isAutoHide = INITIAL_STATE.isAutoHide
  },
  [SNACKBAR_OPEN]: (state, { payload }) => {
    if (payload.isAutoHide !== undefined) {
      state.isAutoHide = payload.isAutoHide
    }
    if (payload.isError) {
      state.isError = true
    } else {
      state.isError = false
    }
    state.isOpen = true
    state.message = payload.message
  },
})

export const snackbarClose = () => ({
  type: SNACKBAR_CLOSE,
})

export const snackbarOpen = (payload: Snackbar) => ({
  type: SNACKBAR_OPEN,
  payload,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const snackbarError = (error: any) => {
  let message
  if (error.response) {
    message = error.response.message
  } else if (error.message) {
    message = error.message
  } else if (error && typeof error === 'string') {
    message = error
  } else {
    message = 'Oops Unknown Error!!'
  }

  return {
    type: SNACKBAR_OPEN,
    payload: {
      message,
      isAutohide: false,
      isError: true,
    },
  }
}
