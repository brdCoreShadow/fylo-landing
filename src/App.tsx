import * as SC from "./AppStyled"

import './App.css'
import Header from './layouts/Header/Header'
import SharedLayout from "./layouts/SharedLayout/ShareLayout"

function App() {

  return (
    <SC.AppCon>
      <Header/>
      <SharedLayout/>
    </SC.AppCon>
  )
}

export default App
