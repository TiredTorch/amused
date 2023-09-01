'use client'
import { ModalWindowProps } from "./ModalWindow.types"

export const ModalWindow: ModalWindowProps = ({
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