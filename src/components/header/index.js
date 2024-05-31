import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import Logo from '../../images/logoalpineh.png'



const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [SearchActive, setSearchState] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header className="main-header">
            <div className="header-top">
                <div className="container">
                    <div className="top-inner">
                        <div className="logo-outer">
                            <div className="logo"><Link onClick={ClickHandler} to="/"><img src={Logo} style={{width:"100px" }} alt="" /></Link></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-upper">
                <div className="container clearfix">

                    <div className="header-inner">

                        <div className="nav-outer clearfix">
                            <nav className="main-menu navbar-expand-lg">
                                <MobileMenu/>
                                <div className="navbar-collapse collapse clearfix">
                                    <ul className="navigation clearfix">
                                        <li className="current"><Link onClick={ClickHandler} to="/">Inicio</Link></li>
                                        <li><Link onClick={ClickHandler} to="/about">Acerca de</Link></li>
                                        <li><Link onClick={ClickHandler} to="/services">Servicios</Link></li>
                                        <li><Link onClick={ClickHandler} to="/blog">Blog</Link></li>
                                        <li><Link onClick={ClickHandler} to="https://teseodata.com/">Teseo DataLab</Link></li>
                                        <li><Link onClick={ClickHandler} to="/contact">Contacto</Link></li>
                                    </ul>
                                </div>

                            </nav>

                        </div>

                    </div>

                </div>
            </div>
            <div className={`sidebar-wrap ${menuActive ? "side-content-visible" : ""}`}>
                <div className="form-back-drop" onClick={() => setMenuState(!menuActive)}></div>
                <section className='hidden-bar'>
                    <div className="inner-box text-center">
                        <div className="cross-icon" onClick={() => setMenuState(!menuActive)}><span className="fa fa-times"></span></div>
                        <div className="title">
                            <h3>Get Appointment</h3>
                        </div>
                        <div className="appointment-form">
                            <form method="post" onSubmit={SubmitHandler}>
                                <div className="form-group">
                                    <input type="text" name="text" value="" placeholder="Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" value="" placeholder="Email Address" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="phone" value="" placeholder="Phone no." required />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Message" rows="5"></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="theme-btn">Submit now</button>
                                </div>
                            </form>
                        </div>
                        <div className="social-icons">
                            <Link to="/"><i className="fa fa-twitter"></i></Link>
                            <Link to="/"><i className="fa fa-facebook-f"></i></Link>
                            <Link to="/"><i className="fa fa-instagram"></i></Link>
                            <Link to="/"><i className="fa fa-pinterest-p"></i></Link>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Header;