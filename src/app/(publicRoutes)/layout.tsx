import { ReactNode } from "react"

const Layout = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <section
            className="w-screen h-[100dvh] flex justify-center items-center bg-indigo-700 text-blue-400 font-semibold"
        >
            <div 
                className="w-1/2 h-3/5 bg-blue-950 rounded-2xl p-8 flex items-center flex-col justify-center gap-4"
            >
                {children}
            </div>
        </section>
    )
}

export default Layout