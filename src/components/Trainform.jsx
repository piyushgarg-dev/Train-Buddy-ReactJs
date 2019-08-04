import React, { useState } from "react";

const Trainform = props => {
  const [fromStation, setfromStation] = useState("");

  const handelSubmit = e => {
    e.preventDefault();
    props.onTrainFormSubmit(fromStation);
  };

  const handelFromChange = e => {
    setfromStation(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div className="form-group">
          <label>Enter City:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Example: Patiala"
            value={fromStation}
            onChange={handelFromChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            className="form-control btn btn-success"
            value="Search"
          />
        </div>
      </form>
    </div>
  );
};

export default Trainform;
