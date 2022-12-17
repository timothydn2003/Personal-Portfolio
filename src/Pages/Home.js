import React from 'react'
import "../App.css"
import Navigation from './Sections/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Sections/landing';
import Footer from './Sections/Footer';
import { useState, createContext } from 'react'

export const AppContext = createContext();
function Home() {
  const[username, setUsername] = useState('');
  const[password,setPassword] = useState('');

  const log = () => {
    console.log(username)
    console.log(password)

  }
  return (
    <div className='home-page'>
        <AppContext.Provider value={{setUsername, setPassword}}>
          <Navigation />
          <Landing />
          <Footer log = {log}/>
        </AppContext.Provider>
    </div>
  )
}

export default Home