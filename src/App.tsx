import * as SC from "./AppStyled"

import './App.css'
import Header from './layouts/Header/Header'
import SharedLayout from "./layouts/SharedLayout/ShareLayout"
import Footer from "./layouts/Footer/Footer"

function App() {

  return (
    <SC.AppCon>
      <Header/>
      <SharedLayout/>
      <Footer/>
    </SC.AppCon>
  )
}

export default App
