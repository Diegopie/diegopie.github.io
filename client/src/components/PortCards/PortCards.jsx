import React from 'react';
import './PortCards.css';
import '../../index.css';

const PortCards = (props) => {


    return (
        <article className="col-auto col-md">
            <div className="App-card PortCards-Cont">
                {/* Card Image */}
                <img
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
                            <h4>Password Generator</h4>
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

