import React from 'react'
import Navbar from './Navbar'
import home_image from "./images/home.svg"
import AboutComp from './AboutComp'
import Footer from './Footer'

const Home = () => {
  return (
    <div id='RootPage'>
      <Navbar/>
      <main>
        <section id="home">
            <div className="home_head">
                <h1>The Light-weight Editor to build your <span>front-end code</span> easily.</h1>
                <h5> <span>CodeKaro</span>  is provides environment for front-end designers and developers. Build a website with user-friendly environment and without Signup.</h5>
                <a href='#about'>
                  <button className='custom-btn btn-16'>Explore More</button>
                </a>
            </div>
            <div className="home_image">
                <img className='homeImage' src={home_image} alt="logo" />
            </div>
        </section>

        <section id='about'>
          <AboutComp title="Build Easily" text="Get work done quicker by building out entire projects and Easy environment to write a code."/>
          <AboutComp title="Build Entire Projects" text="Projects is the most powerful feature of CodeKaro. It's a full blown IDE right in the browser, with automatic preprocessing, live previews and much more"/>
          <AboutComp title="Code Suggestion and Collapse" text="Automatic code suggestions are done in every language and also collapse feature are there."/>
        </section>
        <section id='news'>
          <h1>Get Our News :</h1>
          <ul className='newsLists'>
            <li className='list'>
              <h3>More Features coming soon!!</h3>
            </li>
            <li className='list'>
              <h3>Compiler for CPP,JAVA,PYTHON coming soon!!</h3>
            </li>
          </ul>
        </section>
        <Footer/>
      </main>
      
    </div>
  )
}

export default Home
