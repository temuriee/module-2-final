"use client";

import { useParams } from "next/navigation";
import { useSingleFeedback } from "../hooks/useSingleFeedback";
import EditFeedback from "./EditFeedback";
import Link from "next/link";

const FeedbackId = () => {
  const { feedbackId } = useParams<{ feedbackId: string }>();

  const { data, isLoading, error } = useSingleFeedback(feedbackId);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading feedback</p>;

  return (
    <div className="flex justify-center items-center flex-col  min-h-screen gap-5 ">
      <div className="border rounded-xl p-10 ">
        <h1 className="text-amber-500 font-bold text-2xl">
          Name: {data?.name}
        </h1>
        <p>Email: {data?.email}</p>
        <p>Description: {data?.message}</p>
      </div>
      <EditFeedback feedback={data} />
      <Link className="border rounded-xl p-2" href={"/feedbacks"}>
        ⬅️ Go To Main Page
      </Link>
    </div>
  );
};

export default FeedbackId;
