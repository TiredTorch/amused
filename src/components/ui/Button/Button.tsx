'use client'
import { ButtonProps } from "./Button.types"
import { getButtonStyles } from "./Button.styles"

export const Button: ButtonProps = ({
    children,
    className,
    ...props
}) => {
    return (
        <button
            {...props}
            className={getButtonStyles(className)}
        >
            {children}
        </button>
    )
}