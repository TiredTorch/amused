import { SendMessageFormValuesType } from "@types";

export type SendMessageFormProps = {
    onSubmit: (values: SendMessageFormValuesType) => void;
    initialValues: SendMessageFormValuesType;
}
