'use client'

import { LoginForm } from "@components"

export const LoginPage = () => {
  return (
    <LoginForm 
      onSubmit={console.log} 
      initialValues={{
        login: "",
        password: ""
      }}/>
  )
}
