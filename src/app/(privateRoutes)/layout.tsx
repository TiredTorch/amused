'use client'

import { ReactNode } from "react"
import Link from "next/link"
import { Button, DashboardIcon, FriendsIcon, NewPostIcon, ProfileIcon } from "@components"
import { AppRoutes, ButtonType } from "@types"

export const Layout = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <div
            className="w-screen h-[100dvh] bg-indigo-950 text-blue-400 font-semibold flex items-center justify-center"
        >
            {children}
            <div
                className="absolute right-20 bottom-20 flex gap-4 flex-col"
            >
                <Link href={AppRoutes.NEW_POST}>
                    <Button type={ButtonType.ICON}>
                        <NewPostIcon/>
                    </Button>
                </Link>
                <Link href={AppRoutes.PROFILE}>
                    <Button type={ButtonType.ICON}>
                        <ProfileIcon/>
                    </Button>
                </Link>
                <Link href={AppRoutes.FRIENDS}>
                    <Button type={ButtonType.ICON}>
                        <FriendsIcon/>
                    </Button>
                </Link>
                <Link href={AppRoutes.DASHBOARD}>
                    <Button type={ButtonType.ICON}>
                        <DashboardIcon/>
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Layout