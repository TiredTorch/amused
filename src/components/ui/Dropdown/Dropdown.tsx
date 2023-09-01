'use client'
import { DropdownProps } from "./Dropdown.types"

export const Dropdown: DropdownProps = ({
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