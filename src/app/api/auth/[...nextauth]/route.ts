import { getAuthOptions } from "@utils"
import NextAuth from "next-auth/next"

const handler = NextAuth(getAuthOptions())

export { 
    handler as GET,
    handler as POST
}