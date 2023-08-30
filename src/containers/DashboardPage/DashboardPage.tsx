'use client'

import { Button, NewPostIcon } from "@components"
import { AppRoutes } from "@types"
import Link from "next/link"

export const DashboardPage = () => {
  return (
    <div>
      <div
        className="bg-indigo-400 mb-4 p-2 border-b-4 border-black rounded-b-2xl"
      >
        <Link href={AppRoutes.NEW_POST} className="w-full">
          <Button>
            <NewPostIcon/>
          </Button>
        </Link>
      </div>
      <div>DashboardPage</div>
    </div>
  )
}
