import { SearchFormValuesType } from "@types";

export type SearchFormProps = {
    onSubmit: (values: SearchFormValuesType) => void;
    initialValues: SearchFormValuesType;
}
