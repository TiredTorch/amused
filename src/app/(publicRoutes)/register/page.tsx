'use client'

import { RegisterForm, RegisterFormValuesType } from "@components"
import { useCallback, useMemo } from "react"

const Page = () => {
    const formInitialValues = useMemo(() => ({
        login: "",
        password: "",
        confirmPassword: ""
    }), [])

    const handleSubmit = useCallback((values: RegisterFormValuesType) => {
        console.log(values)
    }, [])

    return (
        <>
            <span
                className="font-bold text-3xl mb-4"
            >
                Log in your account
            </span>
            <div
                className="w-full flex justify-center gap-2 items-center"
            >
                <RegisterForm
                    onSubmit={handleSubmit}
                    initialValues={formInitialValues}
                />
            </div>
        </>
    )
}

export default Page