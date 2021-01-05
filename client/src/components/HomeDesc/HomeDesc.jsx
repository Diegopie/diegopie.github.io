import React from 'react';
import './HomeDesc.css';
import '../../index.css';

const HomeDesc = () => {
    return (
        <>
            <h1 className="row text-center justify-content-center App-Spacer">I Am What I Am - Becoming a Web Developer</h1>

            {/* main-image, styled as an aside on md screens */}
            <section className="row justify-content-center">
                <aside className="col-auto col-lg-12 offset-lg-8">
                    <div className="App-card App-Spacer">
                        <img src="/assets/img/main-image-01.jpg" className="card-img-top" alt="A very handsome web developer smiles. He dons a black dress shirt, complimented by a black tie"/>
                    </div>
                </aside>
                {/* Personal info paragraphs */}
                <p className="col-xs-auto col-lg-4 HomeDesc-Text" >
                            As a human who has only existed in the age of the computer, I spend a lot of my time on the internet. As a youngling I was always curious about how things worked and tried to find different ways to express myself. This led me to dabble in video editing, photography, illustration, and writing. I wanted to find a way to express all my creative outlets in a single space, so it was only natural that I would attempt to get a degree in Web Design through the Art Institute.
                </p>
                <p className="col-xs-auto col-lg-4 HomeDesc-Text">
                            But nothing is ever so simple and I was forced to drop out one week in. While this did allow me to gain valuable skills in the workforce, that curiosity never left and the yearning to create lingered. A coworker showed me a bootcamp hosted by the University of Utah Professional Education department. I figured Destiny 2 could take a break and leapt into bootcamp crucible.
                </p>
                <p className="col-xs-auto col-lg-4 HomeDesc-Text">
                            This webpage will continue to evolve as my skills do. My hope is for this to be a personal barometer of encouragement to show how far I have come as this bootcamp tries its’ best to beat me down.
                </p>
            </section>
        </>
    );
};

export default HomeDesc;

