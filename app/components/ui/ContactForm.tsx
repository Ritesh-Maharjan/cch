"use client";
import { submitForm } from "@/app/actions";
import { useActionState } from "react";

const ContactForm = () => {
  const [state, formAction, pending] = useActionState(submitForm, {
    success: false,
    message: "",
    errors: {},
  });

  return (
    <div className="max-w-125 row-start-2 md:row-start-1 md:col-start-2 py-12 lg:py-24 px-4 flex flex-col gap-6 md:gap-8">
      <h2 className="flex flex-col w-fit text-2xl lg:text-4xl font-extralight leading-8 md:leading-15">
        Contact
      </h2>
      <p>
        We provide strategic equity investments designed to fuel sustainable
        growth and lasting partnerships.
      </p>

      <form action={formAction} className="flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <fieldset className="flex-1 flex flex-col gap-2">
            <label htmlFor="firstName">First Name</label>
            <input
              className="bg-white rounded-full py-2 px-4 text-[#0c2438]"
              type="text"
              name="firstName"
              id="firstName"
            />
            {state.errors?.firstName && (
              <p className="text-red-500 text-xs mt-1">
                {state.errors.firstName}
              </p>
            )}
          </fieldset>

          <fieldset className="flex-1 flex flex-col gap-2">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="bg-white rounded-full py-2 px-4 text-[#0c2438]"
              type="text"
              name="lastName"
              id="lastName"
            />
            {state.errors?.lastName && (
              <p className="text-red-500 text-xs mt-1">{state.errors.lastName}</p>
            )}
          </fieldset>
        </div>

        <fieldset className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="bg-white rounded-full py-2 px-4 text-[#0c2438]"
            type="email"
            name="email"
            id="email"
          />
          {state.errors?.email && (
            <p className="text-red-500 text-xs mt-1">{state.errors.email}</p>
          )}
        </fieldset>

        <fieldset className="flex flex-col gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            className="bg-white rounded-3xl py-2 px-4 text-[#0c2438]"
            name="message"
            id="message"
            rows={8}
          />
          {state.errors?.message && (
            <p className="text-red-500 text-xs mt-1">{state.errors.message}</p>
          )}
        </fieldset>

        {state.message && (
          <div
            className={`col-span-2 p-3 rounded ${
              state.success
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {state.message}
          </div>
        )}

    <button
      className="bg-[#A1896D] text-lg col-span-2 py-3 rounded-xl cursor-pointer disabled:opacity-50"
      type="submit"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
      </form>
    </div>
  );
};

export default ContactForm;
