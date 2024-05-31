import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../../api/CTA';
import Bg from '../../images/services/service-bg.jpg';
import raffleImage from '../../images/services/Freidora.jpg';

const ServiceSectionCTA = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className={`services-section rpt-100 pb-70 ${props.ptClass}`} style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="row">
                    {Services.slice(0,3).map((service, Sitem) => (
                        <div className="col-12" key={Sitem}>
                            <div className="service-item">
                                <span className="number">0{service.Id}</span>
                                <div className="service-item-image">
                                    <img src={raffleImage} alt="Raffle Item" style={{ maxWidth: '50px' }} /> {/* Ajusta el maxWidth según tus necesidades */}
                                </div>
                                <h3><Link onClick={ClickHandler}>{service.sTitle}</Link></h3>
                                <p>{service.description}</p>
                                {/* A continuación, se añade la imagen del artículo a rifar */}
                                <div className="service-item-image " style={{ textAlign: 'center' }}>
                                    <img src={raffleImage} alt="Raffle Item" style={{ maxWidth: '1000px',  textAlign: 'center'  }} />
                                </div>
                                <p>{service.description2}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSectionCTA;
