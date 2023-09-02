'use client'
import { ButtonProps } from "./Button.types"

export const Button: ButtonProps = ({
    children
}) => {
    return (
        <button
            className="bg-primary text-text-dark p-2 rounded-md border-2 border-dark hover:bg-dark hover:border-text-primary duration-200"
        >
            {children}
        </button>
    )
}