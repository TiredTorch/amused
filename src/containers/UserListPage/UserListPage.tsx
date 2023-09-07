'use client'

import { Button, SearchForm, SearchIcon } from "@components"
import { UserListLink } from "./UserListLink/UserListLink"
import { SearchFormValuesType } from "@types"

export const UserListPage = () => {
  return (
    <div
      className="h-[calc(100%-60px)]"
    >
      <div
        className="bg-light p-2 border-b-4 border-black rounded-b-2xl mb-2"
      >
        <SearchForm 
          onSubmit={console.log} 
          initialValues={{
            searchField: ""
          }}
        />
      </div>
      <div
        className="flex flex-col gap-3 w-full h-full overflow-auto p-4"
      >
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
        <UserListLink/>
      </div>
    </div>
  )
}
