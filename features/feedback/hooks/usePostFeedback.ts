import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postFeedback } from "../api/feedbackApi";
import { FeedbackInputs } from "../schemas/feedbackSchema";

export function usePostFeedbacks() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: FeedbackInputs) => postFeedback(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["feedback"] });
    },
  });
}
