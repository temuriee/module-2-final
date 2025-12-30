"use client";

import { useParams } from "next/navigation";
import { useSingleFeedback } from "../hooks/useSingleFeedback";
import EditFeedback from "./EditFeedback";
import { Feedback } from "../types/feedbackTypes";
import { number } from "zod";
const FeedbackId = () => {
  const { feedbackId } = useParams<{ feedbackId: string }>();

  const { data, isLoading, error } = useSingleFeedback(feedbackId);

  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading feedback</p>;

  return (
    <div className="flex justify-center items-center flex-col min-h-screen ">
      <div className="border rounded-xl p-10">
        <h1 className="text-white">{data?.name}</h1>
        <p>{data?.email}</p>
        <p>{data?.message}</p>
      </div>
      <EditFeedback feedback={data} />
    </div>
  );
};

export default FeedbackId;
