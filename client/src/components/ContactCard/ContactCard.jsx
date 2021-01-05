import React from 'react';
import './ContactCard.css';
import '../../index.css';

const ContactCard = (props) => {

    return (
        <article className="col-auto">
            <div className="App-card">
                <a href={props.link} target="_blank" rel="noreferrer">
                    <img
                        src={props.src}
                        className="card-img-top cont-img"
                        alt={props.alt}
                    />
                    <div className="card-body">
                        <h4>{props.title}</h4>
                    </div>
                </a>
                
            </div>
        </article>

    );
};

export default ContactCard;

