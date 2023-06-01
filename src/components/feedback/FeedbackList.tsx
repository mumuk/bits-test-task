import React from 'react';
import { FeedbackListProps } from './types';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedbackList }: FeedbackListProps) {
  return (
    <div>
      {feedbackList.map((item) => (
        <FeedbackItem feedback={item} key={item.id} />
      ))}
    </div>
  );
}

export default FeedbackList;
