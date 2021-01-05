import React from 'react';
import PortCards from '../components/PortCards';

const Portfolio = () => {
    

    return (
        <main className="container">
            <section className="row justify-content-center">
                <h1 className="col-12 text-center">My Projects</h1>
                <p className="col center">As a student, I am excited to learn and grow as a web developer. Here I will share the projects that I create in and out of school.</p>
            </section>
            <section className="row justify-content-center">
                <PortCards
                    // IMG
                    src="/assets/img/portfolio/rng-still.png"
                    alt="Gif demonstrating a user creating a secure password"
                    animate="/assets/img/portfolio/rng-animate.gif"
                    still="/assets/img/portfolio/rng-still.png"
                    state="still"
                    // Text
                    site="https://diegopie.github.io/random-password-generator"
                    text="This application allows users to quickly generate a secure password. Users are allowed to customize the length and character types that appears in their password"
                    git="https://github.com/Diegopie/random-password-generator"
                />
            </section>
        </main>
    );
};

export default Portfolio;