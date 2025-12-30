import { useMutation } from "@tanstack/react-query";
import { postFeedback } from "../api/feedbackApi";
import { FeedbackInputs } from "../schemas/feedbackSchema";

export function usePostFeedbacks() {
  return useMutation({
    mutationFn: (data: FeedbackInputs) => postFeedback(data),
  });
}
