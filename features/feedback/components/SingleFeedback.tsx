import { useDeleteFeedback } from "../hooks/useDeleteFeedback";
import { Feedback } from "../types/feedbackTypes";

type FeedbackProps = {
  feedback: Feedback;
};

const SingleFeedback = ({ feedback }: FeedbackProps) => {
  const { mutate, isPending } = useDeleteFeedback();

  const handleDelete = () => {
    if (confirm("Are You Sure U Want To Delete This?")) {
      mutate(feedback._id);
    }
  };

  return (
    <div className="min-w-[250px] min-h-[250px] border  rounded-2xl p-3 ">
      <div>
        <div>
          <h1>{feedback.name}</h1>
          <p>{feedback.email}</p>
          <p>{feedback.message}</p>
          <button
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
