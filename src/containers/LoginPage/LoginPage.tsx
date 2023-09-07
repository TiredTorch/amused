'use client'

import { LoginForm } from "@components"

export const LoginPage = () => {
  return (
    <div
      className="max-w-[500px] w-full h-full flex flex-col gap-4 justify-evenly"
    >
      <div
        className="text-5xl flex justify-center items-center text-text-dark"
      >
        AmuseD
      </div>
      <LoginForm 
        onSubmit={console.log} 
        initialValues={{
          login: "",
          password: ""
        }}/>
    </div>
  )
}
