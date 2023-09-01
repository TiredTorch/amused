'use client'
import { ButtonProps } from "./Button.types"

export const Button: ButtonProps = ({
    children
}) => {
    return (
        <button
            className="bg-red-300"
        >
            {children}
        </button>
    )
}