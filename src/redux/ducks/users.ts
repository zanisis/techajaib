import createReducer from 'utils/createReducer'

export const GET_USERS = 'GET_USERS'
export const GET_USERS_FAILED = 'GET_USERS_FAILED'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'

type UsersState = {
  list: {
    filter: object
    page: number
    data: object[]
    isFetch: boolean
    results: number
  }
}

export const INITIAL_STATE: UsersState = {
  list: {
    filter: {
      seed: 'abc',
    },
    page: 1,
    data: [],
    isFetch: false,
    results: 10, // result as limit
  },
}

export default createReducer(INITIAL_STATE, {
  [GET_USERS]: (state, { payload }) => {
    state.list.isFetch = true
    state.list.page = INITIAL_STATE.list.page
    if (payload !== undefined) {
      const newFilter: any = {
        ...state.list.filter,
      }
      if (payload.gender && payload.gender !== 'all') {
        newFilter.gender = payload.gender
      }
      if (payload.name && payload.name !== '') {
        newFilter.name = payload.name
      }
      if (payload.page) {
        state.list.page = payload.page
      }
      state.list.filter = newFilter
    } else {
      state.list.filter = INITIAL_STATE.list.filter
    }
  },
  [GET_USERS_FAILED]: (state) => {
    state.list.isFetch = INITIAL_STATE.list.isFetch
  },
  [GET_USERS_SUCCESS]: (state, { payload }) => {
    state.list.isFetch = INITIAL_STATE.list.isFetch
    state.list.data = payload.results
    state.list.results = payload.info.results
    state.list.page = payload.info.page
  },
})

export const getUsers = (payload?: any) => ({
  type: GET_USERS,
  payload,
})

export const getUsersFailed = () => ({
  type: GET_USERS_FAILED,
})

export const getUsersSuccess = (payload: any) => ({
  type: GET_USERS_SUCCESS,
  payload,
})
