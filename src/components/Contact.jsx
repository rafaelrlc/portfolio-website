import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { contactSchema } from "../utils/schemas/schemas";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
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

  const form = useRef();
  const onSubmit = (e) => {
    //console.log(data);
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_c9244p6",
        "template_pjk3ab5",
        form.current,
        "ggqI8x0FibTw_lvSw"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };

  return (
    <div id="contact" className="flex items-center justify-center">
      <div className="max-w-[1340px] h-full grid lg:grid-cols-3 items-center md:gap-5 gap-0 dark:text-white text-black mb-5 mx-8">
        <div className=" space-y-5 sm:space-y-4 mb-14">
          <h1 className="lg:text-3xl font-bold tracking-tight sm:text-4xl text-2xl text-black dark:text-white text-start">
            Contact me
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-400 text-start">
            Do you have interess to work with me? Send me a message!
          </p>
        </div>
        <form
          ref={form}
          className="my-4 flex flex-col col-span-2"
          onSubmit={onSubmit}
        >
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium dark:text-gray-300 text-gray-800">
              Your Name
            </label>
            <input
              className="p-3 flex w-full rounded-md focus:ring-0 focus:outline-none font-medium dark: dark:bg-[#141414] bg-gray-50 border dark:border-gray-700 border-[#d9d8d8]"
              type="text"
              placeholder="Your Name"
              name="user_name"
              id="user_name"
              required
            />
            <span className="text-red-600">{errors?.username?.message}</span>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium dark:text-gray-300 text-gray-800">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="block py-4 px-3 w-full font-medium dark:bg-[#141414] bg-gray-50 rounded-lg focus:ring-0 focus:outline-none border dark:border-gray-700 border-[#d9d8d8] "
              placeholder="Write your message here.."
              required
            ></textarea>
            <span className="text-red-600">{errors?.message?.message}</span>
          </div>
          <div className="mt-3">
            <label className="block mb-2 text-sm font-medium dark:text-gray-300 text-gray-800">
              Your Email
            </label>
            <input
              className="p-3 flex w-full rounded-md focus:ring-0 focus:outline-none font-medium dark:bg-[#141414] bg-gray-50 border dark:border-gray-700 border-[#d9d8d8]"
              type="email"
              placeholder="Your Email"
              name="user_email"
              id="user_email"
              required
            />
            <span className="text-red-600">{errors?.email?.message}</span>
          </div>
          <div className="w-full flex justify-between">
            <div className="flex items-end"></div>
            <button
              type="submit"
              className="text-white bg-[#FF9119] hover:bg-[#ff9019c6] focus:ring-0 font-medium rounded-lg text-sm px-5 py-2.5 text-center  items-center mt-3"
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
