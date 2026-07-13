import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  let formSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="w-70 flex flex-col justify-between items-center p-4  rounded-lg border-gray-300 border-2 shadow-md mt-3">
      <h1 className="text-xl font-bold">Create User</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex flex-col gap-2 mt-2 w-full"
      >
        <input
          {...register("userName", {
            required: "Name is required",
          })}
          className="border border-gray-300 rounded-md p-2"
          type="text"
          placeholder="Name"
        />
        {errors.userName && (
          <p className="text-red-500 text-sm">{errors.userName.message}</p>
        )}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid hai tera email address",
            },
          })}
          className="border border-gray-300 rounded-md p-2"
          type="email"
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        <input
          {...register("contact", {
            required: "Contact is required",
            minLength: {
              value: 10,
              message: "Minimum 10 digits",
            },
            maxLength: {
              value: 10,
              message: "Maximum 10 digits",
            },
          })}
          className="border border-gray-300 rounded-md p-2"
          type="tel"
          placeholder="Contact"
        />
        {errors.contact && (
          <p className="text-red-500 text-sm">{errors.contact.message}</p>
        )}
        <input
          {...register("image", {
            required: "Image is required",
          })}
          className="border border-gray-300 rounded-md p-2"
          type="url"
          placeholder="image"
        />
        {errors.image && (
          <p className="text-red-500 text-sm">{errors.image.message}</p>
        )}
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          type="submit"
        >
          Create User
        </button>
      </form>
    </div>
  );
};

export default Form;
