"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllFeedbacks } from "../api/feedbackApi";

export function useFeedbacks() {
  return useQuery({
    queryKey: ["feedback"],
    queryFn: () => getAllFeedbacks(),
  });
}
