'use client'
import { twMerge } from "tailwind-merge"
import { ButtonProps } from "./Button.types"

export const Button: ButtonProps = ({
    children,
    className,
    ...props
}) => {
    return (
        <button
            {...props}
            className={twMerge("bg-primary text-text-dark p-2 w-full h-full rounded-md border-2 border-dark hover:bg-dark hover:border-text-primary duration-200 font-semibold", className)}
        >
            {children}
        </button>
    )
}