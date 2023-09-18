import { AuthContext } from '@hocs/index'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getServerSession } from "next-auth/next"
import { getAuthOptions } from '@utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amused',
  description: 'Make it sound',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(getAuthOptions())

  return (
    <html lang="en">
      <AuthContext session={session}>
        <body className={inter.className}>{children}</body>
      </AuthContext>
    </html>
  )
}
