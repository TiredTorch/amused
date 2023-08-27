'use client'

import { LoginForm } from "@components"
import { useCallback, useMemo } from "react"

const Page = () => {
    const formInitialValues = useMemo(() => ({
        login: "",
        password: ""
    }), [])

    const handleSubmit = useCallback((values: any) => {
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
                <LoginForm
                    onSubmit={handleSubmit}
                    initialValues={formInitialValues}
                />
            </div>
        </>
    )
}

export default Page