import React from 'react'
import { Link } from 'react-router-dom'
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Bg from '../../images/footer.png'
import pImg1 from '../../images/instagram/instagram1.png'
import pImg2 from '../../images/instagram/instagram2.png'
import pImg3 from '../../images/instagram/instagram3.png'
import pImg4 from '../../images/instagram/instagram4.png'
import pImg5 from '../../images/instagram/instagram5.png'
import pImg6 from '../../images/instagram/instagram6.png'


const images = [
    pImg1,
    pImg2,
    pImg3,
    pImg4,
    pImg5,
    pImg6,
]

const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [open, setOpen] = React.useState(false);

    return (
        <div>
            <footer className="footer-section pt-220" style={{ backgroundImage: `url(${Bg})` }}>
                <div className="container">
                    <div className="row align-items-center">
                        {/* Sección del Menú de Navegación */}
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-menu">
                                <h3>Secciones </h3>  {/* Encabezado para el menú de secciones */}
                                <ul>
                                    <li><Link to="/" style={{ color: 'white' }}>Inicio</Link></li>
                                    <li><Link to="/about" style={{ color: 'white' }}>Acerca de</Link></li>
                                    <li><Link to="/services" style={{ color: 'white' }}>Servicios</Link></li>
                                    <li><Link to="https://teseodata.com/" style={{ color: 'white' }}>TeseoDataLab</Link></li>
                                    <li><Link to="/blog" style={{ color: 'white' }}>Blog</Link></li>
                                    <li><Link to="/contact" style={{ color: 'white' }}>Contacto</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-4">
                            <div className="contact-widget">
                                <h3>Contacto</h3>
                                <h6>Descubre el futuro del residencial de lujo con Alpine Habitat. Innovación y tecnología al servicio de tu nuevo hogar.</h6>
                                <h6>Pachuca de Soto, Hidalgo, Mx. Telefono: 55 6219 3450</h6>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom mt-55">
                <div className="container">
                    <div className="bottom-inner">
                    <div className="copyright">
                            <p>© Todos los derechos reservados 2024 por <Link onClick={ClickHandler} to="/">Alpine Habitat</Link></p>
                        </div>
                        <div className="privacy-policy">
                            <Link onClick={ClickHandler} to="https://teseodata.com/politicas-de-privacidad/"  style={{ color: 'white' }}>Política de Privacidad</Link>
                        </div>
                        <div className="social-icons">
                            <Link onClick={ClickHandler} to="https://www.facebook.com/profile.php?id=61557041233808"><i className="fa fa-facebook"></i></Link>
                            <Link onClick={ClickHandler} to="https://www.instagram.com/habitat_alpine/"><i className="fa fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
                </div>

                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={[
                        { src: pImg1 },
                        { src: pImg2 },
                        { src: pImg3 },
                        { src: pImg4 },
                        { src: pImg5 },
                        { src: pImg6 },
                    ]}
                    plugins={[Zoom]}
                />
            </footer>
        </div>
    )
}

export default Footer;