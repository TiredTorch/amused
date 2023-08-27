export type LoginFormProps = {
    onSubmit: (values: LoginFormValuesType) => void;
    initialValues: LoginFormValuesType;
}

export type LoginFormValuesType = {
    login: string;
    password: string;
}