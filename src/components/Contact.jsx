import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { contactSchema } from "../schemas/schemas";

api_key = "8ef1328d-3250-4ae7-acb3-b5c423d07edd";
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
      className="w-full py-16 text-white px-4 h-full bg-gray-800"
    >
      <div className="max-w-[80%] h-full mx-auto grid lg:grid-cols-2 items-center gap-5">
        <div className=" my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Do you have interess to work with me?
          </h1>
          <p className="py-5">E-mail: rafaelribeirolcc@gmail.com</p>
        </div>
        <form className="my-4 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h3 class="text-lg font-medium text-white mb-2">Text me:</h3>
            <textarea
              id="message"
              rows="4"
              class="block py-4 px-3 w-full font-medium text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              placeholder="Write your message here.."
              {...register("message")}
            ></textarea>
            <span className="text-red-600">{errors?.fullname?.message}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:mt-0 mt-6 items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black font-medium"
              type="email"
              placeholder="Your Email"
              {...register("email")}
            />
            <span className="text-red-600">{errors?.fullname?.email}</span>
            <button className="bg-indigo-700 hover:bg-indigo-800 text-white rounded-md font-medium md:w-[200px] w-full md:ml-4 my-6 px-6 py-3">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
