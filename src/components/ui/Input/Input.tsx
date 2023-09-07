'use client'
import { getInputStyles } from "./Input.styles"
import { InputProps } from "./Input.types"

export const Input: InputProps = ({
    label, 
    errorText,
    className,
    ...props
}) => {
    return (
        <div 
            className="w-full flex flex-col"
        >
            {label && 
                <label 
                    className="block mb-2 font-medium text-text-dark w-full"
                >
                    {label}
                </label>
            }
            <input 
                {...props}
                className={getInputStyles(className)}
            />
            {errorText && 
                <div 
                    className="text-red-600 w-full"
                >
                    {errorText}
                </div>
            }
        </div> 
    )
}