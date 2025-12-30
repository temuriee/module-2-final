import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFeedback } from "../api/feedbackApi";

export function useDeleteFeedback() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (feedbackId: string) => deleteFeedback(feedbackId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["feedback"] });
    },
  });
}
