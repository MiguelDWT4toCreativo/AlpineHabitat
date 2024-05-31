import React from 'react'
import abimg from '../../images/wp/wp-3.png'


const About2 = (props) => {

    return (
        <section className="about-section">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-7">
                <div className="about-image mr-50 rmr-0">
                    <div className="data-driven-focus">
                        <span className="number">01</span>
                        <h4>Innovación y Tecnología</h4>
                    </div>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="wp-content about-content mb-10 ml-50 pt-100 rmb-50">
                    <div className="section-title mb-10">
                        <h6>INNOVACIÓN INMOBILIARIA</h6>
                        <h2>Datos y Análisis <br />
                            <span>para un Futuro</span> <br />
                            <span className="thin">Inmobiliario Sostenible</span>
                        </h2>
                        <h6>Explora Alpine Habitat</h6>
                    </div>
                    <img src={abimg} alt="" />
                </div>
            </div>
        </div>
    </div>
</section>
   )
}

export default About2;