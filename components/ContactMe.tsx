import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "typings";

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = ({ pageInfo }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:thomasgollick@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-10 pt-16 sm:pt-6 md:pt-0">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          Like what you see?{" "}
          <span className="underline decoration-maincolor/50">Lets talk.</span>
        </h4>
        <div className="space-y-4 sm:space-x-8 md:space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-maincolor h-7 w-7 animate-pulse" />
            <p className="text-base sm:text-lg md:text-2xl">{pageInfo.email}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-maincolor h-7 w-7 animate-pulse" />
            <p className="text-base sm:text-lg md:text-2xl">
              {pageInfo.phoneNumber}
            </p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-maincolor h-7 w-7 animate-pulse" />
            <p className="text-base sm:text-lg md:text-2xl">
              {pageInfo.address}
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contactInput w-[50%] sm:w-normal"
              placeholder="Name"
              type="text"
            />
            <input
              {...register("email")}
              className="contactInput w-[50%] sm:w-normal"
              placeholder="Email"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            placeholder="Subject"
            type="text"
          />

          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          />
          <button
            type="submit"
            className="bg-maincolor py-2 sm:py-6 md:py-10 px-2 sm:px-6 md:px-10 rounded-md font-bold text-lg text-darkbackground"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
