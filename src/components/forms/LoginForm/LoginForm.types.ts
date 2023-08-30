import { LoginFormValuesType } from "@types";

export type LoginFormProps = {
    onSubmit: (values: LoginFormValuesType) => void;
    initialValues: LoginFormValuesType;
}
