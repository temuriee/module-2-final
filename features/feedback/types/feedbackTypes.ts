export type FeedbackStatus = "pending" | "reviewed" | "resolved";

export type Feedback = {
  _id: string;
  name: string;
  email: string;
  message: string;
  rating: number;
  status: FeedbackStatus;
};

export type FeedbackCreate = {
  name: string;
  email: string;
  message: string;
  rating?: string;
};
