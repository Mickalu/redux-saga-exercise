import React from 'react'
import { Provider } from 'react-redux'
import '../assets/css/main.css'
import Main from '../components/Main'

import store from '../store'

const App = ({ store }) => (
  <Provider store={store}>
    <Main />
  </Provider>
)

App.propTypes = {
  store: React.PropTypes.object
}

export default App
