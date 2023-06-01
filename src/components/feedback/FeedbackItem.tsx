import React from 'react';
import { FeedbackItemProps } from './types';
import StarRating from './StarRating';

function FeedbackItem({ feedback }: FeedbackItemProps) {
  return (
    <div className="box mt-1 border-bottom border-3 py-5 px-sm-2">
      <p className="h3">{feedback.createdBy}</p>
      <p>{feedback.createdAt.toLocaleString()}</p>
      <StarRating rating={feedback.rating} reviews={feedback.reviews} />
      <div>{feedback.text}</div>
    </div>
  );
}

export default FeedbackItem;
