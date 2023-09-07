'use client'

import { ReactNode } from "react"
import Link from "next/link"
import { Button, DashboardIcon, UsersIcon, ProfileIcon } from "@components"
import { AppRoutes } from "@types"

export const Layout = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <div
            className="w-screen h-[100dvh] max-h-[100dvh] bg-text-primary font-semibold flex items-center justify-center overflow-hidden"
        >
            <div
                className="h-[100%] bg-primary w-full max-w-4xl flex flex-col justify-between border-x-4 border-black max-h-[100dvh]"
            >
                {children}
                <div
                    className="bg-light flex justify-evenly border-t-4 rounded-t-2xl border-black p-2 gap-2 h-[60px]"
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