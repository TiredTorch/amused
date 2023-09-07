'use client'

import { Button, NewPostIcon } from "@components"
import { AppRoutes } from "@types"
import Link from "next/link"
import { PostDashboard } from "./PostDashboard/PostDashboard"

export const DashboardPage = () => {
  return (
    <div
      className="h-[calc(100%-60px)]"
    >
      <div
        className="bg-light p-2 border-b-4 border-black rounded-b-2xl mb-2"
      >
        <Link href={AppRoutes.NEW_POST} className="w-full">
          <Button>
            <NewPostIcon/>
          </Button>
        </Link>
      </div>
      <div
        className="w-full h-full px-3 pb-20 pt-3 flex gap-10 overflow-x-auto items-center"
      >
        <PostDashboard 
          userImage={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Congenital_absence_of_nose.jpg/300px-Congenital_absence_of_nose.jpg"} 
          userName={"John Doe"} 
          postDate={new Date()}
        />
        <PostDashboard 
          userImage={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Congenital_absence_of_nose.jpg/300px-Congenital_absence_of_nose.jpg"} 
          userName={"John Doe"} 
          postDate={new Date()}
        />
        <PostDashboard 
          userImage={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Congenital_absence_of_nose.jpg/300px-Congenital_absence_of_nose.jpg"} 
          userName={"John Doe"} 
          postDate={new Date()}
        />
        <PostDashboard 
          userImage={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Congenital_absence_of_nose.jpg/300px-Congenital_absence_of_nose.jpg"} 
          userName={"John Doe"} 
          postDate={new Date()}
        />
      </div>
    </div>
  )
}
