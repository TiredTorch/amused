'use client'
import { InputProps } from "./Input.types"

export const Input: InputProps = ({
    children
}) => {
    return (
        <div
            className="bg-red-300"
        >
            {children}
        </div>
    )
}