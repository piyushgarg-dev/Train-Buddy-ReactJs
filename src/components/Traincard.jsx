import React, { useState } from "react";

const Traincard = ({
  to,
  number,
  name,
  from,
  departTime,
  arrivalTime,
  classes
}) => {
  const styleImage = {
    background: "linear-gradient(to right, #61045F, #AA076B)",
    borderRadius: "20px"
  };
  return (
    <div className="card-image mt-2" style={styleImage}>
      <div className="text-white d-flex h-100 mask blue-gradient-rgba">
        <div className="first-content align-self-center p-3">
          <h3 className="card-title">
            {name}-{number}
          </h3>
          <p className="lead mb-0">
            From: {from} <span className="ml-5" /> To: {to}
          </p>
          <p className="lead mb-0">
            Dep: {departTime} <span className="ml-5" /> Arr: {arrivalTime}
          </p>
        </div>
        <div className="second-content align-self-center mx-auto text-center">
          <i className="far fa-money-bill-alt fa-3x" />
        </div>
      </div>
    </div>
  );
};

export default Traincard;
