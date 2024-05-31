import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';

const ContactForm = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                message: ''
            })
        } else {
            validator.showMessages();
        }
    };

    return (
        <section className="contact-page mb-30">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-11">
                        <form className="contact-form bg-light rmt-0" onSubmit={(e) => submitHandler(e)}>
                            <div className="section-title text-center mb-40">
                                <h2>DESCUBRE NUESTRO MUNDO</h2>
                            </div>
                            <div className="row clearfix">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input
                                            className='form-control'
                                            value={forms.name}
                                            type="text"
                                            name="name"
                                            onBlur={(e) => changeHandler(e)}
                                            onChange={(e) => changeHandler(e)}
                                            placeholder="Name" />
                                        {validator.message('name', forms.name, 'required|alpha_space')}
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input
                                            className='form-control'
                                            value={forms.email}
                                            type="email"
                                            name="email"
                                            onBlur={(e) => changeHandler(e)}
                                            onChange={(e) => changeHandler(e)}
                                            placeholder="Correo Electrónico" />
                                        {validator.message('email', forms.email, 'required|email')}
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea
                                            className='form-control'
                                            rows="4"
                                            onBlur={(e) => changeHandler(e)}
                                            onChange={(e) => changeHandler(e)}
                                            value={forms.message}
                                            type="text"
                                            name="message"
                                            placeholder="Mensaje">
                                        </textarea>
                                        {validator.message('message', forms.message, 'required')}
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <button type="submit" className="theme-btn mt-40">Enviar</button>
                                </div>
                            </div>
                            <div className="title-rotated">Contacto</div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;