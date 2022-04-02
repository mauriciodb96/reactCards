import React from "react";

function Card({ title, imgURL }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imgURL} alt="main img" className="card-img-top" />
      </div>

      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words.
        </p>
        <a href="#!" className="btn btn-outline-secondary">
          Visit website
        </a>
      </div>
    </div>
  );
}

export default Card;
