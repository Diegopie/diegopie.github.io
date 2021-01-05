import React from 'react';
import './HomeCards.css';
import '../../index.css';

const HomeCards = (props) => {
    return (        
        <article className="col-auto">
            <div className="App-card App-Spacer HomeCards-ImgCont">
                <img
                    className="card-img-top"
                    src={props.src}
                    alt={props.alt}
                />
                <div className="card-body">
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
        </article>
        
    );
};

export default HomeCards;

