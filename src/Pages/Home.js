import React from 'react'
import "../App.css"
import Navigation from './Sections/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Sections/landing';
import Footer from './Sections/Footer';
function Home() {
  return (
    <div className='home-page'>
        <Navigation />
        <Landing />
        <Footer/>
    </div>
  )
}

export default Home