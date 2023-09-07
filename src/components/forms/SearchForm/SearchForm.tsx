"use client"

import { Button, Input, SearchIcon } from "@components"
import { Form, Formik } from "formik"
import { FC } from "react"
import { SearchFormProps } from "./SearchForm.types"
import { searchFormValidationSchema } from "./SearchForm.validation"
import { AppRoutes } from "@types"
import Link from "next/link"

export const SearchForm: FC<SearchFormProps> = ({
    initialValues,
    onSubmit
}) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={searchFormValidationSchema}
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
                        className="w-full flex items-center justify-center rounded-lg overflow-hidden"
                    >
                        <Button
                            className="w-auto border-none rounded-none h-[46px]"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            <SearchIcon/>
                        </Button>
                        <Input 
                            className="border-none rounded-none py-[11px]"
                            name="searchField"
                            value={values.searchField}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errorText={touched.searchField ? errors.searchField : undefined}
                        />
                        <Button
                            className="border-none rounded-none h-[46px] w-1/4 max-w-[100px]"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Search
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}