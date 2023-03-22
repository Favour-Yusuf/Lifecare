import React from 'react'
import AboutUs from './Components/AboutUs/AboutUs'
import Elite from './Components/Elite/Elite'
import ExclusiveService from './Components/ExclusiveServices/ExclusiveService'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import HowWeWork from './Components/HowWeWork/HowWeWork'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ExclusiveService />
      <AboutUs />
      <br />
      <Elite />
      <br /><br />
      <HowWeWork />
    </div>
  )
}

export default App