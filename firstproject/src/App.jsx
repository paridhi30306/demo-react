import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './component/Demo'

function App() {
 

  return (
    <div>
     <h1>Hi i am Paridhi Singh</h1>
     <h1>Inside the app component</h1>
     <Employee></Employee>
     <Demo></Demo>
    </div>
  )
}
function Employee(){
  return(
    <h1>The employee name is paridhi singh</h1>
  )
}

export default App
