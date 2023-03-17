import React, { useEffect } from 'react'
import Header from './components/layout/Header/Header'
import webFont from 'webfontloader'
import Footer from './components/layout/footer/Footer'
import Home from './components/pages/Home'

function App() {
  useEffect(() => {
    webFont.load({
      google:{
        families:["Rubik Iso"]
      }
    })
  }, [])
  
  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
