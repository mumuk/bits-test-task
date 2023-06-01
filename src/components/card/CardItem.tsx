import React from 'react';
import { CardItemProps } from './types';
import AvailableIcon from './AvailableIcon';

function CardItem({ card }: CardItemProps) {
  return (
    <div className="card  product-card col-md-6 col-lg-3  p-0 border-0 hover-zoom ">
      <div className="card-body">
        <div className="card-img">
          <img src={card.image} alt={`${card.title}`} className=" img-fluid " />
        </div>
        <div className="d-flex justify-content-between">
          <span className="card-title ">{card.title}</span>
          <span className="card-title ">$$$</span>
        </div>
        <div className="">{card.description}</div>

        <div className="d-flex justify-content-between">
          {card.amount > 0 && (
            <div className="d-flex align-items-center">
              <AvailableIcon />
              <div className="col">Available Now {card.amount} Sf</div>
            </div>
          )}

          <div className="d-flex ms-auto me-0">
            <label
              htmlFor="compare"
              className="form-check-inline form-check-label me-1"
            >
              Compare
            </label>
            <input
              type="checkbox"
              className="form-check form-check-inline d-inline form-check-input m-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
