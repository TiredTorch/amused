'use client'

import { useCallback, useMemo } from "react"
import { LoginForm } from "@components"
import { LoginFormValuesType } from "@types"

export const LoginPage = () => {
  const formInitialValues = useMemo(() => ({
    login: "",
    password: ""
  }), [])

  const handleSubmit = useCallback((values: LoginFormValuesType) => {
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
