import React from 'react'
import ExclusiveService from './Components/ExclusiveServices/ExclusiveService'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ExclusiveService />
    </div>
  )
}

export default App