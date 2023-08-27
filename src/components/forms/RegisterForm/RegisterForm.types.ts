export type RegisterFormProps = {
    onSubmit: (values: RegisterFormValuesType) => void;
    initialValues: RegisterFormValuesType;
}

export type RegisterFormValuesType = {
    login: string;
    password: string;
    confirmPassword: string;
}