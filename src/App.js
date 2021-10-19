import React from 'react';
import {Helmet} from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Router } from "@reach/router";
// import AOS from 'aos'
import 'aos/dist/aos.css';
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Mission from "./components/mission";
import About from "./components/about";
import Contact from "./components/contactus";
import Practice from './components/practice';
// import Footer from './components/footer';
import './App.css';
import './assets/css/navbar.scss';
import './assets/css/hero.css';
import './assets/css/mission.scss';
import "./assets/css/about_card.scss"
import "./assets/css/contact.css"
import './assets/js/navbar.js';
import "./assets/css/practice.css"
import "./assets/css/footer.css"
import "./assets/css/responsive.css"



function App() {

    return (
        <div>
            <Helmet>
                <script src="./assets/js/navbar.js"/>
            </Helmet>
            <Navbar/>
            <Hero/>
            <About/>
            <Practice/>
            <Mission/>
            <Contact/>
            {/* <Footer/> */}
        </div>
    );
}

export default App;
