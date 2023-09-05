import { object, string } from "yup";

export const sendMessageFormValidationSchema = object().shape({
    searchField: string()
})