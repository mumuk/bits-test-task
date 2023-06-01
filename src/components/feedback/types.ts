import IFeedback from '../../interfaces/IFeedback';

export type FeedbackItemProps = {
  card: IFeedback;
};

export type FeedbackListProps = {
  cardList: Array<IFeedback>;
};

export type StarRatingProps = {
  rating: number;
  reviews: number;
};
