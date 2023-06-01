export default interface IFeedback {
  id: string;
  productId: string;
  rating: number;
  createdAt: Date;
  createdBy: string;
  text: string;
  reviews: number;
}
