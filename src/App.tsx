import React from 'react'
import { Provider } from 'react-redux'

import PageUsers from 'pages/PageUsers'
import { Stores as configureStore } from 'redux/configureStore'

const App = () => (
  <Provider store={configureStore()}>
    <div className="App">
      <main>
        <PageUsers />
      </main>
    </div>
  </Provider>
)

export default App
