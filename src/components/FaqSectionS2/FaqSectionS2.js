import React, { useState } from 'react';
import fImg from '../../images/faq/faq-right-bg.png'
import fImg1 from '../../images/services/img1.png'
import fImg2 from '../../images/services/img2.png'

import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const FaqSectionS2 = (props) => {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        setOpen(open === id ? null : id);
    };

    return (
        <section className="faq-section mt-150">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 pr-125 rpr-15">
                        <div className="service-page-images rmb-150">
                            <img src={fImg1} alt="Services"/>
                            <img src={fImg2} alt="Service"/>
                        </div>
                    </div>
                    <div className="col-lg-6 pl-0">
                        <div className="faq-accordion ras-content pt-95 pb-110 rpb-0 rmb-100">
                            <div className="section-title mb-35">
                                <h6>Preguntas Frecuentes</h6>
                                <h2>Conoce Más Sobre<br/><span className="thin">Alpine Habitat</span></h2>
                            </div>
                            <div id="accordion">
                                <Accordion open={open} toggle={toggle}>
                                    <AccordionItem className='card'>
                                        <AccordionHeader targetId="1" className='card-header'>¿Cómo optimiza Alpine Habitat las propiedades?</AccordionHeader>
                                        <AccordionBody accordionId="1">
                                            Utilizamos análisis de mercado detallados para sugerir mejoras estratégicas que aumenten el valor y el atractivo de tus propiedades.
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem className='card'>
                                        <AccordionHeader targetId="2" className='card-header'>¿Qué estrategias de marketing digital utiliza Alpine Habitat?</AccordionHeader>
                                        <AccordionBody accordionId="2">
                                            Implementamos campañas de marketing digital personalizadas, incluyendo SEO y anuncios, para conectar propiedades con compradores ideales.
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem className='card'>
                                        <AccordionHeader targetId="3" className='card-header'>¿Qué tipo de consultoría inmobiliaria ofrece Alpine Habitat?</AccordionHeader>
                                        <AccordionBody accordionId="3">
                                            Ofrecemos asesoramiento estratégico basado en datos para ayudarte a tomar decisiones de inversión informadas y efectivas.
                                        </AccordionBody>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                        <div className="faq-right-bg">
                            <img src={fImg} alt="FAQ" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqSectionS2;
