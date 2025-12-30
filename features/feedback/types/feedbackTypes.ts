export type Feedback = {
  _id: string;
  name: string;
  email: string;
  message: string;
  rating: number;
};

export type FeedbackCreate = {
  name: string;
  email: string;
  message: string;
  rating?: string;
};
