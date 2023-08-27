"use client"

import { Button, Textfield } from "@components"
import { Form, Formik } from "formik"
import { FC } from "react"
import { RegisterFormProps } from "./RegisterForm.types"
import { registerFormValidationSchema } from "./RegisterForm.validation"
import { AppRoutes } from "@types"
import Link from "next/link"

export const RegisterForm: FC<RegisterFormProps> = ({
    initialValues,
    onSubmit
}) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={registerFormValidationSchema}
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
                        type="password"
                        label="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && errors.password}
                    />
                    <Textfield 
                        type="password"
                        label="Confirm Password"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.confirmPassword && errors.confirmPassword}
                    />
                    <div
                        className="w-full flex items-center justify-center gap-2 mt-4"
                    >
                        <Button btnType="submit">
                            Sign up
                        </Button>
                        or
                        <Link 
                            href={AppRoutes.LOGIN}
                            className="outline-none"
                        >
                            <Button >
                                Log in your account
                            </Button>
                        </Link>
                    </div>
                </Form>
            )}
        </Formik>
    )
}