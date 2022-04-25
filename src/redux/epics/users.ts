import { ofType } from 'redux-observable'
import { catchError, map, of, switchMap } from 'rxjs'
import type { Epic } from 'redux-observable'

import { USERS_GET } from 'constants/endpoint'
import { getUsersFailed, getUsersSuccess, GET_USERS } from 'redux/ducks/users'
import { snackbarError } from 'redux/ducks/snackbar'

export const productFetchEpics: Epic = (action$, state$, { api }) =>
  action$.pipe(
    ofType(GET_USERS),
    switchMap(() => {
      const { list } = state$.value.users
      const queryParameter = {
        ...list.filter,
        results: list.results,
        page: list.page,
      }
      return api({
        endpoint: USERS_GET,
        query: queryParameter,
      }).pipe(
        map(({ response }) => getUsersSuccess(response)),
        catchError((error) => of(getUsersFailed(), snackbarError(error))),
      )
    }),
  )
