'use client'

import { Button, SearchIcon } from "@components"
import { UserListLink } from "./UserListLink/UserListLink"

export const UserListPage = () => {
  return (
    <div
      className="h-[calc(100%-60px)]"
    >
      <div
        className="bg-indigo-400 p-2 border-b-4 border-black rounded-b-2xl mb-2 flex items-center justify-center gap-4"
      >
        <div>
          <Button>
            <SearchIcon/>
          </Button>
        </div>
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
