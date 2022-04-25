import { combineReducers } from 'redux'

import users from 'redux/ducks/users'
import snackbar from 'redux/ducks/snackbar'

function reducer() {
  return combineReducers({
    users,
    snackbar,
  })
}

export default reducer
