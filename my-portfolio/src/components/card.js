import React from 'react';
import '../styles/portfolio.css'

export default function Card(props) {
  const cardStyle = {
    width: '25rem',
    background: '#62b0a5',
    color: "white"
  };

  return (
    <div>

<div class="container">
  <div class="row">
    <div class="col">
    <div className="card w-50 mx-auto" style={cardStyle}>
        <img
          className="card-img-top"
          src={props.pic}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <a href={props.link} className="btn btn-dark">
            Github
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
  );
}

