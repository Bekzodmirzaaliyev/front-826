import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'
import Setimages from './layout/Setimages'

function App() {

  return (
    <>
    <Setimages/>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
