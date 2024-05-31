import React from 'react'
import Bg from '../../images/team/team-bg.png'
import team1 from '../../images/team/team1.png'
import team2 from '../../images/team/team2.png'
import team3 from '../../images/team/team3.png'


const TeamSection = (props) => {

    return (
        <section className="team-section mb-240" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="team-wrap">
                <div className="container">
                    <div className="section-title text-white text-center mb-55">
                        <h2>Lo que <span className="thin">dicen nuestros clientes</span></h2>
                        <h6>testimonios reales</h6>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="team-item"  >
                                <img src={team1} alt="Team"/>
                                <div className="team-des">
                                    <h3>Gerardo Gonzalez</h3>
                                    <span>Alpine Habitat ha revolucionado mi perspectiva sobre el valor inmobiliario. Su enfoque detallado para la optimización de propiedades ha maximizado mi inversión de manera inesperada. </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team-item">
                                <img src={team2} alt="Team"/>
                                <div className="team-des">
                                    <h3>Lucia Segovia</h3>
                                    <span>Encontrar la propiedad adecuada es solo el principio; Alpine Habitat transforma cada espacio con innovaciones que realmente responden a lo que los compradores buscan hoy en día.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team-item">
                                <img src={team3} alt="Team"/>
                                <div className="team-des">
                                    <h3>Roberto Castillo</h3>
                                    <span>
                                    Como desarrollador, confío en Alpine para identificar las tendencias del mercado. Su asesoramiento personalizado me ha permitido dirigirme a segmentos del mercado que antes no había contemplado.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection;
