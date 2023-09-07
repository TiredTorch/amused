import { EditProfileFormValuesType } from "@types";

export type EditProfileFormProps = {
    onSubmit: (values: EditProfileFormValuesType) => void;
    initialValues: EditProfileFormValuesType;
}
