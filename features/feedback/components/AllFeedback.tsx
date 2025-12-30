"use client";
import Link from "next/link";
import { useFeedbacks } from "../hooks/useFeedbacks";
import SingleFeedback from "./SingleFeedback";

const AllFeedback = () => {
  const { data: feedbacks, isLoading, error } = useFeedbacks();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-2xl text-gray-700">Loading Feedbacks....</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto">
        <p className="text-lg text-red-500">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto flex flex-col flex-wrap">
      <div className="grid-cols-4 grid space-x-2 space-y-2">
        {feedbacks?.map((feedback) => (
          <Link key={feedback._id} href={`/feedbacks/${feedback._id}`}>
            <SingleFeedback feedback={feedback} />
          </Link>
        ))}
      </div>
      <Link
        className="rounded bg-cyan-600 ml-5 max-w-40 max-h-[100px] p-2 mt-20 "
        href={"/feedbacks/create"}
      >
        Create New Feedback
      </Link>
    </div>
  );
};

export default AllFeedback;
