import React from 'react'
import "../App.css"
import Navigation from './Sections/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Sections/landing';
import Footer from './Sections/Footer';
import { useState, createContext } from 'react'
import Projects from './Sections/Projects';
import Navigation2 from './Sections/Nav2';
import { auth } from "../firebase-config"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import ParticlesBackground from '../Particles/ParticlesBackground';
import Contact from './Sections/Contact';
import Experience from './Sections/Experience';

export const AppContext = createContext();
const Home = (props) => {
  const[username, setUsername] = useState('');
  const[password,setPassword] = useState('');
  const[incorrectLogin, setIncorrectLogin] = useState(true)
  const navigate = useNavigate()

  const log = () => {
    signInWithEmailAndPassword(auth,username,password)
    .then(( ) => {
      props.setLogin(true)
      setIncorrectLogin(true)
      navigate('/addProject')
    }).catch(() => {
      setIncorrectLogin(false)
    })
  }
  const logout = () => {
    setUsername('')
    setPassword('')
    props.setLogin(false)
    setIncorrectLogin(true)
  }
  return (

    <div className='home-page'>
        <AppContext.Provider value={{setUsername, setPassword, incorrectLogin}}>
          <section id='landing-page'>
           {props.login?<Navigation2 logout = {logout}/>:<Navigation/>}
            <Landing />
          </section>
          <section id='projects-page'>
            <Projects/>
          </section>
          <section id='experience-page'>
            <Experience/>
          </section>
          <section id='contact-page'>
            <Contact/>
            <Footer log = {log}/>
          </section>
        </AppContext.Provider>
        <ParticlesBackground/>
        </div>

  )
}

export default Home