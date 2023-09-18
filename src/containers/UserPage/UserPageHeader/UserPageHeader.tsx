'use client'

import { useRouter } from 'next/navigation'
import Image from "next/image"
import dividerImage from "@assets/divider-music.png"
import { Button, Dropdown, OptionsIcon } from "@components"
import { signOut } from "next-auth/react"
import { AppRoutes } from "@types"

export const UserPageHeader = () => {
  const router = useRouter()

  return (
    <div
        className="flex justify-between items-center flex-col h-1/3 pb-2 shadow-lg bg-light border-b-2 border-black"
      >
        <div
          className="px-4 h-2/3 flex items-center gap-4 w-full py-6"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Congenital_absence_of_nose.jpg/300px-Congenital_absence_of_nose.jpg"
            width={100}
            height={100}
            alt="avatar"
            className="min-w-[20%] max-w-[20%] rounded-full border-2 border-black"
          />
          <div
            className="flex flex-col w-full h-full overflow-hidden text-slate-900"
          >
            <span
              className="text-4xl"
            >Username</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
          <div
            className="h-full flex justify-start items-start pt-4"
          >
            <Dropdown 
              options={[
                <Button
                    key="edit-button"
                    onClick={() => router.push(AppRoutes.CONFIG_PROFILE)}
                    >
                    Edit Profile 
                </Button>,
                <Button
                  key="logout-button"
                  onClick={() => signOut()}
                >
                  Log out
                </Button>
              ]} 
              label={<OptionsIcon/>}
              hideShevron
            />
          </div>
        </div>
        <Image
          src={dividerImage}
          alt="divider"
          className="h-1/3"
        />
      </div>
  )
}
