import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './component/Demo'

function App() {
  const name="Paridhi";
  let x=10;
  let y=20;
  function NM() {
    return "inside function";
  } 
  function sum(a,b){
    return a+b;
  }

  return (
    <div>
     <h1>User variable with jsx</h1>
     <h2>Value of variable is {name}</h2>
     <h3> {x+y} </h3>
     <h3> {NM()} </h3>    
    </div>
  )
}

export default App
