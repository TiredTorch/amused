import { Button, DashboardIcon, FriendsIcon, NewPostIcon, ProfileIcon } from "@components"
import { ButtonType } from "@types"
import Link from "next/link"
import { ReactNode } from "react"

export const Layout = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <div
            className="w-screen h-screen bg-indigo-950 text-blue-400 font-semibold"
        >
            {children}
            <div
                className="absolute right-20 bottom-20 flex gap-4 flex-col"
            >
                <Button type={ButtonType.ICON}>
                    <NewPostIcon/>
                </Button>
                <Button type={ButtonType.ICON}>
                    <ProfileIcon/>
                </Button>
                <Button type={ButtonType.ICON}>
                    <FriendsIcon/>
                </Button>
                <Button type={ButtonType.ICON}>
                    <DashboardIcon/>
                </Button>
            </div>
        </div>
    )
}

export default Layout