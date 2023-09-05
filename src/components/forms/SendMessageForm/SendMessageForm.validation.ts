import { object, string } from "yup";

export const searchFormValidationSchema = object().shape({
    searchField: string()
})