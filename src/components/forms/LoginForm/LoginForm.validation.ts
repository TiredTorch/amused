import { object, string } from "yup";

export const loginFormValidationSchema = object().shape({
    login: string().required("Field is required").email("Email is required"),
    password: string().required("Field is required").min(8, "Password should consist of at least 8 characters")
})