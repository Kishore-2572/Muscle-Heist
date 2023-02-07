import React from 'react'
import Aboutus from '../../components/Aboutus'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Plans from '../../components/Plans'

const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <Aboutus/>
      <Plans/>
      <Footer/>
    </div>
  )
}

export default Home
