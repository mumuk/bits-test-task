import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FeedbackList from '../components/feedback/FeedbackList';
import FeedbackForm from '../components/feedback/FeedbackForm';
import URLS from '../api';

function FeedbacksPage() {
  const [feedbacks, setFeedbacks] = useState([]);
  const url = URLS.ROOT + URLS.FEEDBACKS;

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const res = await fetch(url);
      console.log(res);
      const data = await res.json();
      console.log(data);
      setFeedbacks(data);
    };
    fetchFeedbacks();
  }, []);

  return (
    <div className="container w-75 bg-secondary py-4 px-5">
      <Link to="/">To card list widget</Link>
      <div>
        <FeedbackList feedbackList={feedbacks} />

        <FeedbackForm />
      </div>
    </div>
  );
}

export default FeedbacksPage;
