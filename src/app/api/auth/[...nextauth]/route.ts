import { AuthOptions } from "next-auth"
import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google" 

export const authOptions: AuthOptions = {
    secret: "huge_secret",
    providers: [
        GoogleProvider({
            clientId: "259253537168-jdqnurbiatoos6kdfbrvtg07c1s3t9eb.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ]
}

const handler =  NextAuth(authOptions)

export { 
    handler as GET,
    handler as POST
}