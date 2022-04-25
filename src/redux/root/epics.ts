import { combineEpics } from 'redux-observable'

import * as users from 'redux/epics/users'

export default combineEpics(...Object.values(users))
