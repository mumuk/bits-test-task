import { ICard } from '../../interfaces/ICard';

export type CardItemProps = {
  onSelect: (id: string) => void;
  card: ICard;
};

export type CardListProps = {
  cardList: Array<ICard>;
};
