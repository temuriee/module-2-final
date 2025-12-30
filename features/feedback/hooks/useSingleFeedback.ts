import { useQuery } from "@tanstack/react-query";
import { singleFeedback } from "../api/feedbackApi";

export function useSingleFeedback(feedbackId: string) {
  return useQuery({
    queryKey: ["feedback", feedbackId],
    queryFn: () => singleFeedback(feedbackId),
  });
}
