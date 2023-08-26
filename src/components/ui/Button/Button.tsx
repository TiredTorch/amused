import { FC, PropsWithChildren } from "react"
import { ButtonProps } from "./Button.types"
import { ButtonType } from "@types"

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
    children,
    type = ButtonType.DEFAULT,
    onClick
}) => {
    return (
        <button
            onClick={onClick}
            className={`${type} text-indigo-900 bg-indigo-600 p-2 rounded-lg hover:bg-indigo-500 hover:text-indigo-800 duration-500`}
        >
            {children}
        </button>
    )
}