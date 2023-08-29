'use client'
import { FC, PropsWithChildren } from "react"
import { ButtonProps } from "./Button.types"
import { ButtonType } from "@types"

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
    children,
    btnType = "button",
    type = ButtonType.DEFAULT,
    onClick
}) => {
    return (
        <button
            type={btnType}
            onClick={onClick}
            className={`
                ${type === ButtonType.DEFAULT && "text-indigo-900 bg-indigo-600 p-2 rounded-lg hover:bg-indigo-500 hover:text-indigo-800 duration-500"}
                ${type === ButtonType.ICON && "bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center text-cyan-200 font-extrabold"}
            `}
        >
            {children}
        </button>
    )
}