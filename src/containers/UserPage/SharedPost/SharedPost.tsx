'use client'

import dayjs from "dayjs"
import Image from "next/image"

export const SharedPost = () => {
  return (
    <div
        className="min-h-[500px] w-full"
    >
        <div
            className="bg-dark h-1/6 p-2 flex gap-6"
        >
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Congenital_absence_of_nose.jpg/300px-Congenital_absence_of_nose.jpg"
                width={100}
                height={100}
                alt="avatar"
                className="h-[67.3333px] w-[67.3333px] rounded-full"
            />
            <div
                className="flex flex-col h-full justify-between"
            >
                <span
                    className="text-3xl"
                >
                    User name
                </span>
                <span
                    className="text-xl"
                >
                    {dayjs().format("YYYY.MM.DD")}
                </span>
            </div>
        </div>
        <div
            className="bg-light h-5/6"
        >
            
        </div>
    </div>
  )
}
