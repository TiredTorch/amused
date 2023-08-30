'use client'

import { Button, NewPostIcon } from "@components"
import { AppRoutes } from "@types"
import Link from "next/link"

export const DashboardPage = () => {
  return (
    <div
      className="h-full"
    >
      <div
        className="bg-indigo-400 p-2 border-b-4 border-black rounded-b-2xl mb-2"
      >
        <Link href={AppRoutes.NEW_POST} className="w-full">
          <Button>
            <NewPostIcon/>
          </Button>
        </Link>
      </div>
      <div
        className="bg-red-500 w-full h-full px-8 pb-36 pt-14"
      >
        <div
          className="bg-red-900 w-full h-full"
        >
          fs
        </div>
      </div>
    </div>
  )
}
