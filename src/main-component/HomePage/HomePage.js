import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Scrollbar from '../../components/scrollbar/scrollbar';
import Hero from '../../components/hero/hero';
import About from '../../components/about/about';
// import FunFact from '../../components/FunFact';
// import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import ResturantSec from '../../components/ResturantSec/ResturantSec';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import ServiceSectionCTA from '../../components/ServiceSection/ServiceSectionCTA';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'header-style-3'} topbarNone={'topbar-none'} />
            <Hero />
            <ServiceSectionCTA/>
            <About />
            <ServiceSection ptClass={'pt-250'}/>
            <ResturantSec />
            <ProjectSection />
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>

    )
};
export default HomePage;