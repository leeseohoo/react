import React from 'react';
import Nav from "./nav/Nav";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
import Footer from "./footer/Footer";

function Home() {
    return (
        <div>
            <Nav/>
            <Section1/>
            <Section2/>
            <Footer/>
        </div>
    );
}

export default Home;