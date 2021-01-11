import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Configuration } from '@react-md/layout'

import App from './App'
import store from './stores/configureStore'
import './index.scss'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Configuration>
        <App />
      </Configuration>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
