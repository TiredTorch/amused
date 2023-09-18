'use client'
import { FC, PropsWithChildren } from "react"
import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth"

export const AuthContext: FC<PropsWithChildren<{session: Session | null}>> = ({
    children,
    session
}) => {
  return (
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
  )
}