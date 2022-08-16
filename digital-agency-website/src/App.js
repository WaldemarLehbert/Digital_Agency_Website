import React from "react";
import './App.css';
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
    return (
    <React.Fragment>
        <Header navItem1={"Home"}
                navItem2={"Services"}
                navItem3={"Our Project"}
                navItem4={"About us"}
        />
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
    </React.Fragment>
    );
}

export default App;
