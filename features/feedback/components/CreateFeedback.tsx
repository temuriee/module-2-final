"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FeedbackInputs, feedbackSchema } from "../schemas/feedbackSchema";
import { usePostFeedbacks } from "../hooks/usePostFeedback";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFeedbacks } from "../hooks/useFeedbacks";

const CreateFeedback = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FeedbackInputs>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { refetch } = useFeedbacks();

  const router = useRouter();
  const { mutate: submitFeedback, isPending, isSuccess } = usePostFeedbacks();

  const onSubmit = (data: FeedbackInputs) => {
    submitFeedback(data);
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
  }, [isSuccess, reset]);

  return (
    <form
      className="border-2 rounded-xl max-w-100 max-h-100 mx-auto space-y-2 p-10  "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="border rounded-xl p-2">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          placeholder="Submit Your Name"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div className="border rounded-xl p-2">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          placeholder="Submit Your Email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="border rounded-xl p-2">
        <label htmlFor="message">Message: </label>
        <input
          type="text"
          placeholder="Submit Your Message"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      {isSuccess && <div>Thanks Your Message Has Been Sent</div>}

      <button
        className="bg-red-800 border rounded px-2 "
        type="submit"
        disabled={isPending}
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>

      <button
        type="button"
        className="rounded bg-cyan-600 ml-5 max-w-40 max-h-[100px] px-2 "
        onClick={async () => {
          await refetch();
          router.push("/feedbacks");
        }}
      >
        ⬅️ Main Page
      </button>
    </form>
  );
};

export default CreateFeedback;
