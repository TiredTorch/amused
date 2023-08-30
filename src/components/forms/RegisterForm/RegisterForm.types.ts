import { RegisterFormValuesType } from "@types";

export type RegisterFormProps = {
    onSubmit: (values: RegisterFormValuesType) => void;
    initialValues: RegisterFormValuesType;
}
