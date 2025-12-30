import { safeFetch } from "@/features/lib/apiClient";
import { Feedback, FeedbackCreate } from "../types/feedbackTypes";

// Get All Feedbacks

export async function getAllFeedbacks(): Promise<Feedback[]> {
  return safeFetch<Feedback[]>("api/feedback/all", {
    method: "GET",
  });
}

// Post Feedback

export async function postFeedback(
  data: FeedbackCreate
): Promise<FeedbackCreate> {
  return safeFetch<FeedbackCreate>("api/feedback", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

// Show Single Feedback

export async function singleFeedback(feedbackId: string): Promise<Feedback> {
  return safeFetch<Feedback>(`api/feedback/${feedbackId}`, {
    method: "GET",
  });
}

// Update All Feedbacks

export async function updateFeedback(
  feedbackId: string,
  data: Partial<Feedback>
): Promise<Feedback> {
  return safeFetch<Feedback>(`api/feedback/${feedbackId}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}

// Delete Feedback

export async function deleteFeedback(feedbackId: string): Promise<Feedback> {
  return safeFetch<Feedback>(`api/feedback/${feedbackId}`, {
    method: "DELETE",
  });
}
