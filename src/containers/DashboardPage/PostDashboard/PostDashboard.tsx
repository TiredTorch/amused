'use client'

import { FC } from "react"
import Image from "next/image"
import dayjs from "dayjs"
import { PostDashboardProps } from "./PostDashboard.types"

export const PostDashboard: FC<PostDashboardProps> = ({
    userImage,
    userName,
    postDate
}) => {
  return (
    <div
          className="bg-light w-full h-full rounded-md border-2 border-black max-h-[700px] min-w-[100%] text-text-dark"
        >
          <div
            className="flex gap-4 px-4 py-2 border-b-2 border-black h-1/6 max-h-[16.666667%] items-center"
          >
            <Image
                width={100}
                height={100}
                alt={`post-${userName}-${dayjs(postDate).format("SS")}`}
                src={userImage}
                className="rounded-2xl border-2 border-black h-[calc(9dvh-5px)] w-[calc(9dvh-5px)]"
            />
            <div
                className="flex flex-col justify-evenly"
            >
                <span
                    className="text-3xl"
                >{userName}</span>
                <span
                    className="text-lg text-text-primary"
                >{dayjs(postDate).format("YYYY/MM/DD")}</span>
            </div>
          </div>
          <div
            className=" w-full max-h-[83.333333%] p-2 overflow-auto"
          >
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
    </div>
  )
}
