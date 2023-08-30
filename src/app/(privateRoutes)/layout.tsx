'use client'

import { ReactNode } from "react"
import Link from "next/link"
import { Button, DashboardIcon, UsersIcon, NewPostIcon, ProfileIcon } from "@components"
import { AppRoutes, ButtonType } from "@types"

export const Layout = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <div
            className="w-screen h-[100dvh] bg-indigo-300 text-blue-400 font-semibold flex items-center justify-center overflow-hidden"
        >
            <div
                className="h-full bg-indigo-700 w-full max-w-4xl flex flex-col justify-between border-x-4 border-black"
            >
                {children}
                <div
                    className="bg-indigo-400 flex justify-evenly border-t-4 rounded-t-2xl border-black p-2 gap-2"
                >
                    <Link href={AppRoutes.USER_LIST} className="w-full">
                        <Button>
                            <UsersIcon/>
                        </Button>
                    </Link>
                    <Link href={`${AppRoutes.USER}idMe`} className="w-full">
                        <Button>
                            <ProfileIcon/>
                        </Button>
                    </Link>
                    <Link href={AppRoutes.DASHBOARD} className="w-full">
                        <Button>
                            <DashboardIcon/>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Layout