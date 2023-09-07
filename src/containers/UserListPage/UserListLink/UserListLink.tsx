'use client'

import { AppRoutes } from "@types"
import Image from "next/image"
import Link from "next/link"

export const UserListLink = () => {
  return (
    <div
      className="bg-light w-full min-h-[120px] p-2 flex items-center gap-2 overflow-hidden rounded-lg"
    >
      <Link 
        className="min-h-[104px] min-w-[104px]"
        href={`${AppRoutes.USER}id`}
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Congenital_absence_of_nose.jpg/300px-Congenital_absence_of_nose.jpg"
          alt="alt"
          width={100}
          height={100}
          className="h-[104px] w-[104px] rounded-3xl border-black border-2"
        />
      </Link>
      <Link
        href={`${AppRoutes.CHAT}id`}
        className="flex flex-col text-indigo-900"
      >
        <span
          className="text-2xl text-text-dark"
        >Username</span>
        <span
          className="text-xl w-full truncate text-text-primary"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, voluptatum. Minus doloremque provident ipsa laudantium nam expedita cum assumenda soluta?</span>
      </Link>
    </div>
  )
}
