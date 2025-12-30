"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FeedbackInputs, feedbackSchema } from "../schemas/feedbackSchema";
import { usePostFeedbacks } from "../hooks/usePostFeedback";
import { useEffect } from "react";
import Link from "next/link";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Submit Your Name"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Submit Your Email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="message">Message</label>
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

      <button className="block" type="submit" disabled={isPending}>
        {isPending ? "Sending..." : "Send Message"}
      </button>

      <Link
        className="rounded bg-cyan-600 ml-[20px] max-w-[160px] max-h-[100px] "
        href={"/feedbacks"}
      >
        ⬅️ Main Page
      </Link>
    </form>
  );
};

export default CreateFeedback;
