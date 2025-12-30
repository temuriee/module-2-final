"use client";

import { useState } from "react";
import { useUpdateFeedbacks } from "../hooks/useUpdateFeedback";
import { Feedback } from "../types/feedbackTypes";

type EditFeedbackProps = {
  feedback?: Feedback;
};

const EditFeedback = ({ feedback }: EditFeedbackProps) => {
  const [status, setStatus] = useState<"pending" | "reviewed" | "resolved">(
    feedback?.status ?? "pending"
  );

  const { mutate, isPending, isError, error, isSuccess } = useUpdateFeedbacks();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate({
      id: feedback!._id,
      data: {
        status,
      },
    });
  };

  return (
    <div className="border p-2 rounded-xl">
      <h1 className="text-2xl font-bold text-amber-500">Edit This Feedback</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="">
          <select
            className="mt-2 border rounded-xl p-2"
            value={status}
            onChange={(e) =>
              setStatus(e.target.value as "pending" | "reviewed" | "resolved")
            }
          >
            <option value="pending">Pending</option>
            <option value="reviewed">Reviewed</option>
            <option value="resolved">Resolved</option>
          </select>
        </label>

        {status === "pending" && <p>Card Is Pending </p>}
        {status === "reviewed" && <p>Card Has Been Reviewed</p>}
        {status === "resolved" && <p>Card Has Been Resolved</p>}
        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isPending ? "Updating..." : "Update Status"}
        </button>
      </form>

      {isError && <p className="text-red-500 mt-2">{error.message}</p>}
      {isSuccess && (
        <p className="text-green-500 mt-2">Feedback updated successfully!</p>
      )}
    </div>
  );
};

export default EditFeedback;
