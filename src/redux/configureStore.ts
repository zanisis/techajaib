// import { createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'

// Import epic dependencies here
import createRootReducer from './root/reducer'
import createRootEpic from './root/epics'
import dependencies from './root/dependencies'

const rootReducer = createRootReducer()
export type AppState = ReturnType<typeof rootReducer>

export function Stores() {
  const logger = createLogger({ collapsed: true })
  const epicMiddleware = createEpicMiddleware({ dependencies })

  const middlewares =
    process.env.NODE_ENV !== 'production' ? [epicMiddleware, logger] : [epicMiddleware]

  // const store = createStore(createRootReducer(), applyMiddleware(...middlewares))
  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
  })

  epicMiddleware.run(createRootEpic)

  return store
}
