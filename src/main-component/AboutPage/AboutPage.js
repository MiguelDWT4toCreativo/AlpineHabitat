import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Navbar from '../../components/Navbar/Navbar'
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import About2 from '../../components/about2/about2';
import ServiceSection from '../../components/ServiceSection/ServiceSectionAbout';
import TeamSection from '../../components/TeamSection/TeamSection';
import ServiceSectionTeseo from '../../components/ServiceSection/ServiceSectionTeseo';


const AboutPage = () => {
    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Acerca de Nosotros'} pagesub={'Acerca de'} />
            <ServiceSection ptClass={'pt-100'}/>
            <ServiceSectionTeseo />
            <About2 />
            <TeamSection/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
