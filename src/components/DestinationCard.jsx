import React from "react";

const DestinationCard = ({ data }) => {
  return (
    <div className="card">
      <img src={data.image} alt={data.name} className="card-image" />
      <div className="card-content">
        <h2>{data.name}</h2>
        <h3>{data.location}</h3>
        <p>{data.description}</p>
        <p className="price">{data.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
