"use client"

import { Button, Input } from "@components"
import { Form, Formik } from "formik"
import { FC } from "react"
import { LoginFormProps } from "./LoginForm.types"
import { loginFormValidationSchema } from "./LoginForm.validation"
import { AppRoutes } from "@types"
import Link from "next/link"

export const LoginForm: FC<LoginFormProps> = ({
    initialValues,
    onSubmit
}) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={loginFormValidationSchema}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isSubmitting
            })=> (
                <Form
                    className="w-full flex flex-col gap-4 items-center justify-center"
                >
                    <Input 
                        label="Login"
                        name="login"
                        value={values.login}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errorText={touched.login ? errors.login : undefined}
                    />
                    <Input 
                        autoComplete="password"
                        label="Password"
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errorText={touched.password ? errors.password : undefined}
                    />
                    <div
                        className="w-full flex items-center justify-center gap-2 mt-4"
                    >
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Log in
                        </Button>
                        or
                        <Link 
                            href={AppRoutes.REGISTER}
                            className="outline-none w-full"
                        >
                            <Button>
                                Create an account
                            </Button>
                        </Link>
                    </div>
                    <div
                        className="w-full"
                    >
                        <Button
                            type="button"
                        >
                            Log in via Google
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}