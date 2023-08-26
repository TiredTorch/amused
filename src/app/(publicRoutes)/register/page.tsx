import Link from "next/link"
import { Button } from "@components"
import { AppRoutes } from "@types"

export const Page = () => {
    return (
        <>
            register
            <div
                className="w-full flex justify-center gap-2 items-center"
            >
                <Button>
                    Sign up
                </Button>
                or
                <Link href={AppRoutes.LOGIN}>
                    <Button>
                        Log in your account
                    </Button>
                </Link>
            </div>
        </>
    )
}

export default Page