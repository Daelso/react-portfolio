import React from 'react';
import '../styles/portfolio.css'

export default function Card(props) {
  const cardStyle = {
    width: '25rem',
    background: '#62b0a5',
    color: "white",
  };

  return (
    <div>

<div class="container">
  <div class="row">

    <div className="card w-50 mx-auto" style={cardStyle}>
        <img
          className="card-img-top"
          src={props.pic}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <div className="button-wrapper">
          <a href={props.link} target="_blank" rel="noreferrer" className="btn btn-dark">
            Github
          </a>
          &nbsp;
          <a href={props.deploymentLink} target="_blank" rel="noreferrer" className="btn btn-dark">
            Deployment
          </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

