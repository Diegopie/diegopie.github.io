import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactCard from '../components/ContactCard';

const Contact = () => {
  

    return (
        <main className="container">
            <ContactForm/>
            <section class="row justify-content-center">
                <ContactCard
                    link="https://github.com/Diegopie"
                    src="/assets/img/git-hub.png"
                    alt="Logo for GitHub website"
                    title="Find Me On GitHub!"
                />
                <ContactCard
                    link="https://www.linkedin.com/in/diego-hernandez-7327381b2/"
                    src="/assets/img/linkdin-logo.png"
                    alt="Logo for LinkedIn website"
                    title="Find Me On LinkedIn!"
                />
                <ContactCard
                    link="assets/file/Resume_HernandezD.pdf"
                    src="/assets/img/nav-pic-01.jpg"
                    alt="My portfolio icon"
                    title="Download My Resume"
                />
            </section>
            
        </main>
    );
};

export default Contact;