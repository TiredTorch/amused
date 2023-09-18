import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google" 

export const getAuthOptions: () => AuthOptions = () => ({
    secret: "huge_secret",
    providers: [
        GoogleProvider({
            clientId: "259253537168-jdqnurbiatoos6kdfbrvtg07c1s3t9eb.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ]
})