'use client'

import { SharedPost } from "./SharedPost/SharedPost"
import { UserPageHeader } from "./UserPageHeader/UserPageHeader"

export const UserPage = () => {
  return (
    <div
      className="h-[calc(100%-60px)]"
    >
      <UserPageHeader/>
      <div
        className="h-2/3 px-2 py-6 overflow-auto flex flex-col gap-10"
      >
        <SharedPost/>
        <SharedPost/>
        <SharedPost/>
        <SharedPost/>
        <SharedPost/>
        <SharedPost/>
      </div>
    </div>
  )
}
