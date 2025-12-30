import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateFeedback } from "../api/feedbackApi";
import { Feedback } from "../types/feedbackTypes";

export function useUpdateFeedbacks() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Feedback> }) =>
      updateFeedback(id, data),

    onSuccess: (data, feedback) => {
      queryClient.invalidateQueries({ queryKey: ["feedback", feedback.id] });
    },
  });
}
