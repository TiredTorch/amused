"use client"

import { Button, Textfield } from "@components"
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
                handleSubmit,
                isSubmitting
            })=> (
                <Form
                    className="w-2/5 flex flex-col gap-4 items-center justify-center"
                >
                    <Textfield 
                        label="Login"
                        name="login"
                        value={values.login}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.login && errors.login}
                    />
                    <Textfield 
                        label="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && errors.password}
                    />
                    <div
                        className="w-full flex items-center justify-center gap-2 mt-4"
                    >
                        <Button btnType="submit">
                            Log in
                        </Button>
                        or
                        <Link 
                            href={AppRoutes.REGISTER}
                            className="outline-none"
                        >
                            <Button >
                                Create an account
                            </Button>
                        </Link>
                    </div>
                </Form>
            )}
        </Formik>
    )
}