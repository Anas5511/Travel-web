import React from 'react'
import './app.css'
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import Popular from './Components/Popular/Popular'
import Offer from './Components/Offer/Offer'
import About from './Components/About/about'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'

const App = () => {
 return(
    <>
    <Nav/>
    <Home/>
    <Popular/>
    <Offer/>
     <About/>
     <Blog/>
     <Footer/>
    </>
 )
}
export default App;