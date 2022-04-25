import type { AppState } from 'redux/configureStore'

export const selectData = ({ users }: AppState) => ({
  page: users.list.page,
  data: users.list.data,
  results: users.list.results,
  isLoading: users.list.isFetch,
})

export type PropsFromSelector = ReturnType<typeof selectData>
