'use client'

import { useCallback, useMemo } from "react"
import { RegisterForm } from "@components"
import { RegisterFormValuesType } from "@types"

export const RegisterPage = () => {
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
              Create an account
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
