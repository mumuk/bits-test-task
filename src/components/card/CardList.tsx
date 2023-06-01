import React from 'react';
import { CardListProps } from './types';
import CardItem from './CardItem';

function CardList({ cardList }: CardListProps) {
  const selectItem = (id) => {};
  return (
    <div className=" row gx-2">
      {cardList.map((item) => (
        <CardItem onSelect={selectItem} card={item} key={item.id} />
      ))}
    </div>
  );
}

export default CardList;
