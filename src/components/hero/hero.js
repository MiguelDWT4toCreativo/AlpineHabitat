import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import hImg from '../../images/alpineportada.png'

const Hero = () => {
    return (
        <section className="hero-section text-center mt-110 rmt-70"  style={{ backgroundImage: `url(${hImg})` }}>
            <div className="container">
                <div className="hero-content">
                    <h1 className="text-bold text-white">Alpine Habitat <br/> Bienes Raíces</h1>
                    <h1 className="text-lighter">Revolucionando el mercado inmobiliario residencial </h1>
                    <AnchorLink href='#about' className="scroll-down scroll">
                        <div className="scroll-box"></div>
                    </AnchorLink>
                </div>
            </div>
        </section>
    )
}



export default Hero;