import React from 'react';
import './ContactForm.css';
import '../../index.css';

const ContactForm = () => {

    const modal = (e) => {
        e.preventDefault();
        console.log('hit');
    };

    return (
        <section className="row justify-content-center">
            {/* Lead Text */}
            <h1 className="col-12 text-center">Contact Me</h1>
            {/* Form */}
            <form className="col-10">
                {/* User Email */}
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" className="form-control" placeholder="email@example.com"/>
                </div>
                {/* User name */}
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" placeholder=""/>
                </div>
                {/* Text area */}
                <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control" rows="3"
                        placeholder="This button may or may not do anything. It's more on the may not side.. Please reach me at diegopie@outlook.com"></textarea>
                </div>
                <div className="ContactForm-Button">
                    <button onClick={modal} type="button" className="btn btn-block">Send</button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;

