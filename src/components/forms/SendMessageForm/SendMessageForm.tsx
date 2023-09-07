"use client"

import { Button, Input, SendIcon } from "@components"
import { Form, Formik } from "formik"
import { FC } from "react"
import { SendMessageFormProps } from "./SendMessageForm.types"
import { sendMessageFormValidationSchema } from "./SendMessageForm.validation"

export const SendMessageForm: FC<SendMessageFormProps> = ({
    initialValues,
    onSubmit
}) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={sendMessageFormValidationSchema}
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
                    <div
                        className="w-full flex items-center justify-center"
                    >
                        <Input 
                            className="border-none rounded-none"
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errorText={touched.message ? errors.message : undefined}
                        />
                        <Button
                            className="w-auto border-none rounded-none h-[46px]"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            <SendIcon/>
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}