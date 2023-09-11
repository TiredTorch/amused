'use client'

import { EditProfileForm } from "@components"

export const ConfigProfilePage = () => {
  return (
    <div
      className="flex p-4 py-8 max-md:p-1 h-[calc(100%-60px)]"
    >
      <div
        className="h-full w-full p-4 pt-8 flex justify-start items-start bg-light rounded-xl max-md:rounded-none max-md:p-1 overflow-auto"
      >
        <EditProfileForm 
          onSubmit={console.log} 
          initialValues={{
            login: "",
            password: "",
            image: undefined,
            userName: "",
            description: ""
          }}
        />
      </div>
    </div>
  )
}
