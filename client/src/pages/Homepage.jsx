import React from 'react';
import HomeDesc from '../components/HomeDesc';
import HomeCards from '../components/HomeCards';
import '../index.css';

const Homepage = () => {
    return (
        <main className='container'>
            <section>
                <HomeDesc/>
                <section className="row justify-content-center">
                    <HomeCards
                        src="/assets/img/secCards-image-01.jpg"
                        alt="Web developer Diego Hernandez poses while he is rock climbing"
                        text="On a random Thursday of March 2020, a friend and I decided to take an impromptu trip to St George, Ut for the sole purpose of building a PC for one of our colleagues. The mission was successful and we threw in some rock climbing for fun."
                    />
                    <HomeCards
                        src="/assets/img/secCards-image-02.1.png"
                        alt="My Destiny 2 character poses with majestic robes"
                        text="I have spent many, many, many, hours playing Destiny. Our clan is named MTY Morphin Power Rangers and I take the role of the Yellow Ranger. I do not have a main per se, but I always do new content on my warlock first."
                    />
                </section>
            </section>
        </main>
    );
};

export default Homepage;