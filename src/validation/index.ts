import * as yup from "yup";

export const contactS = yup
  .object({
    name: yup
      .string()
      .required("name is required")
      .min(10, "name should be at least 10 characters"),
    message: yup
      .string()
      .required("message is required")
      .min(50, "message should be at least 50 characters"),
  })
  .required();

export const bookingS = yup.object({
  name: yup.string().required("Name is required").min(10, "Name should be at least 10 characters"),
  service: yup
    .array()
    .of(yup.string().nullable())
    .min(1, "You must choose at least 1 service")
    .required(),
  date: yup
    .string()
    .required("You must choose a date")
    .test("is-future-date", "Date cannot be in the past", (value) => {
      if (!value) return false;
      const today = new Date();
      const selected = new Date(value);
      today.setHours(0, 0, 0, 0);
      return selected >= today;
    }),
  numberofP: yup.string().nullable().default(null), // تأكد أنها موجودة دائمًا
}).required();


