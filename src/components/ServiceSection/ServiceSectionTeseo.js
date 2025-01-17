import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../../api/ServicesAboutTeseo';
import Bg from '../../images/services/service-bg.jpg'




const ServiceSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className={`services-section rpt-100 pb-70 ${props.ptClass}`} style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="row">
                    {Services.slice(0,3).map((service, Sitem) => (
                        <div className="col-12" key={Sitem}>
                            <div className="service-item">
                                <span className="number">0{service.Id}</span>
                                <img src={service.sImg} alt="Icon" />
                                <h3><Link onClick={ClickHandler}>{service.sTitle}</Link></h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


export default ServiceSection;