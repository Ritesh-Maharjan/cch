"use server";

import { z } from "zod";
import { Resend } from "resend";

// Define your schema
const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormState = {
  success: boolean;
  message: string;
  errors?: Partial<Record<string, string | string[]>>;
};

export async function submitForm(prevState: FormState, formData: FormData) {
  const rawValues = Object.fromEntries(formData.entries());

  const validatedFields = formSchema.safeParse(rawValues);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Submit.",
      success: false,
    };
  }

  const { firstName, lastName, email, message } = validatedFields.data;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL_TO ?? "",
      subject: "Contact Form Submission",
      text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Message: ${message}`,
    });

    return { message: "Message sent successfully!", success: true };
  } catch (error) {
    console.log(error);
    return {
      message: "Database Error. Failed to Submit.",
      success: false,
    };
  }
}
