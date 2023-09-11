'use client'

import { ReactNode } from "react"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { AppRoutes } from "@types"

const Layout = ({
    children
}: {
    children: ReactNode
}) => {
    const { data: session } = useSession()

    if (session) redirect(AppRoutes.DASHBOARD)

    return (
        <section
            className="w-screen h-[100dvh] flex justify-center items-center bg-primary font-semibold"
        >
            <div 
                className="max-w-[800px] w-full max-h-[600px] h-full bg-light rounded-2xl p-8 flex items-center flex-col justify-center gap-4"
            >
                {children}
            </div>
        </section>
    )
}

export default Layout