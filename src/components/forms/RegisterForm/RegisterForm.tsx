"use client"

import { Button, Input } from "@components"
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
                isSubmitting
            })=> (
                <Form
                    className="w-2/5 flex flex-col gap-4 items-center justify-center"
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
                    <Input 
                        autoComplete="password"
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errorText={touched.confirmPassword ? errors.confirmPassword : undefined}
                    />
                    <div
                        className="w-full flex items-center justify-center gap-2 mt-4"
                    >
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Sign up
                        </Button>
                        or
                        <Link 
                            href={AppRoutes.LOGIN}
                            className="outline-none w-full"
                        >
                            <Button>
                                Create an account
                            </Button>
                        </Link>
                    </div>
                </Form>
            )}
        </Formik>
    )
}