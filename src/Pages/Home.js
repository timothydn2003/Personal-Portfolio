import React from 'react'
import "../App.css"
import Navigation from './Sections/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Sections/landing';
import Footer from './Sections/Footer';
import { useState, createContext } from 'react'
import Projects from './Sections/Projects';
import Navigation2 from './Sections/Nav2';

export const AppContext = createContext();
const Home = (props) => {
  const[username, setUsername] = useState('');
  const[password,setPassword] = useState('');

  const log = () => {
    props.setLogin(true)
  }
  const logout = () => {
    setUsername('')
    setPassword('')
    props.setLogin(false)
  }
  return (
    <div className='home-page'>
        <AppContext.Provider value={{setUsername, setPassword}}>
          <section id='landing-page'>
           {props.login?<Navigation2 logout = {logout}/>:<Navigation/>}
            <Landing />
          </section>
          <section id='projects-page'>
            <Projects/>
          </section>
          <section id='contact-page'>
            <Footer log = {log}/>
          </section>
        </AppContext.Provider>
    </div>
  )
}

export default Home