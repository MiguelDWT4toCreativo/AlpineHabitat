import React from 'react';
import ContactForm from '../ContactFrom'
import sIcon1 from '../../images/contact/icon1.png'
import sIcon2 from '../../images/contact/icon2.png'
import sIcon3 from '../../images/contact/icon3.png'


const Contactpage = () => {

    return (
        <div>
            <div class="contact-map" id="map">
            <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127627.53672234975!2d-98.852284776339!3d20.085781882972725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a7716f1e038b%3A0x13315c101496b749!2sPachuca%20de%20Soto%2C%20Hgo.!5e0!3m2!1ses!2smx!4v1711146159207!5m2!1ses!2smx" 
  width="600" 
  height="450" 
  style={{ border: '0' }} 
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade">
</iframe>                        </div>
            <div className="contact-info text-center mb-110">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="info-item">
                            <img src={sIcon1} alt="Icon"/>
                                <p>Pachuca de Soto, Hidalgo <br/> Dirección </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="info-item">
                            <img src={sIcon2} alt="Icon"/>
                                <p>alpinehabitat@datalpine.mx <br/>Correo Electrónico</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="info-item">
                            <img src={sIcon3} alt="Icon"/>
                                <p>771 330 64 07 <br/>Teléfono</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactForm/>
        </div>
    )

}

export default Contactpage;
