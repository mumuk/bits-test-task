import React from 'react';
import { StarRatingProps } from './types';

function StarRating({ rating, reviews }: StarRatingProps) {
  console.log(rating);
  const starsArray = [];
  const makeRating = () => {
    for (let i = 1; i <= 5; i += 1) {
      let element;
      if (i <= rating) {
        element = <i className="bi bi-star-fill text-primary" key={i} />;
      } else {
        element = <i className="bi bi-star" key={i} />;
      }
      starsArray.push(element);
    }
    return starsArray;
  };

  return (
    <div className="row">
      <div className="ratings col-sm">{makeRating()}</div>
      <h5 className="review-count col-sm">{reviews} Reviews</h5>
    </div>
  );
}

export default StarRating;
