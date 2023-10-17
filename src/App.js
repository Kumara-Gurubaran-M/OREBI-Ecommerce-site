import React from 'react'
import Navbar from './component/nav/Navbar'
import Routing from './component/routing'
import Footer from "./component/footer/Footer"
import { Provider } from 'react-redux'
import store from "./component/redux/store"
function App() {
  return (
    <Provider store={store}>
      <div >
        <Navbar />
        <Routing />
        <Footer />
      </div>
    </Provider>
  )
}

export default App