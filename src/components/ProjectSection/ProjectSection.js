import React from 'react'
import Projects from '../../api/Projects'
import { Link } from 'react-router-dom'


const ProjectSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="apartment-section text-center mb-155">
            <div className="container">
                <div className="section-title mb-75">
                    <h2>Creando Espacios <span className="thin">que Inspiran</span></h2>
                    <p>Un enfoque personalizado para la excelencia inmobiliaria</p>
                </div>
                <div className="apartment-carousel">
                    <div className="row">
                    {Projects.slice(0, 3).map((project, i) => (
                        <div className="col col-lg-4 col-md-6 col-12" key={i}>
                            <div className="apartment-item">
                                <div className="apartment-img">
                                    <img src={project.pImg} alt="Apartment" />
                                </div>
                                <div className="apartment-content">
                                    <img src={project.ssIcon} alt="Icon" />
                                    <h3><Link onClick={ClickHandler} >{project.pTitle}</Link></h3>
                                    <p>{project.des} </p>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection;