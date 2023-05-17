import * as yup from "yup";

export const contactSchema = yup.object({
  email: yup.string().email("E-mail inválido").required("Required field."),
  message: yup
    .string()
    .max(5000, "Limite máximo de 30 caracteres.")
    .required("Required field."),
  username: yup
    .string()
    .max(30, "Limite máximo de 30 caracteres.")
    .required("Required field."),
});
