'use client'

import { LoginForm } from "@components"

export const LoginPage = () => {
  return (
    <div
      className="max-w-[500px] w-full "
    >
      <LoginForm 
        onSubmit={console.log} 
        initialValues={{
          login: "",
          password: ""
        }}/>
    </div>
  )
}
