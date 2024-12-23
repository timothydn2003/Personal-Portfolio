import React, { useEffect } from 'react'
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
import About from './Sections/About';
import logo from "../../src/Icons/newLogo.png"
import AOS from "aos";
import "aos/dist/aos.css";

export const AppContext = createContext();
const Home = (props) => {
  const[username, setUsername] = useState('');
  const[password,setPassword] = useState('');
  const[incorrectLogin, setIncorrectLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(true);

  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    AOS.init();
    AOS.refresh();
    return () => clearTimeout(timer);
  }, []);

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
    <div>
      {isLoading ? (
        <div className='loading-page'>
            <img className= "logo" src={logo}/>

        </div>
      ) : (
        <div className="home-page"  data-aos="fade-in">
          <AppContext.Provider value={{ setUsername, setPassword, incorrectLogin }}>
            <section id="landing-page">
              {props.login ? <Navigation2 logout={logout} /> : <Navigation />}
              <Landing />
            </section>
            <section id="about-page">
              <About />
            </section>
            <section id="projects-page">
              <Projects />
            </section>
            <section id="contact-page">
              <Contact />
              <Footer log={log} />
            </section>
          </AppContext.Provider>
          <ParticlesBackground />
        </div>
      )}
    </div>


  )
}

export default Home