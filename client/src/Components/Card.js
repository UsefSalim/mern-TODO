import React, { Fragment } from "react";

const Card = ({ cardInfo }) => {
  // console.log(cardInfo)
  return (
    <Fragment key={cardInfo._id} >
      <div className="card">
        <h2>{cardInfo.name}</h2>
        <p>
          {cardInfo.description}
        </p>
        <button className="btn card__btn" ><span>Click!</span><span>Read More</span></button>
      </div>
    </Fragment>
  );
};

export default Card;
