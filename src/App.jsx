import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/Components/Layout/Header'
import Main from "./assets/Components/Layout/"
import Footer from './assets/Components/Layout/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
