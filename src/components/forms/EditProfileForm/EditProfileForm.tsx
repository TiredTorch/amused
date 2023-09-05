"use client"

import { Button, FileInput, Input, Textarea } from "@components"
import { Form, Formik } from "formik"
import { FC } from "react"
import { EditProfileFormProps } from "./EditProfileForm.types"
import { editProfileFormValidationSchema } from "./EditProfileForm.validation"
import { AppRoutes } from "@types"
import Link from "next/link"

export const EditProfileForm: FC<EditProfileFormProps> = ({
    initialValues,
    onSubmit
}) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={editProfileFormValidationSchema}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isSubmitting,
                setFieldValue
            })=> (
                <Form
                    className="w-full flex flex-col gap-4 items-center justify-center"
                >
                    <div
                        className="w-full flex gap-8"
                    >
                        <div
                            className="w-1/2"
                        >
                            <FileInput
                                name="image"
                                onChange={(e) => setFieldValue("image", e.target.files?.[0])}
                            >
                                <p 
                                    className="mb-2 text-sm text-gray-500 dark:text-gray-400 flex flex-col justify-center items-center"
                                >
                                    <span
                                        className="font-semibold"
                                    >
                                        Click to upload
                                    </span> 
                                    <span>
                                        or drag and drop
                                    </span>
                                </p>
                                <p 
                                        className="text-xs text-gray-500 dark:text-gray-400"
                                    >
                                        SVG, PNG, JPG
                                </p>
                            </FileInput>
                        </div>
                        <div
                            className="w-1/2 flex flex-col gap-4"
                        >
                            <Input 
                                label="Username"
                                name="userName"
                                value={values.userName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                errorText={touched.userName ? errors.userName : undefined}
                            />
                            <Textarea 
                                label="About"
                                name="description"
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                errorText={touched.description ? errors.description : undefined}
                            />
                        </div>
                    </div>
                    <Input 
                        label="Change Login"
                        name="login"
                        value={values.login}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errorText={touched.login ? errors.login : undefined}
                    />
                    <Input 
                        autoComplete="password"
                        label="Change Password"
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
                            Save
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}