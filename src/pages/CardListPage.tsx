import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardList from '../components/card/CardList';
import URLS from '../api';

function CardListPage() {
  const [cards, setCards] = useState([]);
  const url = URLS.ROOT + URLS.CARDS;

  console.log();

  useEffect(() => {
    const fetchCards = async () => {
      const res = await fetch('http://127.0.0.1:3000/cards');

      const data = await res.json();
      setCards(data);
    };

    fetchCards();
  }, [url]);

  return (
    <div className="container">
      <p className="text-center fw-bold ">
        THE INNOVATION LEADER IN LUXURY VINYL PLANK
      </p>
      <h2 className="text-center display-5">Let` s Get Started</h2>
      <CardList cardList={cards} />
      <Link to="/feedbacks">to card list page</Link>
    </div>
  );
}

export default CardListPage;
