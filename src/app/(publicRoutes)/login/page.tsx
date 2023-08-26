import { Button } from "@components"
import { AppRoutes } from "@types"
import Link from "next/link"

export const Page = () => {
    return (
        <>
            login
            <div
                className="w-full flex justify-center gap-2 items-center"
            >
                <Button>
                    Log in
                </Button>
                or
                <Link href={AppRoutes.REGISTER}>
                    <Button>
                        Create an account
                    </Button>
                </Link>
            </div>
        </>
    )
}

export default Page