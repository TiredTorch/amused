'use client'
import { InputProps } from "./Input.types"

export const Input: InputProps = ({
    label, 
    errorText,
    ...props
}) => {
    return (
        <div 
            className=""
        >
            {label && 
                <label 
                    className="block mb-2 font-medium text-text-dark"
                >
                    {label}
                </label>
            }
            <input 
                {...props}
                className="bg-primary border border-dark text-text-dark rounded-lg block w-full p-2.5 placeholder:text-text-primary"
            />
            {errorText && 
                <div
                    className="text-red-600"
                >
                    {errorText}
                </div>
            }
        </div> 
    )
}