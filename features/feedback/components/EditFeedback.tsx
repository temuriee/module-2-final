"use client";

import { useState } from "react";
import { useUpdateFeedbacks } from "../hooks/useUpdateFeedback";
import { Feedback } from "../types/feedbackTypes";

interface EditFeedbackProps {
  feedback?: Feedback; // the feedback you want to edit
}

const EditFeedback = ({ feedback }: EditFeedbackProps) => {
  const [message, setMessage] = useState(feedback?.message);

  const { mutate, isPending, isError, error, isSuccess } = useUpdateFeedbacks();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate({
      id: feedback!._id,
      data: {
        message,
      },
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Edit Feedback</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col">
          Message:
          <textarea
            className="border rounded p-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>

        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {isPending ? "Updating..." : "Update Feedback"}
        </button>
      </form>

      {isError && (
        <p className="text-red-500 mt-2">{(error as Error).message}</p>
      )}
      {isSuccess && (
        <p className="text-green-500 mt-2">Feedback updated successfully!</p>
      )}
    </div>
  );
};

export default EditFeedback;
