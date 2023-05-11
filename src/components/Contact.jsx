import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { contactSchema } from "../schemas/schemas";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div
      id="contact"
      className="flex items-center justify-center w-full py-24 text-white px-4"
    >
      <div className="max-w-[1340px] h-full grid lg:grid-cols-3 items-center gap-5 ">
        <div className=" space-y-5 sm:space-y-4 mb-14">
          <h1 className="lg:text-3xl font-bold tracking-tight sm:text-4xl text-black dark:text-white text-start">
            Contact me
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 text-start">
            Want to work with me? Send me a private message and I'll get back to
            you as soon as possible!
          </p>
        </div>
        <form
          className="my-4 flex flex-col col-span-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="block py-4 px-3 w-full font-medium text-gray-900 bg-[#141414] rounded-lg border border-gray-700"
              placeholder="Write your message here.."
              {...register("message")}
            ></textarea>
            <span className="text-red-600">{errors?.fullname?.message}</span>
          </div>
          <div className="mt-3">
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Your Email
            </label>
            <input
              className="p-3 flex w-full rounded-md text-black font-medium bg-[#141414] border border-gray-700"
              type="email"
              placeholder="Your Email"
              {...register("email")}
            />
            <span className="text-red-600">{errors?.fullname?.email}</span>
          </div>
          <div className="w-full flex justify-between">
            <div className="flex items-end"></div>
            <button
              type="button"
              className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mt-2"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
