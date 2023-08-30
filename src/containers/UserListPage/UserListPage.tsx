'use client'

import { Button, SearchIcon, Textfield } from "@components"
import { UserListLink } from "./UserListLink/UserListLink"

export const UserListPage = () => {
  return (
    <div
      className="h-[calc(100%-60px)]"
    >
      <div
        className="bg-indigo-400 p-2 border-b-4 border-black rounded-b-2xl mb-2 flex items-center justify-center gap-4"
      >
        <Textfield/>
        <div>
          <Button>
            <SearchIcon/>
          </Button>
        </div>
      </div>
      <div
        className="bg-red-900"
      >
        <UserListLink/>
      </div>
    </div>
  )
}
