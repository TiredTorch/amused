import { object, ref, string } from "yup";

export const registerFormValidationSchema = object().shape({
    login: string().required("Field is required").email("Email is required"),
    password: string().required("Field is required").min(8, "Password should consist of at least 8 characters"),
    confirmPassword: string().required("Field is required").oneOf([ref("password")], "Password should be the same"),
})