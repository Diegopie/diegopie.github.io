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
                {/* Proj 03 */}
                <PortCards
                    // IMG
                    src="/assets/img/portfolio/rng-still.png"
                    alt="Gif demonstrating a user creating a secure password"
                    animate="/assets/img/portfolio/rng-animate.gif"
                    still="/assets/img/portfolio/rng-still.png"
                    state="still"
                    // Text
                    site="https://diegopie.github.io/random-password-generator"
                    title="Password Generator"
                    text="This application allows users to quickly generate a secure password. Users are allowed to customize the length and character types that appears in their password"
                    git="https://github.com/Diegopie/random-password-generator"
                />
                {/* Proj 02 */}
                <PortCards
                    // IMG
                    src="/assets/img/portfolio/calendar-still.png"
                    alt="Gif demonstrating a user creating a secure password"
                    animate="/assets/img/portfolio/calendar-animate.gif"
                    still="/assets/img/portfolio/calendar-still.png"
                    state="still"
                    // Text
                    site="https://diegopie.github.io/local-weather-forecast"
                    title="Local Weather Forecast"
                    text="This site utilizes OpenWeather API to allow users to search for local weather conditions for most US cities"
                    git="https://github.com/Diegopie/local-weather-forecast"
                />
                {/* Proj 03 */}
                <PortCards
                    // IMG
                    src="/assets/img/portfolio/qrcodes-still.png"
                    alt="Gif demonstrating a user submitting event details to generate a QR code calendar invite"
                    animate="/assets/img/portfolio/qrcodes-animate.gif"
                    still="/assets/img/portfolio/qrcodes-still.png"
                    state="still"
                    // Text
                    site="https://diegopie.github.io/QR-aid-Codes"
                    title="QR-aid Codes"
                    text="I had three amazing collaborators to create this application. The site allows users to search for their favorite video game and create a shareable calendar event to schedule play sessions"
                    git="https://github.com/Diegopie/QR-aid-Codes"
                />
                {/* Proj 04 */}
                <PortCards
                    // IMG
                    src="/assets/img/portfolio/among-still.png"
                    alt="Gif demonstrating playing a randomly generated quiz and saving it with the Create A Quiz page"
                    animate="/assets/img/portfolio/among-animate.gif"
                    still="/assets/img/portfolio/among-still.png"
                    state="still"
                    // Text
                    site="https://the-smartest-amoung-us.herokuapp.com"
                    title="The Smartest Among Us"
                    text="This site allows users to play randomly generated quizzes, save and edit quizzes, and share their quizzes with friends to create a compete in private leader-boards"
                    git="https://github.com/Diegopie/The-Smartest-Among-Us"
                />
            </section>
        </main>
    );
};

export default Portfolio;