import { useDeleteFeedback } from "../hooks/useDeleteFeedback";
import { Feedback } from "../types/feedbackTypes";

type FeedbackProps = {
  feedback: Feedback;
};

const SingleFeedback = ({ feedback }: FeedbackProps) => {
  const { mutate, isPending } = useDeleteFeedback();

  const handleDelete = (e: React.FormEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (confirm("Are You Sure U Want To Delete This?")) {
      mutate(feedback._id);
    }
  };

  return (
    <div className="max-w-[400px] min-h-[200px] max-h-[200px] border  rounded-2xl p-3 ">
      <div>
        <div>
          <p className="text-gray-700 font-bold">Name:{feedback.name}</p>
          <p>Email:{feedback.email}</p>
          <p>Description:{feedback.message}</p>
          <button
            type="button"
            onClick={handleDelete}
            className="text-black bg-red-500 mt-5 p-2 rounded-xl"
          >
            {isPending ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleFeedback;
