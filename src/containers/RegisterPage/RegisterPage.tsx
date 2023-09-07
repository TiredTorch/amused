'use client'

import { RegisterForm } from "@components"

export const RegisterPage = () => {
  return (
    <div
      className="max-w-[500px] w-full h-full flex flex-col gap-4 justify-evenly"
    >
      <div
        className="text-5xl flex justify-center items-center text-text-dark"
      >
        AmuseD
      </div>
      <RegisterForm 
        onSubmit={console.log} 
        initialValues={{
          login: "",
          password: "",
          confirmPassword: ""
        }}/>
    </div>
  )
}
