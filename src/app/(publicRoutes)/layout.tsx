import { ReactNode } from "react"

const Layout = ({
    children
}: {
    children: ReactNode
}) => {
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