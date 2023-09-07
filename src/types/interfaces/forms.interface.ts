export type LoginFormValuesType = {
    login: string;
    password: string;
}

export type RegisterFormValuesType = {
    login: string;
    password: string;
    confirmPassword: string;
}

export type EditProfileFormValuesType = {
    login?: string;
    password?: string;
    image?: File;
    userName?: string; 
    description?: string;
}

export type SearchFormValuesType = {
    searchField: string;
}

export type SendMessageFormValuesType = {
    message: string;
}