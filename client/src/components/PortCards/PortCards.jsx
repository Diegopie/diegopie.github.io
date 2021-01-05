import React from 'react';
import './PortCards.css';
import '../../index.css';

const PortCards = (props) => {
    let previousClick;

    const someFunc = (e) => {
        e.preventDefault();
        const gifContain = document.querySelectorAll('.PortCards-Img');
        console.log(gifContain);
        for (let i = 0; i < gifContain.length; i++) {
            // *** Set src Value to data-still Value
            gifContain[i].setAttribute('data-state', 'still');
            gifContain[i].setAttribute('src', gifContain[i].getAttribute('data-still'));
        }

        const target = e.target;
        if (previousClick === target) {
            previousClick = undefined;
            return;
        }

        previousClick = target;

        target.setAttribute('data-state', 'animate');
        target.setAttribute('src', target.getAttribute('data-animate')); 

        console.log(e.target);

    };

    return (
        <article className="col-auto col-md">
            <div className="App-card PortCards-Cont">
                {/* Card Image */}
                <img
                    onClick={someFunc}
                    className="card-img-top PortCards-Img"
                    src={props.src}
                    title="Click to animate"
                    alt={props.alt}
                    data-animate={props.animate}
                    data-still={props.still}
                    data-state={props.state}
                />
                {/* Card Text Content */}
                <article className="card-body">
                    <div className="PortCards-Text">
                        <a href={props.site} target="_blank" rel="noreferrer">
                            <h4>{props.title}</h4>
                        </a>
                        <p className="card-text">{props.text}</p>
                    </div>
                    <div className="PortCards-Icon">
                        <a href={props.git} title="View on GitHub" target="_blank" rel="noreferrer">
                            <img
                                src="/assets/img/git-hub.png"
                                className="card-img-top PortCards-Git"
                                alt="Logo for GitHub website"
                            />
                        </a>
                    </div>
                </article>
            </div>
        </article>

    );
};

export default PortCards;

