import produce from 'immer'

type Action = {
  type: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any
}

type FnMap<T> = {
  [key: string]: (draft: T, action: Action) => void
}

const createReducer = <T>(initialState: T, fnMap: FnMap<T>) =>
  produce((draft: T, action: Action) => {
    let result
    const callback = fnMap[action.type]
    if (callback) {
      result = callback(draft, action)
    }
    return result
  }, initialState)

export default createReducer
