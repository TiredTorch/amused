'use client'

import { AppRoutes } from "@types"
import Image from "next/image"
import Link from "next/link"

export const UserListLink = () => {
  return (
    <div
      className="bg-blue-500 w-full min-h-[120px] p-2 flex items-center gap-2 overflow-hidden"
    >
      <Link 
        className="h-[calc(4dvi+25px)] w-[calc(4dvi+25px)]"
        href={`${AppRoutes.USER}id`}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Congenital_absence_of_nose.jpg/300px-Congenital_absence_of_nose.jpg"
          alt="alt"
          width={100}
          height={100}
          className="h-[calc(4dvi+25px)] w-[calc(4dvi+25px)]"
        />
      </Link>
      <div
        className="flex flex-col text-indigo-900"
      >
        <span
          className="text-2xl"
        >Username</span>
        <span
          className="text-xl w-full truncate"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, voluptatum. Minus doloremque provident ipsa laudantium nam expedita cum assumenda soluta?</span>
      </div>
    </div>
  )
}
